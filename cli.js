#!/usr/bin/env node

const { kiresay } = require('./index');

const message = process.argv[2];

console.log(kiresay(message));