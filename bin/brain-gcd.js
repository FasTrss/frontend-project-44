#!/usr/bin/env node

import runGCD, { description } from '../src/games/brain-gcd.js';
import { launchGame } from '../src/index.js';

launchGame(description, runGCD);
