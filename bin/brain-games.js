#!/usr/bin/env node

import { sayHi } from "../src/cli.js";

console.log('Welcome to the Brain Games!');
const userName = sayHi();
console.log('Hello, ' + userName + '!')


