#! /usr/bin/env node
//shebang
import inquirer from "inquirer";
import chalk from "chalk";
let quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.magenta.bold("\n \t 1. Typescript is developed and maintened by? \n"),
        choices: ["Facebook", "Google", "Microsoft", "Mozilla"]
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.magenta.bold("\n \t 2. What is the file extension for typescript files? \n"),
        choices: [".js", ".ts", ".html", ".css"]
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.magenta.bold("\n \t 3. What is required to install Typescript? \n"),
        choices: ["npn", "nxp", "npm", "nmp"]
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.magenta.bold("\n \t 4.Typescript is the superset of? \n"),
        choices: ["JAVA", "JavaScript", "ReactJS", "Both A and C"]
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.magenta.bold("\n \t 5. What keyword allows reassignment of a variable? \n"),
        choices: ["const", "let", "var", "All of the above"]
    }
]);
let score = 0;
// ------------------------------Question 1--------------------------------------
switch (quiz.question_1) {
    case "Microsoft":
        console.log(chalk.rgb(3, 19, 110)("\n 1. Correct Answer \n"));
        ++score;
        break;
    default:
        console.log(chalk.rgb(209, 212, 23)("\t 1. Wrong Answer \n"));
}
// --------------------------------------Question 2----------------------------------------------
switch (quiz.question_2) {
    case ".ts":
        console.log(chalk.rgb(3, 19, 110)("\n 2. Correct Answer \n"));
        ++score;
        break;
    default:
        console.log(chalk.rgb(209, 212, 23)("\n 2. Wrong Answer \n "));
}
// --------------------------------------Question 3----------------------------------------------
switch (quiz.question_3) {
    case "npm":
        console.log(chalk.rgb(3, 19, 110)("\n 3. Correct Answer \n "));
        ++score;
        break;
    default:
        console.log(chalk.rgb(209, 212, 23)("\n 3. Wrong Answer \n"));
}
// --------------------------------------Question 4----------------------------------------------
switch (quiz.question_4) {
    case "JavaScript":
        console.log(chalk.rgb(3, 19, 110)("\n 4. Correct Answer \n"));
        ++score;
        break;
    default:
        console.log(chalk.rgb(209, 212, 23)(" \n 4. Wrong Answer \n "));
}
// --------------------------------------Question 5----------------------------------------------
switch (quiz.question_5) {
    case "let":
        console.log(chalk.rgb(3, 19, 110)("\n 5. Correct Answer \n"));
        ++score;
        break;
    default:
        console.log(chalk.rgb(209, 212, 23)("\n 5. Wrong Answer \n"));
}
console.log(chalk.greenBright.bold(`\n \t Your score is: ${score}`));
console.log(chalk.greenBright.bold("\n \t Thank you for taking the quiz! \n"));
