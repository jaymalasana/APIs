const express = require("express");
const multer = require("multer");

const app = express();

const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.get("/upload", uploadFile, (req, res) => {
  res.send("image file uploaded");
});

console.log("Server running on port 8080");

app.listen(8080);
