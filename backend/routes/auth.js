const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const supabase = require("../supabase");
const { requireAuth } = require("../middleware/auth");
const { str } = require("../utils/validate");

const router = express.Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  message: { error: "Too many attempts. Please try again in 15 minutes." },
});

function setCookie(res, user) {
  const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

// POST /api/auth/register  body: { name, email, password }
router.post("/register", limiter, async (req, res, next) => {
  try {
    const name = str(req.body.name);
    const email = str(req.body.email).toLowerCase();
    const password = typeof req.body.password === "string" ? req.body.password : "";

    if (name.length < 2 || name.length > 60) return res.status(400).json({ error: "Name must be 2-60 characters." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: "Enter a valid email." });
    if (password.length < 8 || password.length > 72) return res.status(400).json({ error: "Password must be 8-72 characters." });

    const { data: existing, error: e1 } = await supabase.from("users").select("id").eq("email", email).maybeSingle();
    if (e1) throw e1;
    if (existing) return res.status(409).json({ error: "This email is already registered." });

    const password_hash = await bcrypt.hash(password, 10);
    const { data: user, error: e2 } = await supabase
      .from("users").insert({ name, email, password_hash }).select("id,name,email").single();
    if (e2) throw e2;

    setCookie(res, user);
    res.status(201).json({ user });
  } catch (err) { next(err); }
});

// POST /api/auth/login  body: { email, password }
router.post("/login", limiter, async (req, res, next) => {
  try {
    const email = str(req.body.email).toLowerCase();
    const password = typeof req.body.password === "string" ? req.body.password : "";
    if (!email || !password) return res.status(400).json({ error: "Email and password are required." });

    const { data: user, error } = await supabase
      .from("users").select("id,name,email,password_hash").eq("email", email).maybeSingle();
    if (error) throw error;

    const ok = user && (await bcrypt.compare(password, user.password_hash));
    if (!ok) return res.status(401).json({ error: "Incorrect email or password." });

    setCookie(res, user);
    res.json({ user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) { next(err); }
});

// POST /api/auth/logout
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out." });
});

// GET /api/auth/me
router.get("/me", requireAuth, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
