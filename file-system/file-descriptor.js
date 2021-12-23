const fs = require("fs");

fs.open("./file2.txt", "r", (err, fd) => {
  console.log("fd ", fd);
});
