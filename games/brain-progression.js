#!/usr/bin/env node

import { question } from "readline-sync";
import { gameLogic, getRandomIntFromInterval } from "../src/index.js"
export function brain_progression() {
console.log('What number is missing in the progression?');

const progression = () => {
    const firstProgression = getRandomIntFromInterval(1, 20)
    const lengthProgression = getRandomIntFromInterval(5, 10);
    const stepProgression = getRandomIntFromInterval(2, 10);
    const hiddenNumberIndex = getRandomIntFromInterval(1, lengthProgression)
    let progression = [];
    let hiddenNumber = 0;
    for (let i = firstProgression; progression.length < lengthProgression; i += stepProgression) {
        progression.push(i);
        if (progression.length - 1 === hiddenNumberIndex) {
            hiddenNumber = i;
            progression[hiddenNumberIndex] = '..';
        }
    }

    const question = progression.join(' ');
    const rightAnswer = hiddenNumber;
    return [question, String(rightAnswer)];
}

gameLogic(progression);

}
