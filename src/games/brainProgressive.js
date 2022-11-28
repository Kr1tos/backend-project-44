import start from '../index.js';
import func from '../functions.js';


const description = 'What number is missing in the progression?';
const game = () => {
    const length = func.getRandomNumber(5,10);
    const first = func.getRandomNumber(1,10);
    const step = func.getRandomNumber(1,10);
    const missing = func.getRandomNumber(1, length - 1);

    const progression = func.gemerateProgression(first, step, length);
    const quest = func.putMissingValue(missing, progression);
    const correctAnsw = String(progression[missing]);

    return [quest, correctAnsw];
}

export default () => start(description, game);