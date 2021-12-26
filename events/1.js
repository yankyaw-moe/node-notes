const EventEmitter = require("events");
const door = new EventEmitter();

door.on("slam", () => {
  console.log("slam console");
});

// emit()
console.log(door.emit("slam")); // emitting the event "slam"

// eventNames()
console.log(door.eventNames());
