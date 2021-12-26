const Stream = require("stream");

const readableStream = new Stream.Readable({
  read() {},
});
const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  console.log("chunk >>", chunk); // chunk >> <Buffer 68 69 21>
  console.log("chunk str ", chunk.toString()); // chunk str  hi!
  console.log("chunk val ", chunk.valueOf()); // chunk val  <Buffer 68 69 21>
  next();
  console.log("next"); // next
};

readableStream.pipe(writableStream);
// process.stdin.pipe(writableStream);

readableStream.push("hi!");
readableStream.push("ho!");

readableStream.on("close", () => writableStream.end());
writableStream.on("close", () => console.log("ended"));

readableStream.destroy();
