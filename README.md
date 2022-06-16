# DigitalBank
Repositorio para pruebas automatizadas

## Herramientas a utilizar

* Instalar ***Node.js*** que nos permitira ejecutar código JavaScript.
* Uso de comando ***Node Package Manager (npm)*** nos permitirá instalar librerías y agregar dependencias de forma muy sencilla. npm viene incluído en la descarga de Node.js.
* Instalar ***Visual Studio Code*** permitira el entorno para la ejecución de los test.
* Instalar un cliente git (Fork o Sourcetree,etc. Preferentemente Fork. Evitar Github Desktop) esto para bajar la ultima versión de test 
* Instalar Docker 
* Clonarse [este repositorio](https://github.com/britodani/TestSuiteDigitalBank) (Aplicación y test)

## **Levantar/bajar el sistema bajo pruebas**

Una vez clonado el repositorio de TestSuiteDigitalBank, es necesario levantar los servicios necesarios para hostear la aplicación localmente.

Una de las estrategias usadas es a través del servicio orquestador de contenedores: Docker Compose.

Para levantarlo se debe entrar por consola de windows o mac al directorio raíz del proyecto(digitalbank-gen-one), y luego:

1.  `cd  deploy/docker-compose`
2.  `docker-compose -f docker-compose-postgres.yml up` *(Este levantara e instalara los paquetes necesarios para el servicio del dominio*
3. Luego de que termina de inicializar todo, se podrá acceder a la aplicación desde http://localhost:8080/bank

Para bajar los servicios:

1. `cd  deploy/docker-compose`
2. `docker-compose -f docker-compose-postgres.yml down`



## **Visual Studio Code**

Para comenzar es necesario clonar el repositorio y ejecutar

* https://github.com/britodani/TestSuiteDigitalBank.git --> para clonar

en el visual studio code se direje al apartado de terminal y selecciona nueva terminal para ejecutar los siguentes comandos para instalación de los package y ejecución de test.

* `npm install` --> este para la instalación de los package
* `npm run test` --> este para correr los test