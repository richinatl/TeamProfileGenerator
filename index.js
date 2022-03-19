const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const managerHtml = require("./src/generateManager");
const engineerHtml = require("./src/generateEngineer");
const internHtml = require("./src/generateIntern");
const template = require("./src/htmlTemplate");

const team = [];

const addManager = [
  {
    name: "role",
    type: "confirm",
    message: "Are you ready to put your team together?",
  },
  {
    name: "name",
    type: "input",
    message: "What is the name of the manager:",
  },
  {
    name: "id",
    type: "input",
    message: "What is your ID number?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email:",
  },
  {
    name: "phoneNumber",
    type: "input",
    message: "What is your phone number?",
  },
  {
    name: "addAnother",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "The team is assembled"],
    message: "What would you like to do?",
  },
];

const addEngineer = [
  {
    name: "name",
    type: "input",
    message: "What is the name of the engineer:",
  },
  {
    name: "id",
    type: "input",
    message: "What is the ID of the engineer:",
  },
  {
    name: "email",
    type: "input",
    message: "What is the engineer's email?",
  },
  {
    name: "github",
    type: "input",
    message: "What is the engineer's Github username:",
  },
  {
    name: "addAnother",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "The team is assembled"],
    message: "What would you like to do next?",
  },
];

const addIntern = [
  {
    name: "name",
    type: "input",
    message: "What is the intern's name?",
  },
  {
    name: "id",
    type: "input",
    message: "What is the intern's ID?",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the intern's email:",
  },
  {
    name: "school",
    type: "input",
    message: "What college does the intern attend?",
  },
  {
    name: "addAnother",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "The team is assembled"],
    message: "What would you like to do next?",
  },
];

ask(addManager);

function ask(infoArray) {
  inquirer
    .prompt(infoArray)
    .then((member) => {
      team.push(member);

      if (member.addAnother === "Add Engineer") {
        ask(addEngineer);
      } else if (member.addAnother === "Add Intern") {
        ask(addIntern);
      } else {
        makeMembers(team);
      }
    })
    .catch((err) => console.log(err));
}

function makeMembers(team) {
  const profiles = team.map((member) => {
    const { name, id, email } = member;

    if (member.hasOwnProperty("phoneNumber")) {
      const { phoneNumber } = member;
      return new Manager(name, id, email, phoneNumber);
    }

    if (member.hasOwnProperty("github")) {
      const { github } = member;
      return new Engineer(name, id, email, github);
    }

    if (member.hasOwnProperty("school")) {
      const { school } = member;
      return new Intern(name, id, email, school);
    }
  });

  generateHtml(profiles);
}

function generateHtml(profiles) {
  let teamCards = "";
  profiles.forEach((profile) => {
    if (profile instanceof Manager) {
      const card = managerHtml(profile);
      teamCards += card;
    } else if (profile instanceof Engineer) {
      const card = engineerHtml(profile);
      teamCards += card;
    } else if (profile instanceof Intern) {
      const card = internHtml(profile);
      teamCards += card;
    }
  });

  const newHtml = template(teamCards);

  writeHtml(newHtml);
}

function writeHtml(newHtml) {
  fs.writeFile("./dist/create.html", newHtml, (err) => {
    if (err) throw err;
    console.log("HTML document successful, look in the /dist folder.");
  });
}
