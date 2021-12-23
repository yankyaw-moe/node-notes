console.log(require("path").basename("/test/something")); //something
console.log(require("path").basename("/text/something.txt")); // something.txt
console.log(require("path").basename("/text/something.txt", ".txt")); // something
