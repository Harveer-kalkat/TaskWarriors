const expresss = require("express");

const {
  getListings,
  getListing,
  createListing,
} = require("../controllers/listingController");

const router = expresss.Router();

//get all listings
router.get("/Dashboard", getListings);

//get single listing
router.get("/WarriorSelection/:id", getListing);

//post new listing
// router.post("/CreateListings", createListing);

module.exports = router;
