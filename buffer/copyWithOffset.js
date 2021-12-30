const buf = Buffer.from("Hey?");
const bufcopy = Buffer.from("Yangh!");
bufcopy.set(buf.subarray(1, 3), 1);
console.log(bufcopy.toString()); // Yeygh!
