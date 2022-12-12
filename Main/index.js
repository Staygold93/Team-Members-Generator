const inquirer = require("inquirer");
const fs = require("fs");


const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');



const managers = [];
const engineers = [];
const interns = [];




// create another team member prompt
const createTeamMember = () => {
    inquirer 
    .prompt ([
        {
            type: 'confirm',
            name: 'createTeamMember',
            message: 'Would you like to add another team member?',
        },
    ])
    .then((answers) => {
        if(answers.createTeamMember == true) {
        firstQuestion();
        } else {
            console.log(managers, engineers, interns);
            module.exports = managers;
            module.exports = engineers;
            module.exports = interns;
            // deleteHtml();
            // topHtmlFile();
            managerGenerator();
            engineerGenerator();
            internGenerator();
            // bottomHtmlFile();
            return answers;
        }
    })
}


// first question to user
const firstQuestion = () => {
    inquirer 
    .prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What is the employees role?',
            choices: ['Manager', 'Engineer', 'Intern' ],
        }
    ])
    .then((answers) => {
         if (answers.role === 'Manager') {
            managerQuestions(); }

            else if (answers.role === 'Engineer') {
                engineerQuestions(); }
            
            else if (answers.role === 'Intern') {
                internQuestions();
            }
        })

    };
   
    firstQuestion();

// engineer questions
    const engineerQuestions = () => {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineers name?'
            },

            {
                type: 'input',
                name: 'id',
                message: 'What is the Engineers Id?'
            },

            {
               type: 'input',
               name: 'email',
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
                answers.name,
                answers.id,
                answers.email,
                answers.githubUsername,
            );
            engineers.push(newEngineer);
            createTeamMember();
        });
     };



// manager questions

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



// intern questions
const internQuestions = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?'
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is the interns Id?'
        },

        {
           type: 'input',
           name: 'email',
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
            answers.name,
            answers.id,
            answers.email,
            answers.school,
        );
        interns.push(newIntern);
        createTeamMember();
    });
 };

 
 
 const deleteHtml = () => {
    fs.unlinkSync('./index.html');
};
 
const topHtmlFile = () => {
    fs.appendFileSync('index.html', generateHTML());
};

 const managerGenerator = () => {
    managers.forEach((manager => {
        fs.appendFileSync('index.html', generateMgr(manager));
    }));
};

const engineerGenerator = () => {
    engineers.forEach((engineer => {
        fs.appendFileSync('index.html', generateEng(engineer));
    }));
};

const internGenerator = () => {
    interns.forEach((intern => {
        fs.appendFileSync('index.html', generateInt(intern));
    }));
};

const bottomHtmlFile = () => {
    fs.appendFileSync('index.html', generateBtm());
};





const generateHTML = () => {
    return ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team-Generator</title>
    </head>
    <body>
    
    
    
    
    <nav>
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">Team Generator</h1>
            </div>
        </div>
    </nav>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    
`
 }    
 const generateInt = (intern) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded"style="max-width: 540px;">
    <div class="row">
        <div class="team-area col-8 d-flex ">
            <h2 class="intern">Intern</h2>
        </div>
    </div>    
            <div class="employee">
                <p>Name: ${intern.name}</p>
                <p>Email:${intern.email}</p>
                <p>Id:${intern.id}</p>
                <p>School:${intern.school}</p>
            </div>
</div>`
}

//add engineer card html
const generateEng = (engineer) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded"style="max-width: 540px;">
    <div class="row">
        <div class="team-area col-8 d-flex ">
            <h2 class="engineer">Enginner</h2>
        </div>
    </div>    
            <div class="employee">
                <p>Name:${engineer.name}</p>
                <p>Email:${engineer.email}</p>
                <p>Id:${engineer.id}</p>
                <p>Github Username${engineer.githubUsername}:</p>
            </div>
</div>`
}


const generateMgr =(manager) => {
    return `<div class="container mb-2 card-custom shadow-lg border-primary rounded" style="max-width: 540px;">
    <div class="row">
        <div class="team-area col-8 d-flex ">
            <h2 class="manager">Manager</h2>
        </div>
    </div>    
            <div class="employee">
                <p>Name:${manager.name}</p>
                <p>Email:${manager.email}</p>
                <p>Id:${manager.id}</p>
                <p>officeNumber:${manager.officeNumber}</p>
               
            </div>
</div>`
}


const generateBtm = () => {
    return `</body>
    </html>`

}