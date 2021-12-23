// WINDOWS
console.log(
  require("path").format({ dir: "C:\\Users\\joe", base: "test.txt" })
);
// 'C:\Users\joe\test.txt'

/*
// POSIX
require('path').format({ dir: '/Users/joe', base: 'test.txt' }) 
//  '/Users/joe/test.txt'

require('path').format({ root: '/Users/joe', name: 'test', ext: '.txt' }) 
//  '/Users/joe/test.txt'
*/
