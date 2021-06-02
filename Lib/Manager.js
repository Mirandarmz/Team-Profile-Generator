const Employee = require("./Lib/Employee.js");

class Manager extends Employee {
  constructor(name, id, email, offieNumber) {
    this.offieNumber = offieNumber;

    super(name, id, email);
    this.name = area;
    this.id = id;
    this.email = email;
  }

  getRole() {
    return "Manager";
  }
}
