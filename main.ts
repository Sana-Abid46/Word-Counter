#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.greenBright("\t\t\t\n-Welcome to my Word counter-\t\n"));


const answers : {
    Sentence : string
} = await inquirer.prompt([
    {

        name: "Sentence",
        type: "input",
        message: chalk.blueBright("Enter your sentence to count the word:")
    }
]);

const words = answers.Sentence.trim().split(" ");


console.log(chalk.gray(words));

console.log(chalk.magentaBright(`\t\nYour sentence word count is ${words.length}\t\n`));

console.log(chalk.yellow("\nTHANKS FOR USING MY WORD COUNTER\n"));

