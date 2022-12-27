# <b>Testcase and Coverage</b>

## Description

This Package is used to run your testCases and Coverage without using installation of Jasmine and Sinon packages.

## Dependencies

    @kaavian-sys/testcase-and-coverage: "https://github.com/Kaavian-Systems-Pvt-Ltd/testcase_and_coverage.git"

## Install

    npm install @kaavian-sys/testcase-and-coverage
    npm install zx

### Purpose of zx Package

For the Purpose of run the Coverage, you have to install the zx package. Without installing zx package you get an error!

## Comments to run a testcase and coverage

    npx ksspecfile
    npx kstestcase
    npx kscoverage

### usage of ksspecfile comment

Once you run this comment , it asks whether you want to create a spec folder, if you give "yes" ("y", "Y", "YES", "Yes", "yes"), the spec folder will be created.

Then you can write the spec files inside that spec folder

### usage of kstestcase commet

After writing the spec files give the comment "npx kstestcase" to test your spec files.