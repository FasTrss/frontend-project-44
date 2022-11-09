#!/usr/bin/env node

import runCalc, { description } from '../src/games/brain-calc.js';
import { launchGame } from '../src/index.js';

launchGame(description, runCalc);
