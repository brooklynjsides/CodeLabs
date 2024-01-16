const EventEmitter = require("events");

const greet = new EventEmitter();

greet.on("response", () => {
  console.log(`Hello, World!`);
});

greet.emit("response");
