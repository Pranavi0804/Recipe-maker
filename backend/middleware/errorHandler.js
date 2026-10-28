// Central error handler: never leaks stack traces or raw DB errors
function notFound(req, res) {
  res.status(404).json({ error: "Route not found." });
}

function errorHandler(err, req, res, next) {
  console.error("Server error:", err.message);
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Invalid JSON in request." });
  }
  res.status(500).json({ error: "Something went wrong on the server." });
}

module.exports = { notFound, errorHandler };
