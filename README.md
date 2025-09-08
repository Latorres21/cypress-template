# 🌐 Cypress E2E Template

Plantilla base para pruebas **end-to-end (E2E)** con [Cypress](https://www.cypress.io/).  
Este proyecto sirve como punto de partida para automatizar pruebas en aplicaciones web, manteniendo buenas prácticas
como manejo de variables de entorno, separación de configuraciones y estructura limpia.
Está pensado para ser flexible: se puede usar con **Cypress nativo (tests en .cy.ts)** o con **Cucumber (tests en .feature + step definitions)**.

---

## 📌 Requisitos

- Node.js >= 18
- npm o yarn
- Acceso a la aplicación que deseas probar

---

## 🚀 Instalación

Clona el repositorio y luego instala las dependencias:

git clone https://github.com/tu-org/cypress-template.git
cd cypress-template
npm install

## Otras consideraciones

Este proyecto utiliza un archivo .env para manejar configuraciones como URLs y credenciales.
Copia el archivo de ejemplo y edita .env:

cp .env.example .env

```
## Estructura básica de un proyecto en Cypress

cypress/
    e2e/ # Casos de prueba en Cypress nativo
login.cy # Ejemplo con Cypress nativo
    dashboard.cy
fixtures/ # Datos de prueba (ej: usuarios de prueba, JSON simulados)
    usuarios.json
    constantes.json
support/ # Comandos personalizados, hooks y configuraciones globales
    commands.js
features/ # Escenarios BDD escritos en Gherkin
    login.feature # Ejemplo con Cucumber
step_definitions/ # Implementación paso a paso de los escenarios BDD
    login.js
reports/ # Carpeta para reportes generados de las pruebas realizadas
downloads/ # Carpeta para pruebas que generen archivos
screenshots/ # Capturas automáticas si falla alguna prueba
videos/ # Videos generados de la ejecución
node_modules # Contiene todas las dependencias instaladas en el proyecto
.env # Variables de entorno
.gitignore # Archivos/carpetas que no se suben al repositorio
cypress.config.js # Configuración general de Cypress (baseURL, plugins...)
package.json # Dependencias, scripts de ejecución y configuración BDD
README.md # Documentación del proyecto e instrucciones de uso

## Modos de uso

Esta plantilla soporta dos estilos de pruebas:

- Opción 1: Cypress nativo

Los archivos deben estar en `cypress/e2e/` con extensión `.cy.ts` o `.cy.js`.

Ejemplo de ejecución:

```

    npm run cy:run:native   # Modo consola

- opción 2: Cypress con Cucumber (Gherkin)

Los archivos .feature deben ir en cypress/features/.
Los steps asociados van en cypress/step_definitions/.

Ejemplo de ejecución:

    npm run cy:run:cucumber # Modo consola

- Ejecutar ambos estilos:

Si quieres correr nativo y cucumber en la misma ejecución:

    npm run cy:run:all

Para elegir specs de manera manual desde el modo interactivo:

    npm run cy:open

Para ejecutar todas las pruebas, fusionando los resultados y generando un reporte en HTML:

    npm run test:full

La configuración en cypress.config.js y en package.json ya está lista para reconocer ambos.
Puedes mezclar ambos estilos en el mismo proyecto, o usar solo el que prefieras.

> - Si tu proyecto solo necesita un estilo (nativo o cucumber), simplemente ignora la carpeta que no uses.
> - Si quieres aprovechar ambos, puedes usarlos en paralelo sin problema.
> - La configuración de `cypress.config.js` ya soporta ambas rutas (`e2e` y `features`).

```

```
