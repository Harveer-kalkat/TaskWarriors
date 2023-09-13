require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const listingRoutes = require("./routes/listings");
const messageRoutes = require("./routes/messages");
const socket = require("socket.io");
const { dirname } = require("path");
const { fileURLToPath } = require("url");
const path = require("path");
var bodyParser = require("body-parser");
const { signupUser } = require("./controllers/userController");
const { createListing } = require("./controllers/listingController");
const multer = require("multer");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//signup routeS
app.post("/api/user/SignUp", upload.single("profilePic"), signupUser);
app.post(
  "/api/listing/CreateListings",
  upload.single("profilePic"),
  createListing
);
app.use("/api/user", userRoutes);
app.use("/api/listing", listingRoutes);
app.use("/api/messages", messageRoutes);

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
