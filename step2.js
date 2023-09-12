"use strict";

const fsP = require("fs/promises");


// Step 1
/** cat: Reads a file and console logs the contents. Accepts file path as an
argument.
 */
async function cat(path) {
  try {
    const contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.log(`Error reading ${err.path}:
    ${err}`);
  }
}


// Step 2
/** webCat: Reads the content of a passed in URL and prints contents to the
 console. */
async function webCat(url) {
  try {
    const response = await fetch(url);
    const html = await response.text()
    debugger;
    console.log(html);
  }
  catch (err) {
    console.log(`Error fetching ${url}:
    ${err}`);
  }
}



const arg = process.argv[2];

try {
  const url = new URL(arg);
  webCat(arg);
}
catch {
  cat(arg);
}