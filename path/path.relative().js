console.log(require("path").relative("/Users/joe", "/Users/joe/test.txt"));
// 'test.txt'
console.log(
  require("path").relative("/Users/joe", "/Users/joe/something/test.txt")
);
// 'something/test.txt'
