console.log("Top");

setTimeout(() => {
  console.log("Timeout");
}, 0);

setImmediate(() => {
  console.log("Immediate");
});

process.nextTick(() => {
  console.log("Next tick");
});

console.log("Bottom");
