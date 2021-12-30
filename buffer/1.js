const buf = Buffer.from("Heys!");
console.log(buf); // <Buffer 48 65 79 73 21>

console.log(buf[0]); //72
console.log(buf[1]); //101
console.log(buf[2]); //121

let allocBuf = Buffer.alloc(1024);
console.log("allocBuf ", allocBuf);
/*
allocBuf  <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
00 00 00 00 00 00 00 00 00 00 ... 974 more bytes>
*/

let allocUnsafe = Buffer.allocUnsafe(1024);
console.log("allocUnsafe ", allocUnsafe);
/*
allocUnsafe  <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
00 00 00 00 00 00 00 00 00 ... 974 more bytes>
*/

console.log(buf.length); // 5

// Iterate over the contents of a buffer
for (let val of buf) {
  console.log("val ", val);
}
/*
val  72
val  101
val  121
val  115
val  33
*/
