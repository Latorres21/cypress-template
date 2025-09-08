//Ingreso al ambiente de TRNG y seleccionar la opción Admin Pages
/*
Cypress.Commands.add("IngresoTRNG", () => {
    cy.clearAllCookies();
    cy.fixture("Login/login.json").then((the) => {
        //Tomar botones para ingresar al login
        cy.get(the.btnAdminPages).invoke('removeAttr', 'target'); 
        cy.get(the.btnAdminPages).click({force: true});
    });
}); 
*/
//Iniciar sesión de acuerdo al username definido en el fixture y desde la URL base de TRNG9
Cypress.Commands.add("login", () => {
  cy.session("usuario", () => {
    cy.visit(Cypress.config("baseUrl"));
    cy.fixture("Login/login.json").then((the) => {
      cy.get(the.btnAdminPages).invoke("removeAttr", "target");
      cy.get(the.btnAdminPages).click({ force: true });
      //Tomar los inputs para ingresar las credenciales
      cy.get(the.username.input).type(the.username.data.usuario);
      cy.get(the.password.input).type(the.password.data.valid);
      cy.get(the.btnLogin).click({ force: true });
    });
  });
});
//Iniciar sesión desde el banner como admin
Cypress.Commands.add("login2", () => {
  cy.session("usuario", () => {
    cy.visit(Cypress.config("banner"));
    cy.fixture("Login/login.json").then((the) => {
      cy.get(the.username.input).type(the.username.data.usuario);
      cy.get(the.password.input).type(the.password.data.valid);
      cy.get(the.btnLogin).click({ force: true });
    });
  });
});
//Validar que el usuario se encuentra en la página de inicio
Cypress.Commands.add("validarInicio", () => {
  cy.fixture("Login/login.json").then((the) => {
    cy.get(the.interfazInicio).should("be.visible").contains("Bienvenido(a)");
  });
});
