#!/usr/bin/env node

import runPrime, { description } from '../src/games/brain-prime.js';
import { launchGame } from '../src/index.js';

launchGame(description, runPrime);
