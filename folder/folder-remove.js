const fs = require("fs");

let dir = "test-rename";

fs.rm(dir, { recursive: true, force: true }, (err) => {
  if (err) {
    throw err;
  }

  console.log(`${dir} is deleted!`);
});

/*
//##npm install fs-extra

const fsx = require("fs-extra");

const folder = "test-rename";

fsx.remove(folder, (err) => {
  console.error(err);
});

//#with promises
fs.remove(folder)
  .then(() => {
    //done
  })
  .catch((err) => {
    console.error(err);
  });

//#with async/await
async function removeFolder(folder) {
  try {
    await fs.remove(folder);
    //done
  } catch (err) {
    console.error(err);
  }
}

const folder = "/Users/joe";
removeFolder(folder);
*/
