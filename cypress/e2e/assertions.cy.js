it("Zeigt eine aktive Klasse für die aktuelle Seite an", () => {
  cy.visit("/commands/actions");
  cy.get(".dropdown-menu").find("li").eq(2).should("have.class", "active");
});

it("Sollte keine aktive Klasse auf inaktiven Seiten haben", () => {
  cy.visit("/commands/actions");
  cy.get(".dropdown-menu")
    .find("li")
    .first()
    .should("not.have.class", "active")
    .find("a")
    .should("have.attr", "href", "/commands/querying");
});
