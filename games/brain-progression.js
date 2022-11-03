#!/usr/bin/env node

import { gameLogic, getRandomIntFromInterval } from '../src/index.js';

export default function brainProgression() {
  console.log('What number is missing in the progression?');
  const getProgression = () => {
    const firstProgression = getRandomIntFromInterval(1, 20);
    const lengthProgression = getRandomIntFromInterval(5, 10);
    const stepProgression = getRandomIntFromInterval(2, 10);
    const hiddenNumberIndex = getRandomIntFromInterval(1, lengthProgression);
    const progression = [];
    let hiddenNumber = 0;
    for (let i = firstProgression; progression.length < lengthProgression; i += stepProgression) {
      progression.push(i);
      if (progression.length - 2 === hiddenNumberIndex) {
        hiddenNumber = i;
        progression[hiddenNumberIndex] = '..';
      }
    }

    const question = progression.join(' ');
    const rightAnswer = hiddenNumber;
    return [question, String(rightAnswer)];
  };

  gameLogic(getProgression);
}
