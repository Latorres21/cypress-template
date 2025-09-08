Feature: Pruebas de ingreso al sistema
    Background: Ingreso a url
        Given Ingresar al URL de la aplicacion
    Scenario: Validar usuario en el sistema
        When El usuario se loguea y accede a la aplicacion
        Then Debe estar en la página de inicio



