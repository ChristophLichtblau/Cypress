describe("Async Test", () => {
  beforeEach(() => {
    cy.visit("/commands/actions");
  });

  // Wenn  an JavaScript Code verwendet, wird dieser zuerst ausgeführt. Erst im Anschluss
  // wird der Cypress-Code ausgeführt.

  it("Text in das EMail Feld --> Locator == Placeholder", () => {
    cy.visit("/commands/actions");
    cy.findByPlaceholderText("Email").type("test@email.de");
    cy.wait(2000).then(() => {
      console.log("Test beendet. Dies hier ist JavaScribt");
      fetch("https://api.spacexdata.com/v3/missions")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
  });
});
