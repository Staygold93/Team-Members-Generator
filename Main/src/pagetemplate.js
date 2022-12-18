const Employee = require("../lib/employee")



 const generateTeam = team => {

 

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
            <h2 class="engineer">Engineer</h2>
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
const html = [];

html.push(team
    .filter(employee => employee.getRole()=== "manager")
    .map(manager => generateMgr(manager))
);
html.push(team
    .filter(employee => employee.getRole()=== "engineer")
    .map(engineer => generateEng(engineer))
    .join("")
);
html.push(team
    .filter(employee => employee.getRole()=== "intern")
    .map(intern=> generateInt(intern))
    .join("")
);

    return html.join("");

}






 module.exports = team => {
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
            <div>${generateTeam(team)} </div>
        </div>
    </nav>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
`
 }    