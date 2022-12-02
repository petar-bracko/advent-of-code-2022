// PART ONE
import { puzzleInput } from "./day2_input.js";
const rounds = puzzleInput.split("\n");

const elfsSigns = {
  ROCK: "A",
  PAPER: "B",
  SCISSORS: "C",
};
const mySigns = {
  ROCK: "X",
  PAPER: "Y",
  SCISSORS: "Z",
};
const shapeValues = {
  ROCK_VALUE: 1,
  PAPER_VALUE: 2,
  SCISSORS_VALUE: 3,
};
const roundScore = {
  LOSE: 0,
  DRAW: 3,
  WIN: 6,
};

let partOne_totalScore = 0;
let opponentHand = "";
let myHand = "";

rounds.forEach((round) => {
  [opponentHand, myHand] = round.split(" ");
  partOne_totalScore += roundResult(opponentHand, myHand);
});

// 13924
console.log(`Part one - Total score: ${partOne_totalScore}`);

function roundResult(opponentHand: string, myHand: string) {
  let score = 0;

  switch (myHand) {
    case mySigns.ROCK:
      if (opponentHand === elfsSigns.ROCK) {
        score += roundScore.DRAW;
      } else if (opponentHand === elfsSigns.PAPER) {
        score += roundScore.LOSE;
      } else if (opponentHand === elfsSigns.SCISSORS) {
        score += roundScore.WIN;
      } else {
        console.error("Unexpected opponent hand");
      }
      score += shapeValues.ROCK_VALUE;
      break;
    case mySigns.PAPER:
      if (opponentHand === elfsSigns.ROCK) {
        score += roundScore.WIN;
      } else if (opponentHand === elfsSigns.PAPER) {
        score += roundScore.DRAW;
      } else if (opponentHand === elfsSigns.SCISSORS) {
        score += roundScore.LOSE;
      } else {
        console.error("Unexpected opponent hand");
      }
      score += shapeValues.PAPER_VALUE;
      break;
    case mySigns.SCISSORS:
      if (opponentHand === elfsSigns.ROCK) {
        score += roundScore.LOSE;
      } else if (opponentHand === elfsSigns.PAPER) {
        score += roundScore.WIN;
      } else if (opponentHand === elfsSigns.SCISSORS) {
        score += roundScore.DRAW;
      } else {
        console.error("Unexpected opponent hand");
      }
      score += shapeValues.SCISSORS_VALUE;
      break;
    default:
      console.error("Unexpected error");
      break;
  }

  return score;
}

// PART TWO
const possibleOutcomes = {
  LOSE: "X",
  DRAW: "Y",
  WIN: "Z",
};

let partTwo_totalScore = 0;
let supposedOutcome = "";
// let opponentHand = "";
// let myHand = "";

rounds.forEach((round) => {
  [opponentHand, supposedOutcome] = round.split(" ");
  myHand = getMyHand(supposedOutcome);
  partTwo_totalScore += roundResult(opponentHand, myHand);
});

console.log(`Part two - Total score: ${partTwo_totalScore}`);

function getMyHand(outcome: string) {
  let handToPlay = "";

  switch (outcome) {
    case possibleOutcomes.LOSE:
      if (opponentHand === elfsSigns.PAPER) {
        handToPlay = mySigns.ROCK;
      } else if (opponentHand === elfsSigns.ROCK) {
        handToPlay = mySigns.SCISSORS;
      } else if (opponentHand === elfsSigns.SCISSORS) {
        handToPlay = mySigns.PAPER;
      } else {
        console.error("Unexpected opponent hand");
      }
      break;
    case possibleOutcomes.DRAW:
      if (opponentHand === elfsSigns.PAPER) {
        handToPlay = mySigns.PAPER;
      } else if (opponentHand === elfsSigns.ROCK) {
        handToPlay = mySigns.ROCK;
      } else if (opponentHand === elfsSigns.SCISSORS) {
        handToPlay = mySigns.SCISSORS;
      } else {
        console.error("Unexpected opponent hand");
      }
      break;
    case possibleOutcomes.WIN:
      if (opponentHand === elfsSigns.PAPER) {
        handToPlay = mySigns.SCISSORS;
      } else if (opponentHand === elfsSigns.ROCK) {
        handToPlay = mySigns.PAPER;
      } else if (opponentHand === elfsSigns.SCISSORS) {
        handToPlay = mySigns.ROCK;
      } else {
        console.error("Unexpected opponent hand");
      }
      break;
    default:
      console.error("Unexpected error");
      break;
  }

  return handToPlay;
}
