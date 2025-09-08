// Detectar y ocultar todos los iframes en la página
Cypress.Commands.add("ocultarTodosLosIframes", () => {
  cy.get("body").then(($body) => {
    // Solo continúa si existen iframes en el body
    if ($body.find("iframe").length > 0) {
      cy.get("iframe", { timeout: 10000 }).then(($iframes) => {
        const cantidad = $iframes.length;
        cy.log(`Se encontraron ${cantidad} iframe(s). Ocultando...`);

        $iframes.each((index, iframe) => {
          const id = iframe.id || "(sin id)";
          const src = iframe.src || "(sin src)";
          cy.log(`Ocultando iframe #${index + 1}: id="${id}", src="${src}"`);

          Cypress.$(iframe).css("display", "none");
        });
      });
    } else {
      cy.log("No se encontraron iframes en esta página.");
    }
  });
});
// Desbloquear capas interferentes en la UI
Cypress.Commands.add("desbloquearUI", () => {
  cy.get("body").then(($body) => {
    // Desactivar highlight
    if ($body.find("div.highlight").length > 0) {
      cy.get("div.highlight").invoke("css", "pointer-events", "none");
    }
    // Desactivar aut-panel
    if ($body.find('[data-cy="aut-panel"]').length > 0) {
      cy.get('[data-cy="aut-panel"]').invoke("css", "pointer-events", "none");
    }
    // Desactivar bannerHS
    if ($body.find("#bannerHS").length > 0) {
      cy.get("#bannerHS").invoke("css", "pointer-events", "none");
    }
    // Desactivar centerSearchContent
    if ($body.find(cy.get("#centerSearchContent > .row")).length > 0) {
      cy.get("#centerSearchContent > .row").invoke(
        "css",
        "pointer-events",
        "none"
      );
    }
    cy.log("UI desbloqueada para interacción.");
  });
});
// Buscar un objeto en el banner
// Este comando busca un objeto en el banner y espera a que se cargue el resultado
Cypress.Commands.add("buscarObjeto", (objeto) => {
  cy.fixture("Global/global.json").then((the) => {
    cy.visit(Cypress.config("banner"));
    cy.wait(1500);
    cy.get(the.busqueda.input).clear().type(objeto);
    cy.get(the.busqueda.input).type("{enter}");
    cy.wait(7000);
    cy.desbloquearUI();
    // Obtener el iframe y su URL
    cy.get("iframe")
      .should("have.attr", "src")
      .then((iframeSrc) => {
        cy.log("URL del iframe: ", iframeSrc);
        // Se hace una visita directa
        cy.visit(iframeSrc);
      });
  });
});
