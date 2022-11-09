#!/usr/bin/env node

import runEven, { description } from '../src/games/brain-even.js';
import { launchGame } from '../src/index.js';

launchGame(description, runEven);
