#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

async function question() {
  let text = await inquirer.prompt([
    {
      type: "input",
      name: "str",
      message: "Please enter text for word count: ",
    },
  ]);

  const words = text.str.split(" ");
  console.log("Total number of words:", words.length);
  const chars = words.join("");
  console.log("Total number of characters:", chars.length, "\n");
  await repeat();
}

async function repeat() {
  let input = await inquirer.prompt([
    {
      name: "continue",
      type: "confirm",
      message: "Do you want to convert text again?",
    },
  ]);
  if (input.continue === true) {
    await question();
  } else {
    console.log(chalk.greenBright("\nThank you"));
    process.exit();
  }
}

console.clear();

const sleep = () => {
  return new Promise((res, rej) => {
    setTimeout(res, 2000);
  });
};

const title = chalkAnimation.neon(
  chalk.cyanBright("WORDS AND CHARACTER COUNTER\n")
);
await sleep();
title.stop();
await question();
