const buf = Buffer.alloc(4);
buf.write("Hey!");

console.log(buf); // <Buffer 48 65 79 21>
console.log(buf.toString()); // Hey!
