#!/usr/bin/env node

import runProgression, { description } from '../src/games/brain-progression.js';
import { launchGame } from '../src/index.js';

launchGame(description, runProgression);
