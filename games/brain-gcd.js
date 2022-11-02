#!/usr/bin/env node

import { toString } from "@hexlet/pairs";
import { getRandomInt, gameLogic} from "../src/index.js"
export function brain_gcd() {
console.log('Find the greatest common divisor of given numbers');

const task = () => {
    const int1 = getRandomInt(60);
    const int2 = getRandomInt(120);
    const int = `${int1} ${int2}`;   
    return int;
}

const rightAnswer = (task1) => {
    const array = task1.split(" ");
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
    return answer.toString(10);
}
gameLogic(task, rightAnswer);

}
