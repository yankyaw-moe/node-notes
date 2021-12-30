const buf = Buffer.from("Hey!");
const bufcopy = Buffer.alloc(4); // allocate 4 bytes
console.log("before copy ", bufcopy.toString()); // ''
bufcopy.set(buf);
console.log("after copy ", bufcopy.toString()); // Hey!

const bufcopy1 = Buffer.alloc(3); // RangeError: offset is out of bounds
