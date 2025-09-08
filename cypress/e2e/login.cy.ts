describe("Login - APP_NAME", () => {
  beforeEach(() => {
    cy.visit("/") // Toma la URL desde CYPRESS_BASE_URL en .env
  })

  it("Debe mostrar el formulario de login", () => {
    cy.contains("TRNG").should("be.visible")
  })

  it("Debe permitir login con credenciales válidas", () => {
    cy.get(".card-deck > :nth-child(1) > .card-body > .list-unstyled > :nth-child(1) > a").invoke("removeAttr", "target");
    cy.get(".card-deck > :nth-child(1) > .card-body > .list-unstyled > :nth-child(1) > a").click()
    cy.log("usuario: " + Cypress.env("CYPRESS_USERNAME"))
    cy.log("password: " + Cypress.env("CYPRESS_PASSWORD"))
    cy.get("input[name=usernameUserInput]").type(Cypress.env("CYPRESS_USERNAME"))
    cy.get("input[name=password]").type(Cypress.env("CYPRESS_PASSWORD"))
    cy.get("button[type=submit]").click()
    cy.contains("Bienvenido").should("be.visible")
  })
})
