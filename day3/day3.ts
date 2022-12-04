// PART ONE
import { input } from "./input.js";

const getLowercasePriority = (char: string) => char.charCodeAt(0) - 96;
const getUppercasePriority = (char: string) => char.charCodeAt(0) - 38;
const isCharUppercase = (char: string) => char.toUpperCase() === char;
const getCompartments = (content: string) => {
  let contentLength = content.length;
  return [
    content.slice(0, contentLength / 2),
    content.slice(contentLength / 2),
  ];
};

const backpacks = input.split("\n");

let sumOfPriorities = 0;
let leftCompartment = "";
let rightCompartment = "";
let commonItemType = "";

backpacks.forEach((backpack) => {
  [leftCompartment, rightCompartment] = getCompartments(backpack);

  const leftCompartmentItems = leftCompartment.split("");
  const rightCompartmentItems = rightCompartment.split("");

  leftCompartmentItems.forEach((item) => {
    if (rightCompartmentItems.includes(item)) {
      commonItemType = item;
      return;
    }
  });

  sumOfPriorities += isCharUppercase(commonItemType)
    ? getUppercasePriority(commonItemType)
    : getLowercasePriority(commonItemType);
});

// 7917
console.log(
  `PART ONE - Sum of priorities of common item types: ${sumOfPriorities}`
);

// PART TWO
const groups = [];
let tempGroup = [];
let sumOfGRoupPriorites = 0;

backpacks.forEach((backpack) => {
  tempGroup.push(backpack);
  if (tempGroup.length === 3) {
    groups.push(tempGroup);
    tempGroup = [];
  }
});

let firstElf = "";
let secondElf = "";
let thirdElf = "";
let commonGroupType = "";

groups.forEach((group) => {
  firstElf = group[0];
  secondElf = group[1];
  thirdElf = group[2];

  let firstElfItems = firstElf.split("");
  let secondElfItems = secondElf.split("");
  let thirdElfItems = thirdElf.split("");

  firstElfItems.forEach((item) => {
    if (secondElfItems.includes(item) && thirdElfItems.includes(item)) {
      commonGroupType = item;
    }
  });

  sumOfGRoupPriorites += isCharUppercase(commonGroupType)
    ? getUppercasePriority(commonGroupType)
    : getLowercasePriority(commonGroupType);
});

// 2585
console.log(
  `PART TWO - Sum of group priorities of common item types: ${sumOfGRoupPriorites}`
);
