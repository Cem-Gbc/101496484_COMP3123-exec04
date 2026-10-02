// COMP 3123 Lab 4 - Express JS exercise
// Cem Dudu - 101496484

const express = require("express");
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Serve static files from public/ (e.g. /instruction.html)
app.use(express.static("public"));

// GET /hello - plain text greeting
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname= - query params, defaults to Pritesh Patel
app.get("/user", (req, res) => {
  const firstname = typeof req.query.firstname === "string" && req.query.firstname !== ""
    ? req.query.firstname
    : "Pritesh";
  const lastname = typeof req.query.lastname === "string" && req.query.lastname !== ""
    ? req.query.lastname
    : "Patel";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname - path params
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users - body must be an array of { firstname, lastname }
app.post("/users", (req, res) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({ error: "Request body must be an array of users" });
  }
  res.json(req.body);
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.originalUrl} not found` });
});

// Error handler (e.g. malformed JSON body) - respond with JSON instead of HTML
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: status === 400 ? "Invalid JSON body" : "Internal server error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
