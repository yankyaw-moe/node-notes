const fs = require("fs");
const path = require("path");

const folderPath = "../file-system";

console.log(fs.readdirSync(folderPath));
/*
[
    'file-descriptor.js',
    'file-path.js',
    'file-read.js',
    'file-stat.js',
    'file-write.js',
    'file.docx',
    'file.log',
    'file.txt',
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'test'
]
*/

let fullPath = fs.readdirSync(folderPath).map((fileName) => {
  return path.join(folderPath, fileName);
});

console.log(fullPath);
/* 
[
  '..\\file-system\\file-descriptor.js',
  '..\\file-system\\file-path.js',
  '..\\file-system\\file-read.js',
  '..\\file-system\\file-stat.js',
  '..\\file-system\\file-write.js',
  '..\\file-system\\file.docx',
  '..\\file-system\\file.log',
  '..\\file-system\\file.txt',
  '..\\file-system\\file1.txt',
  '..\\file-system\\file2.txt',
  '..\\file-system\\file3.txt',
  '..\\file-system\\test'
]
*/

// filter folder
const isFile = (fileName) => {
  return fs.lstatSync(fileName).isFile();
};

let filterFolder = fs
  .readdirSync(folderPath)
  .map((fileName) => {
    return path.join(folderPath, fileName);
  })
  .filter(isFile);

console.log(filterFolder);
/*
[
  '..\\file-system\\file-descriptor.js',
  '..\\file-system\\file-path.js',
  '..\\file-system\\file-read.js',
  '..\\file-system\\file-stat.js',
  '..\\file-system\\file-write.js',
  '..\\file-system\\file.docx',
  '..\\file-system\\file.log',
  '..\\file-system\\file.txt',
  '..\\file-system\\file1.txt',
  '..\\file-system\\file2.txt',
  '..\\file-system\\file3.txt'
]
*/
