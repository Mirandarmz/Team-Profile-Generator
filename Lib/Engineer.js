const Employee = require("./Lib/Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    this.github = github;

    super(name, id, email);
    this.name = area;
    this.id = id;
    this.email = email;
  }

  getRole() {
    return "Engineer";
  }

  getGithub(){
      return this.github;
  }
}
