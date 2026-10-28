const jwt = require("jsonwebtoken");

function readUser(req) {
  const token = req.cookies && req.cookies.token;
  if (!token) return null;
  try {
    const p = jwt.verify(token, process.env.JWT_SECRET);
    const isAdmin = (p.email && p.email.toLowerCase() === "pranumadab@gmail.com") || !!p.is_admin;
    return {
      id: p.id,
      name: isAdmin ? "Admin" : p.name,
      email: p.email,
      is_admin: isAdmin,
    };
  } catch (e) {
    return null;
  }
}

// Sets req.user if logged in, but never blocks the request
function optionalAuth(req, res, next) {
  req.user = readUser(req);
  next();
}

// Blocks the request if not logged in
function requireAuth(req, res, next) {
  const user = readUser(req);
  if (!user) return res.status(401).json({ error: "Please log in first." });
  req.user = user;
  next();
}

module.exports = { optionalAuth, requireAuth };
