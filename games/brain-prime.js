#!/usr/bin/env node

import { getRandomInt, gameLogic, getRandomIntFromInterval } from "../src/index.js"
export function brain_prime() {
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const prime = () => {
    let rightAnswer = '';
    const question = getRandomIntFromInterval(2,50);
    const array = [2, 3, 5, 7, 11];
    for (let i = 2; i < 10; i += 1) {
        if (question % i === 0) {
            rightAnswer = 'no';
            break;
        } else {
            rightAnswer = 'yes';
        }
    }
    if ( array.indexOf(question ) > 0) {
        rightAnswer = 'yes';
    }
    return [question, rightAnswer];
}

gameLogic(prime);

}
