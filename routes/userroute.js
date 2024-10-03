const express = require("express");
const User = require("../model/user");

const router = express.Router();

router.post("/createuser", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: "Email Already in user please try with different email",
    });
  }
});

module.exports = router;
