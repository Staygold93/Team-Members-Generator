const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");




const managerQuestions = () => {

 inquirer
 .prompt ([
    {
        type: "input",
        message: "What is the team managers name?",
        name: "name"
    },

    {
        type: "input",
        message: "What is the team managers id?",
        name: "id"
    },

    {
        type: "input",
        message: "What is the team managers email?",
        name: "email"
    },

    {
        type: "input",
        message: "What is the team managers office number?",
        name: "officeNumber"
    },

])
.then((answers) => {
    const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber,
    );
    managers.push(newManager);
    createTeamMember();
});
};

