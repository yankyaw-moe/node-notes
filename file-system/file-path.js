const path = require("path");

const notes = "/users/joe/notes.txt";

console.log(path.dirname(notes)); // /users/joe
console.log(path.basename(notes)); // notes.txt
console.log(path.extname(notes)); // .txt

console.log(path.basename(notes, path.extname(notes))); // notes

const name = "ykm";
console.log(path.join("/", "users", name, "notes.txt"));
// /users/ykm/notes.txt  for linux and macOS
// \users\ykm\notes.txt  for window

console.log(path.resolve("file.txt"));
//  C:\YanKyawMoe\Projects\Node.js\node-notes\file.txt

console.log(path.resolve("tmp", "file.txt"));
//  C:\YanKyawMoe\Projects\Node.js\node-notes\tmp\file.txt

console.log(path.resolve("/tmp", "file.txt"));
//  C:\tmp\file.txt

console.log(path.normalize("/users/joe/..//test.txt"));
// \users\test.txt for window
// /users/test.txt for not window
