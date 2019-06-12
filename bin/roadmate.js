#!/usr/bin/env node
const yargs = require('yargs');

const argv = yargs
  .demandOption(['tool'])
  .argv
