const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  profilePic: {
    type: String,
    default: "",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    enum: ["Programming_and_development", "Electronics", "Hair and Beauty"],
  },
  role: {
    type: String,
    required: true,
    default: "User",
  },
});

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect Email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

// static signup method
userSchema.statics.signup = async function (
  profilePic,
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  field,
  role
) {
  //validation
  if (
    !profilePic ||
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !phoneNumber ||
    !field
  ) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    profilePic,
    firstName,
    lastName,
    email,
    password: hash,
    phoneNumber,
    field,
    role,
  });

  return user;
};

// static register method
userSchema.statics.register = async function (
  firstName,
  lastName,
  email,
  password,
  phoneNumber
) {
  //validation
  if (!firstName || !lastName || !email || !password || !phoneNumber) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    firstName,
    lastName,
    email,
    password: hash,
    phoneNumber,
  });

  return user;
};

module.exports = mongoose.model("User", userSchema);
