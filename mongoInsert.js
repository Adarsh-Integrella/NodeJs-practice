const dbConnect = require("./dbConnect");

const insert = async () => {
  const db = await dbConnect();
  const result = db.insert({
    name: "note 5",
    brand: "vivo",
    price: 35030,
    category: "mobile",
  });
  console.warn(db);
};

insert();
