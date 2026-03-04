context("Zugriff auf Spaxe X API", () => {
  before(() => {
    cy.request("https://api.spacexdata.com/v3/missions")
      .its("body")
      .should("have.length", 10);
  });
});

it();
