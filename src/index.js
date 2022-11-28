import readlineSync from 'readline-sync';

const start = (description, game) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(description);

    let counter = 3;

    while(counter > 0) {
        const [question, correctAnsw] = game();
        console.log(`Question: ${question}`);
        const userAnsw = readlineSync.question('Your answer: ');

        if (correctAnsw == userAnsw) {
            console.log('Correct!');
            counter-=1
        } else {
            console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${correctAnsw}'.`);
            return;
        }
    }
    console.log(`Congratulations, ${name}`);
}
export default start