const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Intern object", () => {
    it("Creates an intern with name, id, email, and school", () => {
      const intern = new Intern(
        "John Smith",
        1,
        "Jsmith@gmail.com",
        "Georgia Tech"
      );

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("John Smith");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("Jsmith@gmail.com");
      expect(intern.school).toEqual("Georgia Tech");
    });
  });

  describe("getName", () => {
    it("Should return name", () => {
      const intern = new Intern(
        "John Smith",
        1,
        "Jsmith@gmail.com",
        "Georgia Tech"
      );

      expect(intern.getName()).toEqual("John Smith");
    });
  });

  describe("getId", () => {
    it("Should return id", () => {
      const intern = new Intern(
        "John Smith",
        1,
        "Jsmith@gmail.com",
        "Georgia Tech"
      );

      expect(intern.getID()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return email", () => {
      const intern = new Intern(
        "John Smith",
        1,
        "Jsmith@gmail.com",
        "Georgia Tech"
      );

      expect(intern.getEmail()).toEqual("Jsmith@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("Should return school", () => {
      const intern = new Intern(
        "John Smith",
        1,
        "Jsmith@gmail.com",
        "Georgia Tech"
      );

      expect(intern.getSchool()).toEqual("Georgia Tech");
    });
  });

  describe("getRole", () => {
    it("Should return the 'Intern'", () => {
      const intern = new Intern(
        "John Smith",
        1,
        "Jsmith@gmail.com",
        "Georgia Tech"
      );

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
