const fs = require("fs");

fs.access("../file-system", (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log(res); // undefined
});
