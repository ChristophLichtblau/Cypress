describe("Maus-Events", () => {
  beforeEach(() => {
    cy.visit("/commands/actions");
  });

  it("Auslösen eines Popover beim klicken", () => {
    cy.get(".action-btn").click();
    cy.findByText("This popover shows up on click").should("be.visible");
  });

  it("Kann auf verschieden Sektionen einbes Canvas klicken", () => {
    cy.get("#action-canvas").click("top");
    cy.get("#action-canvas").click("bottomRight");
    cy.get("#action-canvas").click(80, 100);
    cy.get("#action-canvas").click("topLeft");
    cy.get("#action-canvas").click(100, 80);
  });

  it("Kann Doppelklick ausführen zum Bearbeiten", () => {
    cy.get(".action-div").dblclick().should("not.be.visible");
    cy.get(".action-input-hidden").should("be.visible");
  });

  it("Kann Rechsklick zum Bearbeiten", () => {
    cy.get(".rightclick-action-div").rightclick().should("not.be.visible");
    cy.get(".rightclick-action-input-hidden").should("be.visible");
  });

  it("Zeigt die Nav Links beim Hover", () => {
    cy.get(".dropdown-toggle").trigger("mouseover");
    //cy.get(".dropdown-menu").should("be.visible");
  });
});
