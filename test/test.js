import { io } from 'socket.io-client'
import { expect } from 'chai';

const socketURL = 'http://localhost:8080'

describe("socket", () => {
    let socket;

    beforeEach((done) => {
        // Conéctate al servidor antes de cada prueba
        socket = io.connect(socketURL, {
            'reconnection delay': 0,
            'reopen delay': 0,
            'force new connection': true,
        });

        socket.on('connect', () => {
            done();
        });
    });

    afterEach((done) => {
        // Desconéctate después de cada prueba
        if (socket.connected) {
            socket.disconnect();
        }
        done();
    });

    it('debería enviar y recibir un mensaje', (done) => {
        const message = 'Hola, soy un mensaje de prueba';

        socket.emit('mensaje del cliente', message);

        socket.on('mensaje del servidor', (response) => {
            expect(response).to.equal('Respuesta del servidor: ' + message);
            console.log(response, message);
            done();
        });
    });
});