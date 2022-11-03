#!/usr/bin/env node

import { getRandomInt, gameLogic } from '../src/index.js';

export default function brainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getEven = () => {
    const question = getRandomInt(50);
    const rightAnswer = (question % 2 === 0 ? 'yes' : 'no');
    return [question, rightAnswer];
  };

  gameLogic(getEven);
}
