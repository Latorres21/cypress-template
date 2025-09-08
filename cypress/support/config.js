// Confirguracion para evitar las exepciones que impiden la continuidad al ejecutar el test
Cypress.on('uncaught:exception', (err, runnable) => {  
    return false
  })