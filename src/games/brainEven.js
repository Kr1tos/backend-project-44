import start from '../index.js';
import { getRandomNumber, isEven } from '../tools.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const game = () => {
  const number = getRandomNumber(1, 100);
  const correctAnsw = isEven(number) ? 'yes' : 'no';
  const quest = `Question: ${number}`;

  return [quest, correctAnsw];
};

export default () => start(description, game);
