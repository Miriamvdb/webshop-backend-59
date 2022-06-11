const express = require("express");
const { Router } = express;
const { toJWT, toData } = require("../auth/jwt");
const User = require("../models").user;

const router = new Router();

// get all users
router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (e) {
    console.log(e.message);
  }
});

// login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("Please provide an email address and a password");
  } else {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      res.status(400).send({ message: "Wrong email address!" });
    } else if (password === user.password) {
      const jwt = toJWT({ userId: user.id });
      res.send({ jwt });
    } else {
      res.status(400).send({ message: "Wrong password!" });
    }
  }
});

module.exports = router;
