
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

function validateInput(value) {
    if (value != '') {
        return true;

    } else {return 'Must enter an input.'};
}

const questions = [
    //title input
    {
        type:'input',
        name: 'title',
        message: 'Give the project a title name.',
        validate: validateInput,
    },
    //description input
    {
        type:'input',
        name: 'description',
        message: 'Enter the project description.',
        validate: validateInput,

    },
    //installation input
    {
        type:'input',
        name: 'installation',
        message: 'Enter the installation steps taken in this project.',
        validate: validateInput,
    },
    //usage input
    {
    type:'input',
    name: 'usage',
    message: 'Describe how this project can be used.',
    validate: validateInput,
    },
    //collaborations input
    {
        type:'input',
        name: 'collaborators',
        message: 'Name any collaborators on the project.',
        validate: validateInput,
    },
    //deployment input
    {
        type:'input',
        name: 'deployment',
        message: 'Enter method of deployment.',
        validate: validateInput,
    },
    //github repo
    {
        type:'input',
        name: 'repository',
        message: 'Enter link to github repo.',
        validate: validateInput,
    },

];

//generate ReadMe

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err){
        if (err) {
            return console.log(err);
        }
        console.log('Success!')
    });
}
//initialize questions
function init() {
    inquirer.prompt(questions).then((data) =>{
        console.log(JSON.stringify(data, null,''));
        writeToFile("./example/README.md", data);
    });
}
//call function to initialize app
init();

