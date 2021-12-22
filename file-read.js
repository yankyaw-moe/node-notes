const fs = require("fs");

fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

try {
  const content = fs.readFileSync("./file1.txt", "utf-8");
  console.log(content);
} catch (err) {
  console.log(err);
}
