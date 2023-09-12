"use strict";

const fsP = require("fs/promises");


// Step 1
/** cat: Reads a file and console logs the contents. Accepts file path as an
argument.
 */
async function cat(path) {
  let contents;

  try {
    contents = await fsP.readFile(path, "utf8");
  } catch (err) {
    console.log(`Error reading ${err.path}:
    ${err}`);
  }
  console.log(contents);
}


// Step 2
/** webCat: Reads the content of a passed in URL and prints contents to the
 console. */
async function webCat(url) {
  let response;

  try {
    response = await fetch(url);
  }
  catch (err) {
    console.log(`Error fetching ${url}:
    ${err}`);
  }

  const html = await response.text()
  console.log(html);
}


//Step 3
/**
 *
 */

async function catWrite(output, read) {

}








const arg = process.argv[2];

if (arg === "--out") {
  const output = process.argv[3];
  const read = process.argv[4];









} else {



try {
  const url = new URL(arg);
  webCat(arg);
}
catch {
  cat(arg);
}
}