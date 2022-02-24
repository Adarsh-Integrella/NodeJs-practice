const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "Crud");
const filePath = `${dirPath}/list.txt`;

// fs.writeFileSync(filePath, "This is list of people, you can't see");
// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });

// fs.appendFile(filePath, "Adding more to list.", (err) => {
//   !err ? console.log("File updated") : console.log(err);
// });
