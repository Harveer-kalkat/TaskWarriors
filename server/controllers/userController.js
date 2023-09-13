const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//get all warriors
const getWarriors = async (req, res) => {
  const warriros = await User.find({}).sort({ createdAt: -1 });

  res.status(200).json(warriros);
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "firstName",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};

// get a single warrior
const getUserByEmail = async (req, res) => {
  const { id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ error: "No warrior available" });
  // }

  const warrior = await User.find({ email: id });

  if (!warrior) {
    return res.status(404).json({ error: "No warrior available" });
  }

  res.status(200).json(warrior);
};
//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create a token
    const token = createToken(user._id);
    const id = user._id;

    res.status(200).json({ id, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const {
    profilePic,
    profilePicName,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    field,
    role,
  } = req.body;

  try {
    const user = await User.signup(
      profilePicName,
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      field,
      role
    );

    //create a token
    const token = createToken(user._id);
    const id = user._id;

    res.status(200).json({ id, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const registerUser = async (req, res) => {
  const { profilePic, firstName, lastName, email, password, phoneNumber } =
    req.body;

  try {
    const user = await User.register(
      profilePic,
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    );

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
  getUserByEmail,
  getAllUsers,
  registerUser,
};
