## My Electron-React-App (Boilerplate)
###### Last update: 23.03.2023

## Setups
Node version: 16.13.0

## Run
- run electron: npm run-electron-react
- run react: npm run start

## Build
- npm build electron-react

## Create a complete new Electron React.

install node 16.13.0

###Open console and type:
npx create-react-app <APPNAME>

switch inside your react app:
cd <APPNAME>

add electron via:
npm add electron

add concurrently:
npm add concurrently

add wait on:
npm add wait-on

###package.json:

add this below the first } 
"main": "main.js",

and add this inside the scripts:
"electron-react": "concurrently \"BROWSER=none npm start\" \"wait-on http://localhost:3000 && electron .\""

###Create main.js in the root folder and copy text from:
https://github.com/electron/electron-quick-start/blob/master/main.js

change mainWindow.loadFile to the follow:

mainWindow.loadURL('http://localhost:3000')

use npm run electron-react to start.
u can also change the run command.



