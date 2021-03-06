const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, phoneNumber) {
    super(name, id, email);
    this.phoneNumber = phoneNumber;
  }

  getPhone() {
    return this.phoneNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
