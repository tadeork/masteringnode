const http = require('http');
const port = 3030;

// objeto que maneja los request y response
const requestHandler = (request, response) => {
    // muestra la petición que hace el navegador
    console.log(request.url);
    response.end('Hello server visitor!');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if(err){
        return console.log('algo malio sal ', err);
    }
    
    console.log('el servidor está esperando peticiones en el puerto %d', port);
});