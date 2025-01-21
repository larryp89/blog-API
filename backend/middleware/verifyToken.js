const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader === "undefined") {
    return res.status(401).json({ error: "No token provided" });
  }

  const bearer = bearerHeader.split(" ");
  const token = bearer[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // decoded will contain { authorID, email } set on userController
    req.user = decoded; //NB Same as how added by passport in local strategy
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
  }
}
module.exports = verifyToken;

// Format of token as follfows
// Authorization: Bearer <access_token>
