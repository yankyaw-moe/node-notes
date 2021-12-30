const buf = Buffer.from("Hey!");
buf[1] = 111; // 'o' in UTF-8
console.log(buf.toString()); // Hoy!
