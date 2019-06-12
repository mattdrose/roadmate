#!/usr/bin/env node
const yargs = require('yargs');
const npx = require('libnpx');

yargs
  .command({
    command: 'eslint [options]',
    desc: 'Run eslint on your project',
    handler: (argv) => {
      const npxArgv = npx.parseArgs(['/', '/', 'eslint']);
      npx(npxArgv);
    }
  })
  .demandCommand(1, 'You need at least one command before moving on')
  .argv
