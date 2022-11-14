import launchGame from '../index.js';
import { getRandomInt, getRandomIntFromInterval } from '../utilities.js';

const makeProgression = (
  firstProgression,
  stepProgression,
  lengthProgression,
) => {
  const progression = [];
  for (let i = firstProgression; progression.length < lengthProgression; i += stepProgression) {
    progression.push(i);
  }
  return progression;
};

const description = 'What number is missing in the progression?';
const intervalOfFirstNum = 20;
const beginOfTheStepInterval = 2;
const endOfTheStepInterval = 10;
const beginOfTheLengthInterval = 5;
const endOfTheLengthInterval = 12;

const generateProgression = () => {
  const firstProgression = getRandomInt(intervalOfFirstNum);
  const lengthProgression = getRandomIntFromInterval(
    beginOfTheLengthInterval,
    endOfTheLengthInterval,
  );
  const stepProgression = getRandomIntFromInterval(beginOfTheStepInterval, endOfTheStepInterval);
  const hiddenNumberIndex = getRandomInt(lengthProgression - 1);
  const progression = makeProgression(
    firstProgression,
    stepProgression,
    lengthProgression,
  );
  const hiddenNumber = progression[hiddenNumberIndex];
  progression[hiddenNumberIndex] = '..';
  return [progression.join(' '), hiddenNumber.toString()];
};

export default () => launchGame(description, generateProgression);
