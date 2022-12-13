#! /usr/bin/env zx

const branch = $`npx nyc --reporter=lcov --reporter=text-summary kstestcase`
console.log(`Current branch: ${branch}`)