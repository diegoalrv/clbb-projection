// Crear un nuevo cliente MQTT
var puertoWebSocket = 9001
var urlBroker = "localhost"
// Conectar al broker MQTT
const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);
const host = 'ws://'+urlBroker+":"+puertoWebSocket;

const client = mqtt.connect(host, {
    clientId: clientId,
    clean: true,
    connectTimeout: 4000,
    reconnectPeriod: 1000,
});

client.on('connect', function () {
    console.log('Cliente conectado al broker MQTT');
    client.subscribe('proyectores', function (err) {
        if (!err) {
            console.log('Suscripción exitosa al canal "proyectores"');
        } else {
            console.error('Error al suscribirse:', err);
        }
    });
});

client.on('message', function (topic, message) {
    // message es un Buffer
    console.log(message.toString());
    document.getElementById('displayedImage').src = message.toString();
});

client.on('error', function (err) {
    console.error('Error de conexión:', err);
    client.end();
});
