const expresss = require("express");
const { addMessage, getMessages } = require("../controllers/messageController");
const router = expresss.Router();
router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);

module.exports = router;
