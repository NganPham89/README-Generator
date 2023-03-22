let inquirer = require("inquirer");
let fs = require("fs");
let generateMarkdown = require("./utils/generateMarkdown");

let questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your Github Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the best email to contact you in regard to this project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Enter a brief description of your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation method of your code',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'use',
        message: 'Enter how to begin using your code',
    },
    {
        type: 'input',
        name: 'cont',
        message: 'How would someone contribute to your code?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would a user test this application?',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ["afl_3.0","apache_2.0","cc","wtfpl","ecl_2.0","gpl_3.0","mit","mpl_2.0","osl_3.0","none"]
    }
];

inquirer
    .prompt(questions)
    .then ((response) => {
        let readmeContent = generateMarkdown(response);

        fs.writeFile("README-sample.md", readmeContent, (err) =>
        err ? console.log(err) : console.log("Generating README file")
        );
    })