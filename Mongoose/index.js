const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/eCommerce");

const productSchema = new mongoose.Schema({
  name: String,
  Age: Number,
});
const main = async () => {
  const product = mongoose.model("product", productSchema);
  let data = new product({ name: "adarsh", age: 24 });
  let result = await data.save();
  console.log(result);
};

main();
