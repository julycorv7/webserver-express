const http = require('http');

http.createServer(( req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Julian',
        edad: 24,
        url: res.url
    }

    res.write( JSON.stringify( salida ));

    // res.write(salida);
    res.end();
})
.listen(3000);

console.log('Escuchando el puerto 3000');