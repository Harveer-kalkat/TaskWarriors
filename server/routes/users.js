const express = require("express");
//constroller function

const {
  signupUser,
  loginUser,
  getWarrior,
  getWarriors,
} = require("../controllers/userController");
const router = express.Router();

//login route
router.post("/Login", loginUser);

//signup routeS
router.post("/SignUp", signupUser);

//get warriors
router.get("/WarriorSelection", getWarriors);

module.exports = router;
