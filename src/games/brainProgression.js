import start from '../index.js';
import { getRandomNumber, gemerateProgression, putMissingValue } from '../tools.js';

const description = 'What number is missing in the progression?';
const game = () => {
  const length = getRandomNumber(5, 10);
  const first = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const missing = getRandomNumber(1, length - 1);

  const progression = gemerateProgression(first, step, length);
  const quest = putMissingValue(missing, progression);
  const correctAnsw = String(progression[missing]);

  return [quest, correctAnsw];
};

export default () => start(description, game);
