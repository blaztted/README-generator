const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Any installation instructions for the user?",
    name: "instructions",
  },
  {
    type: "input",
    message:
      "Is there any usage information that the user needs to be aware of?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribution",
  },
  {
    type: "input",
    message:
      "How can the user test this application? Provide any necessary commands.",
    name: "test",
  },
  {
    type: "input",
    message: "What's your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What's your e-mail?",
    name: "email",
  },
  {
    type: "list",
    message: "What kind of license do your project have?",
    name: "license",
    choices: ["APACHE", "BSD", "CC-BY", "GPL", "MIT", "None"],
  },
];

console.log(questions[0]);

// function to write README file
function writeToFile(fileName, data) {
  let markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`Great, ${fileName} has been created`);
  });
}

// function to initialize program
function init() {}

// function call to initialize program
init();
