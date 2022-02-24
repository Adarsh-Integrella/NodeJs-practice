const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const res = require("express/lib/response");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, res, cb) {
    cb(null, file.filename + "-" + Date.now() + path.extname(file.orginalname));
  },
});
//Init upload

const upload = multer({
  storage: storage,
}).single("myimage");

//Init app
const app = express();

//EJS
app.set("view engine", "ejs");

//public
app.use(express.static("./public"));

app.get("/", (req, res) => res.render("index"));
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("index", {
        msg: err,
      });
    } else {
      console.log(req.file);
      res.send("test");
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
