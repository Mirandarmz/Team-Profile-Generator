const inquirer = require("inquirer");
const employee = require("./Lib/Employee");
const manager = require("./Lib/Manager");
const intern = require("./Lib/Intern");
const engineer = require("./Lib/Engineer");
const { writeFile } = require("fs");
const newManager;
let engineers=[];
let interns=[];

function init(){
    inquirer.prompt(
    {
        type: "input",
        name: "managerName",
        message: "Please enter the team manager's name",
    },
    {
        type: "input",
        name: "managerId",
        message: "Please enter the team manager's employee ID",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please enter the team manager's email adress",
    },
    {
        type: "input",
        name: "managerOffice",
        message: "Please enter the team manager's office number",
    },
    )
    .then(function(response){
        newManager = new manager(response.managerName,response.managerId,repsonse.managerEmail,repsonse.managerOffice);
        nextAddition();

    })
    .catch(function (err){
        console.log(err);
    });
}

function nextAddition(){
    inquirer.prompt(    {
        type: "list",
        name: "nextAddition",
        message: "Please select who you want to add next",
        options: ["Engineer","Intern","Finish building my team"]
    })
    .then(function(response){
        switch(response.nextAddition){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "Finish building my team":
                console.log("You are done! Open the html file to see your team");
                writeFile();
                return;
        }
    })
    .catch(function(err){
        console.log(err);
    })
}

function addEngineer(){
    inquirer.prompt(
        {
            type: "input",
            name: "name",
            message: "Please enter the Engineer's name",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the Engineer's employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Engineer's email adress",
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the team Engineer's github user",
        },
        )
        .then(function(response){
            const engineer = new engineer(response.name,response.id,repsonse.email,repsonse.github);
            interns.push(engineer);
            nextAddition();
    
        })
        .catch(function (err){
            console.log(err);
        });
}

function addIntern(){
    inquirer.prompt(
        {
            type: "input",
            name: "name",
            message: "Please enter the Engineer's name",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the Engineer's employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Engineer's email adress",
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the team Intern's school",
        },
        )
        .then(function(response){
            const intern = new intern(response.name,response.id,repsonse.email,repsonse.school);
            interns.push(intern);
            nextAddition();
    
        })
        .catch(function (err){
            console.log(err);
        });
}

init();