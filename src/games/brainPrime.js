import start from '../index.js';
import func from '../functions.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const game = () => {
  const quest = func.getRandomNumber(1, 50);
  const correctAnsw = func.isPrime(quest) ? 'yes' : 'no';

  return [quest, correctAnsw];
};

export default () => start(description, game);
