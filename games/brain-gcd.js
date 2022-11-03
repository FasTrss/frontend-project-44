#!/usr/bin/env node

import { getRandomInt, gameLogic } from '../src/index.js';

export default function brainGcd() {
  console.log('Find the greatest common divisor of given numbers');

  const getGcd = () => {
    const int1 = getRandomInt(60);
    const int2 = getRandomInt(120);
    const question = `${int1} ${int2}`;

    const array = question.split(' ');
    let answer = 0;
    const parsed = (a) => parseInt(a, 10);
    const num1 = parsed(array[0]);
    const num2 = parsed(array[1]);
    const min = (num1 > num2 ? num2 : num1);

    for (let i = min; i > 0; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        answer = i;
        break;
      }
    }
    const rightAnswer = answer.toString();
    return [question, rightAnswer];
  };
  gameLogic(getGcd);
}
