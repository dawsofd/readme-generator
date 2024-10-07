// package installation 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./assets/utils/generateMarkdown");

// user input questions
const userInput = [
    
    {
        type: "input",
        name: "github",
        message: "What's your GitHub username?",

    },

    {
        type: "input",
        name: "email",
        message: "What's your email?",

    },

    {
        type: "input",
        name: "title",
        message: "What's the name of your project?",

    },

    {
        type: "input",
        name: "descriptionWhy",
        message: "What was your motivation for building this project?",

    },

    {
        type: "input",
        name: "descriptionProblem",
        message: "What problem does your project solve?",

    },

    {
        type: "input",
        name: "descriptionLearn",
        message: "What did you learn from this project?",

    },

    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm i"
    },

    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",

    },

    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for the proper use of this project:",

    },

    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors for this repository?"
    },
        
    {
        type: "list",
        name: "license",
        message: "Choose a license",
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero Public License v3.0", "GNU General Public License v2.0", "GNU Lesser Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    
    },
];

// function to write README file 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize inquirer 
function init() {
    inquirer.prompt(userInput)
    .then((inqurierResponses) => {
        console.log("Generating README...");
        writeToFile("./assets/utils/sampleREADME.md", generateMarkdown({ ...inqurierResponses }));
    })
}

// initialize app 
init();