import { cons, car, cdr } from '@hexlet/pairs';
import start from '../index.js';
import func from '../functions.js';

const description = 'Find the greatest common divisor of given numbers.';
const game = () => {
  const pairs = cons(func.getRandomNumber(1, 100), func.getRandomNumber(1, 100));
  const quest = `Question: ${car(pairs)} ${cdr(pairs)}`;
  const correctAnsw = String(func.gcd(car(pairs), cdr(pairs)));

  return [quest, correctAnsw];
};

export default () => start(description, game);
