Feature: Validacion ejecución de objetos financieros
    Background: El usuario ya está autenticado en el sistema
        Given el usuario ha iniciado sesión
    Scenario Outline: Validar cada objeto financiero
        When el usuario ingresa el nombre de un objeto financiero '<objeto>'
        Then el usuario verifica que se ejecute adecuadamente '<objeto>'
        Examples:
            | objeto   |
            | SZAESES  |
            | GZRCONS  |
            | SZADESE  |
            | SZAMAGR  |
            | ZSAPRXG  |
            | ZTAFACI  |
            | ZTAGENI  |
            | ZTAHOLD  |
            | ZTAVENA  |
            | ZTAVENR  |
            | SZAATTS  |
            | SZACONES |
            | SZARGLA  |
