// PART ONE
import { input } from "./input.js";

const elfPairs = input.split("\n");

let fullyOverlappedPairs = 0;
let partiallyOverlappedPairs = 0;
let firstElfSections = "";
let secondElfSections = "";

elfPairs.forEach((pair) => {
  [firstElfSections, secondElfSections] = pair.split(",");

  secondElfSections = secondElfSections.trim();

  if (isFullyOverlapping(firstElfSections, secondElfSections)) {
    fullyOverlappedPairs++;
  }

  if (isPartiallyOverlapping(firstElfSections, secondElfSections)) {
    partiallyOverlappedPairs++;
  }
});

// 560
console.log(
  `Amount of assignment paris that fully contain other: ${fullyOverlappedPairs}`
);

function isFullyOverlapping(firstElf: string, secondElf: string) {
  let firstElfStart = "";
  let firstElfEnd = "";
  let secondElfStart = "";
  let secondElfEnd = "";
  let hasOverlapping = false;

  [firstElfStart, firstElfEnd] = firstElf.split("-");
  [secondElfStart, secondElfEnd] = secondElf.split("-");

  if (
    parseInt(secondElfStart) >= parseInt(firstElfStart) &&
    parseInt(secondElfEnd) <= parseInt(firstElfEnd)
  ) {
    hasOverlapping = true;
  }

  if (
    !hasOverlapping &&
    parseInt(firstElfStart) >= parseInt(secondElfStart) &&
    parseInt(firstElfEnd) <= parseInt(secondElfEnd)
  ) {
    hasOverlapping = true;
  }

  return hasOverlapping;
}

// PART TWO
function isPartiallyOverlapping(firstElf: string, secondElf: string) {
  let firstElfStart = "";
  let firstElfEnd = "";
  let secondElfStart = "";
  let secondElfEnd = "";
  let hasOverlapping = false;

  [firstElfStart, firstElfEnd] = firstElf.split("-");
  [secondElfStart, secondElfEnd] = secondElf.split("-");

  if (
    parseInt(firstElfStart) >= parseInt(secondElfStart) &&
    parseInt(firstElfStart) <= parseInt(secondElfEnd)
  ) {
    hasOverlapping = true;
  }

  if (
    parseInt(firstElfEnd) >= parseInt(secondElfStart) &&
    parseInt(firstElfEnd) <= parseInt(secondElfEnd)
  ) {
    hasOverlapping = true;
  }

  if (
    parseInt(secondElfStart) >= parseInt(firstElfStart) &&
    parseInt(secondElfStart) <= parseInt(firstElfEnd)
  ) {
    hasOverlapping = true;
  }

  if (
    parseInt(secondElfEnd) >= parseInt(firstElfStart) &&
    parseInt(secondElfEnd) <= parseInt(firstElfEnd)
  ) {
    hasOverlapping = true;
  }

  return hasOverlapping;
}

// 839
console.log(
  `Amount of assignment paris that partially contain other: ${partiallyOverlappedPairs}`
);
