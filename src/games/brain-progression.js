#!/usr/bin/env node

import { launchGame, getRandomIntFromInterval, makeProgression } from '../src/index.js';

const description = 'What number is missing in the progression?';

export default function getProgression() {
  const firstProgression = getRandomIntFromInterval(1, 20);
  const lengthProgression = getRandomIntFromInterval(5, 10);
  const stepProgression = getRandomIntFromInterval(2, 10);
  const hiddenNumberIndex = getRandomIntFromInterval(1, lengthProgression - 1);
  const [question, rightAnswer] = makeProgression(
    firstProgression,
    stepProgression,
    lengthProgression,
    hiddenNumberIndex,
  );
  return [question, String(rightAnswer)];
}
launchGame(description, getProgression);
