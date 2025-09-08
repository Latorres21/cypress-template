import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Ingresar al URL de la aplicacion", () => {
  cy.log("Ingresando a la aplicación");
  cy.login2(); // Inicia sesión reutilizando la sesión guardada
  cy.wait(1000);
});

When("El usuario se loguea y accede a la aplicacion", () => {
  //cy.wait(1000);
  cy.log("Ingresó correctamente al sistema");
});

Then("Debe estar en la página de inicio", () => {
  cy.validarInicio();
});
