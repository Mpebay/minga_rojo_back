import executeQueries from "../dialogflow/dialogflow.js";

const projectId = "mingabot-wauv";
const languageCode = 'es';

export default (io) => {
    io.on('connection', (socket) => {
        console.log('Nuevo cliente conectado');

        // Cada cliente tiene su propia sesión
        const sessionId = socket.id;

        socket.on("chatBot", async (data) => {
            const response = await executeQueries.executeQueries(projectId, sessionId, [data], languageCode);

            // Envía la respuesta solo al cliente que envió el mensaje
            socket.emit("chatBot", response);
        });

        socket.on('mensaje del cliente', (mensaje) => {
            console.log('Mensaje recibido:', mensaje);

            // Envía la respuesta solo al cliente que envió el mensaje
            socket.emit('mensaje del servidor', 'Respuesta del servidor: ' + mensaje);
        });
    });
};