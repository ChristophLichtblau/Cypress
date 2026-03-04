context("Zugriff auf Spaxe X API", () => {
  before(() => {
    cy.request("https://api.spacexdata.com/v3/missions")
      .its("body")
      .should("have.length", 10);
  });

  it("sollte überprüfen, ob die API erreichbar ist", () => {
    // Da du die eigentliche Prüfung schon im 'before'-Block gemacht hast,
    // kann dieser Testfall für den Anfang sogar leer bleiben.
    // Cypress braucht nur eine gültige Hülle!
    cy.log("Der before-Block war erfolgreich!");
  });
});
