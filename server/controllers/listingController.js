const listing = require("../models/listingModel");
const mongoose = require("mongoose");
const fs = require("fs");

//get all listings
const getListings = async (req, res) => {
  const listings = await listing.find({}).sort({ createdAt: -1 });

  res.status(200).json(listings);
};

//get single listing
const getListing = async (req, res) => {
  const { id } = req.params;

  const listingReq = await listing.find({ field: id });

  if (!listingReq) {
    return res.status(404).json({ error: "No warrior available" });
  }

  res.status(200).json(listingReq);
};

const createListing = async (req, res) => {
  const {
    profilePic,
    profilePicName,
    firstName,
    lastName,
    email,
    price,
    field,
    description,
  } = req.body;

  // let emptyFields = [];

  // if (!firstName) {
  //   emptyFields.push("firstName");
  // }
  // if (!lastName) {
  //   emptyFields.push("lastName");
  // }

  // if (!email) {
  //   emptyFields.push("email");
  // }
  // if (!price) {
  //   emptyFields.push("price");
  // }
  // if (!field) {
  //   emptyFields.push("field");
  // }
  // if (!description) {
  //   emptyFields.push("description");
  // }
  // if (emptyFields.length > 0) {
  //   return res
  //     .status(400)
  //     .json({ error: "Please fill in all fields", emptyFields });
  // }
  try {
    const newListing = await listing.create({
      profilePicName,
      firstName,
      lastName,
      email,
      price,
      field,
      description,
    });
    res.status(200).json(newListing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getListings, getListing, createListing };
