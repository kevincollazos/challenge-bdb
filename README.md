# challenge-bdb

Este proyecto consta de 3 directorios
1. Server
2. argon-dashboard-angular-master(interfaz de usuario)
3. Database 

# Primeros pasos

1. Verifica que tienes node.js instalado en tu equipo\
En una consola de comandos ejecuta `node --version`\
Sino aparece la version de node, dirigete a "https://nodejs.org/es/download/"

2. Verifica tener instalado xampp o wampp para activar un motor de base de datos en tu equipo
sino tienes ninguno ingresa a "https://www.apachefriends.org/es/download.html"
al terminar la instalacion y ejecutar el programa debes activar la opcion de `apache` y `mysql`

## Scripts validos

## 1. BACK
En el directorio del proyecto ejecuta en la terminal el siguiente comando\ "cd server"
Esto se hace con el fin de movernos a la carpeta server y luego ejecuta
### `npm install`
Esto se hace con el fin de instalar las librerias que necesita el proyecto para iniciar

Para iniciar la aplicacion en modo desarrollo en la consola escribe y dale enter.\
### `npm run dev`
Abre [http://localhost:3000](http://localhost:3000) para verla en un navegador,al ser un app en express saldra error.
Pero puedes validar en postman haciendo el siguiente ejemplo `http://localhost:3000/api/users`
Tambien puedes ver los errores en la cosola.


## 2. GUI
Abre otra ventana de comandos en el directorio del proyecto ejecuta en la terminal el siguiente comando\ "cd argon-dashboard-angular-master"
Esto se hace con el fin de movernos a la carpeta argon-dashboard-angular-master y luego ejecuta
### `npm install`
Esto se hace con el fin de instalar las librerias que necesita el proyecto para iniciar

Inicia la aplicacion en modo desarrollo, en la consola escribe y dale enter.\
### `npm start`

Abre [http://localhost:4200](http://localhost:4200) para verla en un navegador.
La pagina se recarga si haces algun cambio en el codigo.\
Tambien puedes ver los errores en la cosola.

## 3. DATABASE
Adicionalmente en el proyecto se encuentra una carpeta llamada database la cual tiene un archivo .sql para poder importarlo en phpmyadmin,
Para acceder a la interfaz del motor de base de datos en xampp en la opcion de mysql presiona el boton de `admin`
Se abrira una nueva ventana en el navegador y puedes importar el archivo .sql o crear la base de datos desde la gui de mysql
