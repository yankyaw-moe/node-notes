console.log(require("path").normalize("/users/joe/..//test.txt"));
// '/users/test.txt'

// my private testing @@
console.log(require("path").join("/users/joe/..//test.txt"));
// '/users/test.txt'
