Cypress.Commands.add("validarObjeto", (objeto) => {
  cy.fixture("Global/global.json").then((the) => {
    cy.fixture("Financiero/financiero.json").then((fin) => {
      cy.wait(4000);
      if (objeto === "ZTAFACI") {
        cy.get(fin.objetos.ztafaci).should("be.visible").contains(objeto);
      } else if (objeto === "ZTAGENI") {
        cy.get(fin.objetos.ztageni).should("be.visible").contains("Interfaces");
      } else {
        cy.get(the.interfaz).should("be.visible").contains(objeto);
      }
    });
  });
});
