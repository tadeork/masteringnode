'use strict';

// librerías
const http = require('http');
const url = require('url');
const zlib = require('zlib');

// acceso al sistema de archivos
const path = require('path');
const fs = require('fs');

// archivos
const defaultFile = 'index.html';
const logFile = 'web.log';

const port = 3000;

// función path para crear los nombres de archivos solicitados
let dirName = path.dirname(req.path);
if(dirName.endsWith('/')){
    dirName = dirName.slice(0, dirName.length -1);
}

const reqFileName = path.format({
    // une en un único segmento la dirección del archivo
    dir: path.join(__dirname, 'http-server', dirName),
    base: path.basename(req.path)
});

console.log(reqFileName);


// servidor web http
const server = http.createServer((req, res) => {
    req.originalUrl = req.url;
    req.url = url.parse(req.url, true);
    req.path = req.url.pathname === '/' ? defaultFile : req.url.pathname;
    
    
    const processBody = new Promise(resolve => {
        resolve();
    });
});