import { cons, car, cdr } from '@hexlet/pairs';
import start from '../index.js';
import { getRandomNumber, gcd } from '../tools.js';

const description = 'Find the greatest common divisor of given numbers.';
const game = () => {
  const pairs = cons(getRandomNumber(1, 100), getRandomNumber(1, 100));
  const quest = `Question: ${car(pairs)} ${cdr(pairs)}`;
  const correctAnsw = String(gcd(car(pairs), cdr(pairs)));

  return [quest, correctAnsw];
};

export default () => start(description, game);
