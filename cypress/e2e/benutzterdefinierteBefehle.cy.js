const token = "abcd123";

describe("Benutzerdefinierte Befhele in support/commands.js", () => {
  beforeEach(() => {
    cy.fixture("example").then(function (data) {
      this.data = data;
      cy.log("THIS: ", this.data);
    });
  });

  it("Setzen eines Token im LocalStorage + Wiedergabe des LocalStorage", () => {
    cy.setLocalStorage("token", token);
    cy.getLocalStorage("token").should("eq", token);
  });
});
