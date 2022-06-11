const jwt = require("jsonwebtoken");

// define a secret key for our JWT
const secret =
  process.env.JWT_SECRET || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m";

// the 2 functions make use of the library's methods
// the first one creates a JWT token combining the data we hand it,
// and sets its expiration time.
function toJWT(data) {
  return jwt.sign(data, secret, { expiresIn: "2h" });
}

// the second one verifies tokens are valid
function toData(token) {
  return jwt.verify(token, secret);
}

// finally we export both functions so we can use them in our routes (or middleware!)
module.exports = { toJWT, toData };
