const buf = Buffer.from("Hey!");
console.log(buf.subarray(0).toString()); // Hey!

const slice = buf.subarray(0, 2);
console.log(slice.toString()); // He

buf[1] = 111; // o
console.log(slice.toString()); // Ho
