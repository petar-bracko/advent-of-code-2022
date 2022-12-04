import { puzzleInput } from "./day1_input.js";

const calories = puzzleInput.split("\n");
let elfs: { calories: number }[] = [];
let tempElf = { calories: 0 };

calories.forEach((calorie) => {
  if (calorie != "") {
    tempElf.calories += parseInt(calorie);
  } else {
    elfs = [...elfs, { ...tempElf }];
    tempElf = { calories: 0 };
  }
});

// 68467
console.log(
  `Highest amount of calories carried by single elf: ${Math.max(
    ...elfs.map((elf) => elf.calories)
  )} kcal.`
);

elfs.sort((a, b) => a.calories - b.calories);

let topThree = 0;
for (let i = 1; i < 4; i++) {
  topThree += elfs[elfs.length - i].calories;
}

// 203420
console.log(`Amount of calories carried by top 3 elfs: ${topThree} kcal.`);
