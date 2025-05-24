// Asegúrate de que el DOM esté completamente cargado si es necesario,
// aunque para este script específico, al estar al final del body, no suele ser un problema.
document.addEventListener('DOMContentLoaded', function () {

    // Coordenadas del centro del mapa y nivel de zoom inicial
    // Estas coordenadas son aproximadamente el centro del polígono.
    var initialCoordinates = [4.6624656, -74.0690435];
    var initialZoom = 17; // Ajusta este zoom según sea necesario para ver bien el polígono

    // Inicializa el mapa y lo establece en la vista geográfica y zoom especificados
    var map = L.map('map').setView(initialCoordinates, initialZoom);

    // Añade una capa de teselas (tiles) de OpenStreetMap al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, // Zoom máximo permitido por la capa de teselas
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define las coordenadas del polígono que delimita el área de interés
    var polygonCoordinates = [
        [4.663343457881776, -74.0695487450765],
        [4.662675803513066, -74.07000434797425],
        [4.662417283974291, -74.06947882581991],
        [4.662161012337599, -74.06893751544635],
        [4.661850744304681, -74.06826588190093],
        [4.662005856164436, -74.06797041665536],
        [4.662491423504042, -74.06877336037614],
        [4.662792654925724, -74.06877561583603]
    ];

    // Crea el objeto polígono con las coordenadas definidas y lo añade al mapa
    var polygon = L.polygon(polygonCoordinates, {
        color: 'blue',      // Color del borde del polígono
        fillColor: '#3388ff', // Color de relleno del polígono
        fillOpacity: 0.2    // Opacidad del relleno
    }).addTo(map);

    // Ajusta la vista del mapa para que el polígono completo sea visible
    map.fitBounds(polygon.getBounds());

    // Mensaje original y bucle de tu programa.js
    console.log("Hola desde programa.js"); 

    for (let i = 1; i <= 50; i++) {
        if (i % 9 !== 0 && i % 13 !== 0) {
            console.log(i);
        }
    }

}); // Fin del DOMContentLoaded