#! /usr/bin/env node

const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Do you want to install json file?", (data) => {
  if (data === "yes") {
    const file =
      "{\n" +
      '\t"spec_dir": "spec",\n' +
      '\t"spec_files": [\n' +
      '\t\t"**/*[sS]pec.?(m)js",\n' +
      '\t\t"!**/*nospec.js"\n' +
      "\t],\n" +
      '\t"helpers": [\n' +
      '\t\t"helpers/**/*.js"\n' +
      "\t],\n" +
      '\t"env": {\n' +
      '\t\t"failSpecWithNoExpectations": false,\n' +
      '\t\t"stopSpecOnExpectationFailure": false,\n' +
      '\t\t"stopOnSpecFailure": false,\n' +
      '\t\t"random": false\n' +
      "\t}\n" +
      "}";
    fs.writeFileSync("spec/support/ksfile.json", file);
  } else if (data === "no") {
    readline.close();
  }
  // let data =
  //   "This is a file containing a collection" +
  //   " of programming languages.\n" +
  //   "1. C\n2. C++\n3. Python";

  readline.close();
});
