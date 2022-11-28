import start from '../index.js';
import { getRandomNumber, isPrime } from '../functions.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const game = () => {
  const quest = getRandomNumber(1, 50);
  const correctAnsw = isPrime(quest) ? 'yes' : 'no';

  return [quest, correctAnsw];
};

export default () => start(description, game);
