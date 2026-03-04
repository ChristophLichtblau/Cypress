const navBarText = Cypress.env("navbarText");

describe("Mein erster Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Sollte die Startseite erfolgreich laden", () => {
    cy.url().should("include", "/");

    cy.get("body").should("be.visible");
  });

  it("Cypress Website wird korrekt geladen", () => {
    cy.findByText(navBarText).should("exist");
  });
});
