const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, offieNumber) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;

    this.offieNumber = offieNumber;

  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

