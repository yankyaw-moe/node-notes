const fs = require("fs");

const folderName = "test";

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log("created");
    return;
  }
  console.log("already exist");
} catch (err) {
  console.error(err);
}
