const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Employee object", () => {
    it("Creates an employee with name, id, and email", () => {
      const employee = new Employee("John Smith", 1, "jsmith@gmail.com");

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("John Smith");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("jsmith@gmail.com");
    });
  });

  describe("getName", () => {
    it("Should return name", () => {
      const employee = new Employee("John Smith", 1, "jsmith@gmail.com");

      expect(employee.getName()).toEqual("John Smith");
    });
  });

  describe("getId", () => {
    it("Should return id", () => {
      const employee = new Employee("John Smith", 1, "jsmith@gmail.com");

      expect(employee.getID()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return email", () => {
      const employee = new Employee("John Smith", 1, "jsmith@gmail.com");

      expect(employee.getEmail()).toEqual("jsmith@gmail.com");
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Employee'", () => {
      const employee = new Employee("John Smith", 1, "jsmith@gmail.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
