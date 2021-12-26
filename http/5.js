console.log(require("http").ServerResponse());

/*
node:_http_server:181
  if (req.method === 'HEAD') this._hasBody = false;
          ^

TypeError: Cannot read properties of undefined (reading 'method')
←[90m    at Object.ServerResponse (node:_http_server:181:11)←[39m
    at Object.<anonymous> (C:\YanKyawMoe\Projects\Node.js\node-notes\http\5.js:1:29)
←[90m    at Module._compile (node:internal/modules/cjs/loader:1101:14)←[39m
←[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)←[39m
←[90m    at Module.load (node:internal/modules/cjs/loader:981:32)←[39m
←[90m    at Function.Module._load (node:internal/modules/cjs/loader:822:12)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)←[39m
←[90m    at node:internal/main/run_main_module:17:47←[39m
*/
