# challenge-bdb

Este proyecto consta de 3 directorios
1. Database
2. Server
3. argon-dashboard-angular-master(interfaz de usuario)

# Primeros pasos

Verifica que tienes node.js instalado en tu equipo\
En una consola de comandos ejecita `node --version`\
Sino aparece la version de node, dirigete a "https://nodejs.org/es/download/"

## Scripts validos

## 1. BACK
En el directorio del proyecto ejecuta en la terminal el siguiente comando\ "cd server"
Esto se hace con el fin de movernos a la carpeta server y luego ejecuta
### `npm install`
Esto se hace con el fin de instalar las librerias que necesita el proyecto para iniciar

### `npm run dev`
Inicia la aplicacion en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en un navegador,al ser un app en express saldra error.
Pero puedes validar en postman haciendo el siguiente ejemplo "http://localhost:3000/api/users"
Tambien puedes ver los errores en la cosola.

## 2. GUI
Abre otra ventana de comandos en el directorio del proyecto ejecuta en la terminal el siguiente comando\ "cd argon-dashboard-angular-master"
Esto se hace con el fin de movernos a la carpeta argon-dashboard-angular-master y luego ejecuta
### `npm install`
Esto se hace con el fin de instalar las librerias que necesita el proyecto para iniciar

### `npm start`

Inicia la aplicacion en modo desarrollo.\
Abre [http://localhost:4200](http://localhost:4200) para verla en un navegador.
La pagina se recarga si haces algun cambio en el codigo.\
Tambien puedes ver los errores en la cosola.
