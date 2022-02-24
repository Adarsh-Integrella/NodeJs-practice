const express = require("express");
const app = express();
const path = require("path");
const moment = require("moment");
const members = require("./members");
const uuid = require("uuid");
const { json } = require("express");
const { ppid } = require("process");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const logger = (req, resp, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}/${
      req.originalUrl
    } : ${moment().format()}`
  );
  next();
};

app.use(logger);
///get members
app.get("", (req, resp) => {
  resp.sendFile("index");
});
//get single member
app.get("/api", (req, resp) => {
  resp.json(members);
});
app.get("/api/members/:id", (req, resp) => {
  const found = members.some(
    (members) => members.id === parseInt(req.params.id)
  );
  found
    ? resp.json(
        members.filter((members) => members.id === parseInt(req.params.id))
      )
    : resp.status(404).json({ msg: "Member not found." });
});

app.post("/", (req, resp) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
    status: "active",
  };

  if (!newMember.name || !newMember.age) {
    return resp.status(400).json({ msg: "Please enter details." });
  }
  members.push(newMember);
  resp.json(members);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
