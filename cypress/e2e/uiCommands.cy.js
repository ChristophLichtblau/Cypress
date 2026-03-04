it("Verlinkt korrekt auf sie Actionpage", () => {
  cy.visit("/");
  cy.findAllByText("Actions").first().click({ force: true });
  cy.url().should("include", "commands/actions");
});

it("Füge Text in ein Input-Feld ein", () => {
  cy.visit("/commands/actions");
  cy.findByPlaceholderText("Email").type("Test").should("have.value", "Test");
});

it("Lösche Inhalt eines Input-Feldes", () => {
  cy.visit("/commands/actions");
  cy.findByLabelText("Describe:")
    .type("Test description")
    .should("have.value", "Test description")
    .clear()
    .should("have.value", "");
});

it("Wir checken eine Checkbox", () => {
  cy.visit("/commands/actions");
  cy.get(".action-checkboxes [type='checkbox']")
    .eq(1)
    .check({ force: true })
    .should("be.checked");
});
