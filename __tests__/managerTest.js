const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Manager object", () => {
    it("Creates a manager with name, id, email, and phoneNumber", () => {
      const manager = new Manager(
        "John Smith",
        1,
        "jsmith@gmail.com",
        4045551212
      );

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("John Smith");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("jsmith@gmail.com");
      expect(manager.phoneNumber).toEqual(4045551212);
    });
  });

  describe("getName", () => {
    it("Should return name", () => {
      const manager = new Manager(
        "John Smith",
        1,
        "jsmith@gmail.com",
        404555212
      );

      expect(manager.getName()).toEqual("John Smith");
    });
  });

  describe("getId", () => {
    it("Should return id", () => {
      const manager = new Manager(
        "John Smith",
        1,
        "jsmith@gmail.com",
        4045551212
      );

      expect(manager.getID()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return email", () => {
      const manager = new Manager(
        "John Smith",
        1,
        "jsmith@gmail.com",
        4045551212
      );

      expect(manager.getEmail()).toEqual("jsmith@gmail.com");
    });
  });

  describe("getPhone", () => {
    it("Should return phoneNumber", () => {
      const manager = new Manager(
        "John Smith",
        1,
        "jsmith@gmail.com",
        4045551212
      );

      expect(manager.getPhone()).toEqual(4045551212);
    });
  });

  describe("getRole", () => {
    it("Should return the 'Manager'", () => {
      const manager = new Manager(
        "John Smith",
        1,
        "jsmith@gmail.com",
        4045551212
      );

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
