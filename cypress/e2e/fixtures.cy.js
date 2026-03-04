/// <reference types="cypress" />

describe("Einbinder der fixture Datei", () => {
  beforeEach(() => {
    cy.fixture("example").then(function (data) {
      this.data = data;
      cy.log("THIS: ", this.data);
    });
  });

  it("Nutzt Fixture Daten in Network Request", function () {
    cy.visit("/commands/network-requests");
    cy.intercept("GET", "**/comments/*", this.data).as("getComment");
    cy.get(".network-btn").click();

    cy.wait("@getComment").then((res) => {
      cy.log("Response: ", res);
    });
  });

  it("Holt Daten aus einem Fixture", () => {
    cy.fixture("example").then((data) => {
      cy.log("DATA: ", data);
    });
  });

  it("Sets a Token in local Storage", () => {
    cy.setLocalStorage();
  });
}); // <-- Hier wird der describe-Block jetzt ganz am Ende geschlossen
