import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario ha iniciado sesión", () => {
  cy.log("El usuario ha iniciado sesión correctamente");
});

When(
  "el usuario ingresa el nombre de un objeto financiero {string}",
  (objeto) => {
    cy.wait(500);
    cy.buscarObjeto(objeto);
  }
);

Then("el usuario verifica que se ejecute adecuadamente {string}", (objeto) => {
  cy.validarObjeto(objeto);
});
