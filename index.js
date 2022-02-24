const express = require("express");
const path = require("path");
const reqFilter = require("./middleware");
const dbConnect = require("./dbConnect");

const route = express.Router();
const app = express();
const publicPath = path.join(__dirname, "public");

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
};

main();
app.set("view engine", "ejs");
route.use(reqFilter);
app.get("", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});
// app.get("*", (req, resp) => {
//   resp.sendFile(`${publicPath}/pagenotfound.html`);
// });

route.get("/profile", (req, resp) => {
  const user = {
    name: "Adarsh",
    age: 24,
  };
  resp.render("profile", { user });
});
app.use("/", route);
app.listen(3000);
