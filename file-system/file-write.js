const fs = require("fs");

const content = "Some content! Replace ";

fs.writeFile("./file3.txt", content, { flag: "a+" }, (err, res) => {
  // res => return undefined
  if (err) {
    console.error(err);
    return;
  }
  console.log("async"); // undefined
});

// synchronous version

const content2 = "Replace with sync content ";
try {
  fs.writeFileSync("./file3.txt", content2, { flag: "a+" });
  //file written successfully
  console.log("sync");
} catch (err) {
  console.error(err);
}

// Append to a file

const content3 = " Append Some content!";

fs.appendFile("./file3.txt", content3, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //done!
  console.log("append");
});
