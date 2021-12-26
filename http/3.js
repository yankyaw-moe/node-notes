// console.log(require("http").ClientRequest());

let cliReq = new require("http").ClientRequest();
console.log("cliReq >>", cliReq);

/*
node:_http_client:197
  this.maxHeaderSize = maxHeaderSize;
                     ^

TypeError: Cannot set property maxHeaderSize of #<Object> which has only a getter
←[90m    at Object.ClientRequest (node:_http_client:197:22)←[39m
    at Object.<anonymous> (C:\YanKyawMoe\Projects\Node.js\node-notes\http\3.js:3:34)
←[90m    at Module._compile (node:internal/modules/cjs/loader:1101:14)←[39m
←[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)←[39m
←[90m    at Module.load (node:internal/modules/cjs/loader:981:32)←[39m
←[90m    at Function.Module._load (node:internal/modules/cjs/loader:822:12)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)←[39m
←[90m    at node:internal/main/run_main_module:17:47←[39m
*/
