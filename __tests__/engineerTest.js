const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Engineer object", () => {
    it("Creates an engineer with name, id, email, and git", () => {
      const engineer = new Engineer(
        "John Smith",
        1,
        "Jsmith@gmail.com",
        "johnsgit"
      );

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("John Smith");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("Jsmith@gmail.com");
      expect(engineer.github).toEqual("johnsgit");
    });
  });

  describe("getName", () => {
    it("Should return name", () => {
      const engineer = new Engineer(
        "John Smith",
        1,
        "Jsmith@gmail.com",
        "johnsgit"
      );

      expect(engineer.getName()).toEqual("John Smith");
    });
  });

  describe("getId", () => {
    it("Should return id", () => {
      const engineer = new Engineer(
        "John Smith",
        1,
        "Jsmith@gmail.com",
        "johnsgit"
      );

      expect(engineer.getID()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return email", () => {
      const engineer = new Engineer(
        "John Smith",
        1,
        "Jsmith@gmail.com",
        "johnsgit"
      );

      expect(engineer.getEmail()).toEqual("Jsmith@gmail.com");
    });
  });

  describe("getGithub", () => {
    it("Should return github", () => {
      const engineer = new Engineer(
        "John Smith",
        1,
        "Jsmith@gmail.com",
        "johnsgit"
      );

      expect(engineer.getGithub()).toEqual("johnsgit");
    });
  });

  describe("getRole", () => {
    it("Should return the 'Engineer' ", () => {
      const engineer = new Engineer(
        "John Smith",
        1,
        "Jsmith@gmail.com",
        "johnsgit"
      );

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
