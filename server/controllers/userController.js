const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//get all warriors
const getWarriors = async (req, res) => {
  const warriros = await User.find({}).sort({ createdAt: -1 });

  res.status(200).json(warriros);
};

// get a single warrior
const getWarrior = async (req, res) => {
  const { field } = req.params;

  if (!mongoose.Types.ObjectId.isValid(field)) {
    return res.status(404).json({ error: "No warrior available" });
  }

  const warrior = await User.findById(field);

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

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber, field } = req.body;

  try {
    const user = await User.signup(
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      field
    );

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser, getWarrior, getWarriors };
