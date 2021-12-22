const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res) => {
//   fs.readFile(__dirname + "/file.txt", (err, data) => {
//     res.end(data);
//   });
// });

// server.listen(3000, () => console.log("server running..."));

//### alternative way by using streams

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + "/file2.txt");
  stream.pipe(res);
});

server.listen(3000, () => console.log("server running..."));
