console.log(require("http").Agent());

let agent = new require("http").Agent();
console.log("agent >>", agent);

/*
Agent {
  _events: [Object: null prototype] {
    free: [Function (anonymous)],
    newListener: [Function: maybeEnableKeylog]
  },
  _eventsCount: 2,
  _maxListeners: undefined,
  defaultPort: 80,
  protocol: 'http:',
  options: [Object: null prototype] { path: null },
  requests: [Object: null prototype] {},
  sockets: [Object: null prototype] {},
  freeSockets: [Object: null prototype] {},
  keepAliveMsecs: 1000,
  keepAlive: false,
  maxSockets: Infinity,
  maxFreeSockets: 256,
  scheduling: 'lifo',
  maxTotalSockets: Infinity,
  totalSocketCount: 0,
  [Symbol(kCapture)]: false
}
agent >> Agent {
  _events: [Object: null prototype] {
    free: [Function (anonymous)],
    newListener: [Function: maybeEnableKeylog]
  },
  _eventsCount: 2,
  _maxListeners: undefined,
  defaultPort: 80,
  protocol: 'http:',
  options: [Object: null prototype] { path: null },
  requests: [Object: null prototype] {},
  sockets: [Object: null prototype] {},
  freeSockets: [Object: null prototype] {},
  keepAliveMsecs: 1000,
  keepAlive: false,
  maxSockets: Infinity,
  maxFreeSockets: 256,
  scheduling: 'lifo',
  maxTotalSockets: Infinity,
  totalSocketCount: 0,
  [Symbol(kCapture)]: false
}
*/
