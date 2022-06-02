#***Casos de Prueba Digital BanK***

|Nombre|Descripción|Precondición|Entradas|Pasos|Resultado Esperado|
|---|---|---|---|---|---|
|**Validar login Bank correcto**| Validar que se pueda loguiar con los usuarios y contraseña correctos.|-Ambiente de trabajo instalado
-url del ambiente
-usuario y contraseña|http://localhost:8080/bank/
jsmith@demo.io /Demo123!|1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Sign In|Mostrar el home de la pagina saludando al usuario en la parte superior derecho, mostrando graficas y panel izquierdo con las opciones de la pagina|

|**Validar login Bank correcto con tab enter**|Validar que se pueda loguiar con los usuarios y contraseña correctos|-Ambiente de trabajo instalado
-url del ambiente
-usuario y contraseña|http://localhost:8080/bank/
jsmith@demo.io /Demo123!|1. Ingresar a la url
2. click usuario escribir
3. tabulador Ingresar contraseña
4. accionar enter|Mostrar el home de la pagina saludando al usuario en la parte superior derecho, mostrando graficas y panel izquierdo con las opciones de la pagina|

|**Validar login Bank user incorrecto**|Validar que no se pueda loguiar con los usuarios y contraseña ingresados.|-Ambiente de trabajo instalado
-url del ambiente
-usuario y contraseña|http://localhost:8080/bank/
dsmith@demo.io /Demo123!|1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Sign In|Mostrar en la parte superior que alguno de los datos ingresados son incorrectos.|


|**Validar login Bank password incorrecto**|Validar que no se pueda loguiar con los usuarios y contraseña ingresados.|-Ambiente de trabajo instalado
-url del ambiente
-usuario y contraseña|http://localhost:8080/bank/
jsmith@demo.io /demo123!|1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Sign In|Mostrar en la parte superior que alguno de los datos ingresados son incorrectos. |


|**Validar login Bank user correcto check Remember Me**|Validar que se pueda loguiar con los usuarios y contraseñas, recordando lo ingresado|-Ambiente de trabajo instalado
-url del ambiente
-usuario y contraseña|http://localhost:8080/bank/
jsmith@demo.io /Demo123!
acción click en remember me|1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Remember Me
5. Click en Sign In
6. click en la foto de perfil
7. click en logout|Mostrar el home de la pagina saludando al usuario en la parte superior derecho, mostrando graficas y panel izquierdo con las opciones de la pagina, luego de haber presionado de haber salido mostrar los datos ingresados.|

|**Validar login Bank campos vacios click Remember Me**|Validar que no se pueda loguiar solo con el remember me marcado|-Ambiente de trabajo instalado
-url del ambiente
-usuario y contraseña|http://localhost:8080/bank/
acción click(remember me, sign in)|1. Ingresar a la url
2. Click en Remember Me
3. Click en Sign In|Mostrar un mensaje que los campos estan vacios|

|**Validar link Sign Up Here**|Validar que esta me redirija a un formulario para crear usuario y contrase#a|-Ambiente de trabajo instalado
-url del ambiente
|http://localhost:8080/bank/
acción click(Sign Up Here)|1. Ingresar a la url
2. Click en Sign Up Here|Mostrar un formulario para crear una cuenta con usuario y contrase#a|