import start from '../index.js';
import func from '../functions.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const game = () => {
    const number = func.getRandomNumber(1,100);
    const correctAnsw = func.isEven(number) ? 'yes' : 'no';
    const quest =  `Question: ${number}`;

    return [quest, correctAnsw];
}

export default () => start(description, game);