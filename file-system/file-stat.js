let fs = require("fs");

fs.stat("./file.txt", (err, stats) => {
  if (err) {
    console.log(stats);
  }
  console.log(stats);
  /*
  output=>      Stats {
                    dev: 3490616034,
                    mode: 33206,
                    nlink: 1,
                    uid: 0,
                    gid: 0,
                    rdev: 0,
                    blksize: 4096,
                    ino: 35184372089145940,
                    size: 48,
                    blocks: 0,
                    atimeMs: 1640150218042.9666,
                    mtimeMs: 1640150212915.6248,
                    ctimeMs: 1640150212915.6248,
                    birthtimeMs: 1640150042758.4375,
                    atime: 2021-12-22T05:16:58.043Z,
                    mtime: 2021-12-22T05:16:52.916Z,
                    ctime: 2021-12-22T05:16:52.916Z,
                    birthtime: 2021-12-22T05:14:02.758Z
                }
  */
  console.log(stats.isDirectory()); // false
  console.log(stats.isFile()); // true
  console.log(stats.size); // 48
  console.log(stats.isSymbolicLink()); // false
});
