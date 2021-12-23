let name = "ykm";
console.log(require("path").join("/", "users", name, "file.txt"));
// '/users/ykm/file.txt'

console.log(require("path").join("//", "users/", name, "/file.txt"));
// '/users/ykm/file.txt'
