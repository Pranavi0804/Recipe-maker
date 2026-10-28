require("dotenv").config();
const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 16 || process.env.JWT_SECRET.includes("paste-")) {
  console.error("Set a strong JWT_SECRET in backend/.env (see README).");
  process.exit(1);
}

const supabase = require("./supabase");
const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipes");
const favoriteRoutes = require("./routes/favorites");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "img-src": ["'self'", "data:", "https:", "blob:"],
      "upgrade-insecure-requests": null,
    },
  },
}));
app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());

// Health check: confirms server + database connection
app.get("/api/health", async (req, res) => {
  const { error } = await supabase.from("recipes").select("id", { head: true, count: "exact" }).limit(1);
  if (error) return res.status(503).json({ status: "error", database: "unreachable" });
  res.json({ status: "ok", database: "connected" });
});

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api", notFound);

// Serve the frontend
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Recipe Maker running at http://localhost:${PORT}`));
