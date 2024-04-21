#! /usr/bin/env node

import chalk from "chalk";

import inquirer from "inquirer";

const currency:any = {
    USD : 1,
    EUR : 0.92,
    GBP : 0.79,
    JPY : 151.61,
    INR : 83.29,
    PKR : 277.80,
    AED : 3.67,
    QAR : 3.65,
};

const user_answers = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From currency",
        type: "list",
        choices:["USD","EUR","GBP","JPY","INR","PKR","AED","QAR"],
    },
    {
        name: "to",
        message: "Enter To currency",
        type: "list",
        choices:["USD","EUR","GBP","JPY","INR","PKR","AED","QAR"],
    },
    {
        name: "amount",
        message: "Enter Amount",
        type: "number",
    },
]);

let fromAmount = currency[user_answers.from]
let toAmount = currency[user_answers.to]
let amount = user_answers.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(chalk.green.bold([user_answers.amount])+" "+[user_answers.from]+" To "+[user_answers.to]+" Is "+chalk.greenBright.bold(convertedAmount));
