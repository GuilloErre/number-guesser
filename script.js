let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (number, target) => {
    return Math.abs(number - target);
};

const compareGuesses = (human, computer, target) => {
    if (getAbsoluteDistance(human, target) <= getAbsoluteDistance(computer, target)) {
        return true;
    } else {
        return false;
    }
};

const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
        default:
            break;
    };
};

const advanceRound = () => {
    currentRoundNumber += 1;
};

