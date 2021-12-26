console.log(require("http").IncomingMessage());

/*
node:_http_incoming:62
  this._readableState.readingMore = true;
                                  ^

TypeError: Cannot set properties of undefined (setting 'readingMore')
←[90m    at Object.IncomingMessage (node:_http_incoming:62:35)←[39m
    at Object.<anonymous> (C:\YanKyawMoe\Projects\Node.js\node-notes\http\6.js:1:29)
←[90m    at Module._compile (node:internal/modules/cjs/loader:1101:14)←[39m
←[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)←[39m
←[90m    at Module.load (node:internal/modules/cjs/loader:981:32)←[39m
←[90m    at Function.Module._load (node:internal/modules/cjs/loader:822:12)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)←[39m
←[90m    at node:internal/main/run_main_module:17:47←[39m
*/
