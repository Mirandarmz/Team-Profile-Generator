//Imported necessary packages to be utilized in the script 
const inquirer = require("inquirer");
let Manager = require("./Lib/Manager.js");
let Intern = require("./Lib/Intern.js");
let Engineer = require("./Lib/Engineer.js");
const fs = require('fs'); 
const createHTML = require('./src/generateFile');
//Declared 3 global variables that will be used throughout the proyect
let newManager;
let engineers=[];
let interns=[];

//Function that runs when the index.js is invoked, prompting the user and using inputs to call functionality
function init(){
    inquirer.prompt(
    [{
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
    }]
    )
    .then(function(response){
        //Create manager and prompt user for the next additions, manager is already globally declared
        newManager = new Manager(response.managerName,response.managerId,response.managerEmail,response.managerOffice);
        nextAddition();

    })
    .catch(function (err){
        console.log(err);
    });
}

//In the next addition function, the user is prompted with a list to choose whether to add an engineer, an intern or finish building the team
function nextAddition(){
    inquirer.prompt(    {
        type: "list",
        name: "nextAddition",
        message: "Please select who you want to add next",
        choices: ["Engineer","Intern","Finish my team"]
    })
    .then(function(response){
        //Depending on the response the user enters, a function to add an engineer or an intern is called or if the user is finished, the function to generate the HTML file is called
        switch(response.nextAddition){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "Finish building my team":
                writeFile();
                console.log("You are done! Open the html file to see your team");
                return;
        }
    })
    .catch(function(err){
        console.log(err);
    })
}

//Function that requests for the engineer's data to the user, creates an engineer and adds it to the engineers array 
function addEngineer(){
    inquirer.prompt([
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
        }]
        )
        .then(function(response){
            const engineer = new Engineer(response.name,response.id,response.email,response.github);
            engineers.push(engineer);
            nextAddition();
    
        })
        .catch(function (err){
            console.log(err);
        });
}

//Function that requests for the intern's data to the user, creates an intern and adds it to the engineers array 
function addIntern(){
    inquirer.prompt([
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
        }]
        )
        .then(function(response){
            const intern = new Intern(response.name,response.id,response.email,response.school);
            interns.push(intern);
            nextAddition();
    
        })
        .catch(function (err){
            console.log(err);
        });
}

//Function that writes the file with the string generated in the createHTML function with the engineers and interns array and the manager created
function writeFile(){
    fs.writeFile('./dist/index.html', createHTML(engineers,interns,newManager), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Success! Open the index.html file to see your generated page")
        }
    })
}; 
init();