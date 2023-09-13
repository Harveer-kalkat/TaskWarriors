const express = require("express");
//constroller function

const {
  signupUser,
  loginUser,
  getUserByEmail,
  registerUser,
  getAllUsers,
} = require("../controllers/userController");
// const multer = require("multer");
// const path = require("path");
const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

//login route
router.post("/Login", loginUser);

// //signup routeS
// router.post("/SignUp", upload.single("profilePic"), signupUser);

router.post("/Register", registerUser);

router.get("/allusers/:id", getAllUsers);

//get warriors
router.get("/Dashboard/:id", getUserByEmail);

router.get("/Chat", getUserByEmail);

module.exports = router;
