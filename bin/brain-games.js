#!/usr/bin/env node

import { sayHi } from "../src/cli.js";

const userName = sayHi();
console.log('Hello, ' + userName + '!')


