import readlineSync from 'readline-sync';

// wait for response user
const userName = () => readlineSync.question('May I have your name?');
export default userName;
