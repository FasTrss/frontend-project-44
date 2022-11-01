#!/usr/bin/env node

import { sayHi } from "../src/cli.js";
import readlineSync, { question } from "readline-sync";

const name = sayHi();

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function userAnswer() { 
    const answerIs = readlineSync.question('Your answer: ')
    return answerIs;
}

export function gameLogic(task, rightAnswer) { 
    for (let i = 0; i < 3; i += 1) {
        let task1 = 0;
        task1 = task();
        console.log('Question: ' + task1 )
        const answer = userAnswer();
        if (answer === rightAnswer(task1)) {
            console.log('Correct!');
            if (i === 2) {
                console.log('Congratulations, '+ name + '!');
            }
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer(task1)}'.\n Let's try again, ${name}!`);
            break;
    }
}
}
