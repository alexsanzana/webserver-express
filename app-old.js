// declarar http para poder montar un web server. viene el node.
const http = require('http');

// debemos crear el servidor el cual recive un callback request, response
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Alex',
            edad: 40,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando en el puerto: 8080');