#***Casos de Prueba Digital BanK***

##Nombre
**Validar login Bank**

##Descripción
Validar que se pueda loguiar con los usuarios y contraseña correspondiente.

##Precondición
-Ambiente de trabajo instalado
-url del ambiente
-usuario y contraseña

##Entradas
http://localhost:8080/bank/
jsmith@demo.io /Demo123!

##Pasos
1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Sign In

##Resultado Esperado
Mostrar el home de la pagina saludando al usuario en la parte superior derecho, mostrando graficas y panel izquierdo con las opciones de la pagina


##Nombre
**Validar despliegue de Checking View Checking**

##Descripción
Validar que se despliegue de View Checking y crear New Checking, accionando View Checking

##Precondición
-Estar loguiado

##Entradas
acción click en cheking

##Pasos
1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Sign In
5. Clickear cheking
6. Clickear View checking


##Resultado Esperado
Mostrar un recuadro con la información de la joint Checking con un boton on, como tambien grilla con información detallada de los movimientos



##Nombre
**Validar deshabilitar Joint Checking**

##Descripción
Validar que al clickear el boton ON cambie a off

##Precondición
-Estar loguiado

##Entradas
acción click en boton ON

##Pasos
1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Sign In
5. Clickear cheking
6. Clickear View checking
7. Clickear boton ON en joint checking


##Resultado Esperado
Mostrar la deshabilitación del boton ON a Off


##Nombre
**Validar despliegue de Checking New Checking**

##Descripción
Validar que se despliegue View Checking y crear New Checking, accionando en New Checking

##Precondición
-Estar loguiado

##Entradas
acción click en cheking

##Pasos
1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Sign In
5. Clickear cheking
6. Clickear New checking


##Resultado Esperado
Mostrar formulario de nueva cuenta, como tambien botones de enviar y reiniciar


##Nombre
**Validar llenar formulario New Checking**

##Descripción
Validar que se selecciones checkbox correspondientes e ingresar la información de la cuenta

##Precondición
-Estar loguiado

##Entradas
acción click (Checking, new checking, checkbox standard checking, checkbox joint, enviar )
Vista
100


##Pasos
1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Sign In
5. Clickear cheking
6. Clickear New checking
7. Clickear el checkbox Standard Checking
8. Clickear el checkbox Joint
9. Escribir nombre de la cuenta
10. Escribir monto inicial
11. Clickear en Enviar


##Resultado Esperado
Mostrar algun mensaje de connfirmación y visualizar cuenta en el despliegue de checking


##Nombre
**Validar despliegue de Savings View Savings**

##Descripción
Validar que se despliegue de View Savings y crear New Savings, accionando View Savings.

##Precondición
-Estar loguiado

##Entradas
acción click en Savings

##Pasos
1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Sign In
5. Clickear Savings
6. Clickear View Savings


##Resultado Esperado
Mostrar dos recuadros uno con la información de la joint savings con un botón ON y otro con la información individual savings con un boton Off, como tambien grilla con información detallada de los movimientos de la misma



##Nombre
**Validar deshabilitar Joint Savings**

##Descripción
Validar que al clickear el boton ON cambie a off

##Precondición
-Estar loguiado

##Entradas
acción click en boton ON

##Pasos
1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Sign In
5. 5. Clickear Savings
6. Clickear View Savings
7. Clickear boton ON en joint Savings


##Resultado Esperado
Mostrar la deshabilitación del boton ON a Off


##Nombre
**Validar despliegue de Savings New Savings**

##Descripción
Validar que se despliegue de View Savings y crear New Savings, accionando New Savings.

##Precondición
-Estar loguiado

##Entradas
acción click en Savings

##Pasos
1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Sign In
5. Clickear Savings
6. Clickear New Savings


##Resultado Esperado
Mostrar formulario de nueva ahorro, como tambien botones de enviar y reiniciar



##Nombre
**Validar llenar formulario New Saving**

##Descripción
Validar que se selecciones checkbox correspondientes e ingresar la información de la cuenta

##Precondición
-Estar loguiado

##Entradas
acción click (Saving, new Saving, checkbox standard checking, checkbox Individual, enviar )
Ahorro Vivienda
20


##Pasos
1. Ingresar a la url
2. Ingresar usuario
3. Ingresar contraseña
4. Click en Sign In
5. Clickear cheking
6. Clickear New checking
7. Clickear el checkbox Money Market 
8. Clickear el checkbox Individual
9. Escribir nombre de la cuenta
10. Escribir monto inicial
11. Clickear en Enviar


##Resultado Esperado
Mostrar algun mensaje de connfirmación y visualizar cuenta en el despliegue de Savings


