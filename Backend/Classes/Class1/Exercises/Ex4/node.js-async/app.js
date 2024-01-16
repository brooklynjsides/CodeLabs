const fs = require("fs");

fs.readFile("./result.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);

  fs.writeFile("./result-async.txt", "Hello World!", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
});
