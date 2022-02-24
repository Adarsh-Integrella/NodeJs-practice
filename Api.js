const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  resp.send(data);
});

app.post("/", async (req, resp) => {
  console.log(req.body);
  resp.send({ name: "Adarsh" });
});
app.listen(5000);
