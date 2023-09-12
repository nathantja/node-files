"use strict";

const fsP = require("fs/promises");


// Step 1
/** cat: Reads a file and console logs the contents. Accepts file path as an
argument.
 */
async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.log(`Error reading ${err.path}:
    ${err}`);
  }
}

const path = process.argv[2];

cat(path);


