// TODO: Include packages needed for this application
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const path = require('path');
const writeFileAsync = util.promisify(fs.writeFile);
//const generateMarkdown = require('./utils/generateMarkdown.js');
//const path = require('path');
//const writeFileAsync = util.promisify(fs.writeFile);
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.',
    },
    {
        type: 'input',
        name: 'badges',
        message: 'Please provide badges for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Please provide your email address.',
    },
    {  type: 'input',
        name: 'questions',
        message: 'Any questions?.',
    },
    { type: 'input',
        name: 'features',
        message: 'Please provide features for your project.',
    },
    { type: 'input',
        name: 'support',
        message: 'Please provide support for your project.',
    },
    { type: 'input',
        name: 'acknowledgements',
        message: 'Please provide acknowledgements for your project.',
    },
];


// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fileName = 'README12.md';
fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const response = generateMarkdown(answers);
    console.log(response);
    writeToFile('README12.md', response);
});


// Function call to initialize app
init();




