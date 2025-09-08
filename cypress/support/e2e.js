import "./globalCommands";
import "./Login/loginCommands";
import "./Cuentas_x_Cobrar/objetosFinancieroCommands";
import "./config";

beforeEach(() => {
  cy.ocultarTodosLosIframes();
  // Por ejemplo, limpiar cookies antes de cada prueba
  //cy.clearCookies();
});
// Para evitar que se muestren las solicitudes XHR en el Command Log
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML =
    ".command-name-request, .command-name-xhr { display: none }";
  style.setAttribute("data-hide-command-log-request", "");
  app.document.head.appendChild(style);
}
