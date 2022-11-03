#!/usr/bin/env node

import { sayHi } from "../src/cli.js";
import readlineSync, { question } from "readline-sync";

const name = sayHi();

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomIntFromInterval(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function userAnswer() { 
    const answerIs = readlineSync.question('Your answer: ')
    return answerIs;
}

export const gameLogic = ([question, rightAnswer]) => { 
    for (let i = 0; i < 3; i += 1) {
        console.log('Question: ' + question)
        const answer = userAnswer();
        if (answer === rightAnswer) {
            console.log('Correct!');
            if (i === 2) {
                console.log('Congratulations, '+ name + '!');
            }
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${name}!`);
            break;
    }
}
}
