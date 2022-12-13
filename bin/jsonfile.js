#! /usr/bin/env node

const fs = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Do you want to create a spec folder ?", (data) => {
  if (data === "yes" || 'y' || 'Y' || 'YES') {
    const path = "./spec/support";

    fs.access(path, (error) => {
      if (error) {
        fs.mkdir(path, { recursive: true }, (error) => {
          if (error) {
            console.log(error);
          } else {
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
						fs.writeFileSync("spec/support/jasmine.json", file);
						console.log('File Created !!');
          }
        });
      } else {
        console.log("Given Directory already exists and created !!");
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
						fs.writeFileSync("spec/support/jasmine.json", file);
      }
    });
	} else if (data === 'no' || 'n' || 'NO' || 'N') {
		readline.close();
	} else {
		readline.close();
	}

  readline.close();
});

