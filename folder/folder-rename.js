const fs = require("fs");

fs.rename("test", "test-rename", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //done
});

/*
try {
  fs.renameSync("/Users/joe", "/Users/roger");
} catch (err) {
  console.error(err);
}
*/
