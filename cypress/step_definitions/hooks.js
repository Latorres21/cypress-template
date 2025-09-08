import { Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.log("Iniciando sesión antes de cada escenario");
  //cy.login2(); // esto reutiliza la sesión si ya está guardada
});
