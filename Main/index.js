const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const   DIST_DIR = path.resolve(__dirname,"dist");
const distPath = path.join(DIST_DIR, "team.html");
const render = require("./src/pagetemplate.js");

const teamMembers = [];


function appMenu() {
    function createManager(){
        inquirer
 .prompt ([
    {
        type: "input",
        message: "What is the team managers name?",
        name: "managerName"
    },

    {
        type: "input",
        message: "What is the team managers id?",
        name: "managerId"
    },

    {
        type: "input",
        message: "What is the team managers email?",
        name: "managerEmail"
    },

    {
        type: "input",
        message: "What is the team managers office number?",
        name: "officeNumber"
    }
])
.then((answers) => {
const manager = new Manager(
    answers.managerName,
    answers.managerId,
    answers.managerEmail,
    answers.officeNumber,
)
teamMembers.push(manager)
createTeam()
})
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'userChoice',
                message: 'What would you like to do next?',
                choices: ["Add an Engineer", "Add an Intern", "Build Team Profile"]

            }
        ])
        .then((choice) => {
            switch(choice.userChoice){
                case "Add an Engineer":
                    addEngineer();
                    break; 

                case "Add an Intern":
                    addIntern();
                    break;

                default: 
                    buildTeam();
            }
        })
    }
function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name?'
        },

        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the Engineers Id?'
        },

        {
           type: 'input',
           name: 'engineerEmail',
           message: 'What is the Engineers email address?'
        },
        
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is the Engineers Github Username?'
         }
    ])
    .then((answers) => {
        const newEngineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.githubUsername,
        );
        teamMembers.push(newEngineer);
        createTeam();
    })
    
}
function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?'
        },

        {
            type: 'input',
            name: 'internId',
            message: 'What is the interns Id?'
        },

        {
           type: 'input',
           name: 'internEmail',
           message: 'What is the Interns email address?'
        },
        
        {
            type: 'input',
            name: 'school',
            message: 'What is the Interns School?'
         }
    ])
    .then((answers) => {
        const newIntern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.school,
        );
        teamMembers.push(newIntern);
        createTeam();
    });
}
function buildTeam() {
    fs.writeFileSync(distPath,render(teamMembers),"utf-8");
}
createManager();
}
appMenu();


// create another team member prompt
// const createTeamMember = () => {
//     inquirer 
//     .prompt ([
//         {
//             type: 'confirm',
//             name: 'createTeamMember',
//             message: 'Would you like to add another team member?',
//         },
//     ])
//     .then((answers) => {
//         if(answers.createTeamMember == true) {
//         firstQuestion();
//         } else {
//             console.log(managers, engineers, interns);
//             module.exports = managers;
//             module.exports = engineers;
//             module.exports = interns;
           
//             managerGenerator();
//             engineerGenerator();
//             internGenerator();
         
//             return answers;
//         }
//     })
// }


// // first question to user
// const firstQuestion = () => {
//     inquirer 
//     .prompt ([
//         {
//             type: 'list',
//             name: 'role',
//             message: 'What is the employees role?',
//             choices: ['Manager', 'Engineer', 'Intern' ],
//         }
//     ])
//     .then((answers) => {
//          if (answers.role === 'Manager') {
//             managerQuestions(); }

//             else if (answers.role === 'Engineer') {
//                 engineerQuestions(); }
            
//             else if (answers.role === 'Intern') {
//                 internQuestions();
//             }
//         })

//     };
   
//     firstQuestion();

// // engineer questions
//     const engineerQuestions = () => {
     
//      };



// // manager questions

// const managerQuestions = () => {

//  inquirer
//  .prompt ([
//     {
//         type: "input",
//         message: "What is the team managers name?",
//         name: "name"
//     },

//     {
//         type: "input",
//         message: "What is the team managers id?",
//         name: "id"
//     },

//     {
//         type: "input",
//         message: "What is the team managers email?",
//         name: "email"
//     },

//     {
//         type: "input",
//         message: "What is the team managers office number?",
//         name: "officeNumber"
//     },

// ])
// .then((answers) => {
//     const newManager = new Manager(
//         answers.name,
//         answers.id,
//         answers.email,
//         answers.officeNumber,
//     );
//     managers.push(newManager);
//     createTeamMember();
// });
// };



// // intern questions
// const internQuestions = () => {
//     inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is the interns name?'
//         },

//         {
//             type: 'input',
//             name: 'id',
//             message: 'What is the interns Id?'
//         },

//         {
//            type: 'input',
//            name: 'email',
//            message: 'What is the Interns email address?'
//         },
        
//         {
//             type: 'input',
//             name: 'school',
//             message: 'What is the Interns School?'
//          }
//     ])
//     .then((answers) => {
//         const newIntern = new Intern(
//             answers.name,
//             answers.id,
//             answers.email,
//             answers.school,
//         );
//         interns.push(newIntern);
//         createTeamMember();
//     });
//  };

 
 

 


// //  const managerGenerator = () => {
// //     managers.forEach((manager => {
// //         fs.appendFileSync('index.html', generateMgr(manager));
// //     }));
// // };

// // const engineerGenerator = () => {
// //     engineers.forEach((engineer => {
// //         fs.appendFileSync('index.html', generateEng(engineer));
// //     }));
// // };

// // const internGenerator = () => {
// //     interns.forEach((intern => {
// //         fs.appendFileSync('index.html', generateInt(intern));
// //     }));
// // };







