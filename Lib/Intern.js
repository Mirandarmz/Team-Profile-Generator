const Employee = require("./Lib/Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    this.school = school;

    super(name, id, email);
    this.name = area;
    this.id = id;
    this.email = email;
  }

  getRole() {
    return 'Intern';
  }

  getSchool(){
      return this.school;
  }
}
