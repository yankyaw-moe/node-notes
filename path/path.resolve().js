console.log(require("path").resolve("joe.txt"));
// C:\YanKyawMoe\Projects\Node.js\node-notes\path\joe.txt

console.log(require("path").resolve("tmp", "joe.txt"));
// C:\YanKyawMoe\Projects\Node.js\node-notes\path\tmp\joe.txt

console.log(require("path").resolve("/tmp", "joe.txt"));
// C:\tmp\joe.txt
