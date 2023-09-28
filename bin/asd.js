import express from 'express';
import debugModule from 'debug';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);  // Ahora server se crea después de inicializar app
const io = new Server(server);

// Eventos del servidor
io.on('connection', (socket) => {
    // Cuando un usuario se conecta
    socket.on('join', (username) => {
        // Anunciar que el usuario se ha conectado
        io.emit('user-joined', username);
    });

    // Cuando un usuario envía un mensaje
    socket.on('message', (message) => {
        // Enviar el mensaje a todos los usuarios conectados
        io.emit('message', message);
    });
});

const debug = debugModule("minga_rojo_back:server");
let port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

server.listen(port, () => console.log("server listen " + port));
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}