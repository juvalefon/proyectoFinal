/* =================================================================
   SCRIPT PARA EL MAPA INTERACTIVO DE LA PÁGINA "AÑADIR PREDIO"
   ================================================================== */

document.addEventListener('DOMContentLoaded', function () {
    // Coordenadas iniciales del Parque Alcázares
    const latitudInicial = 4.6624656;
    const longitudInicial = -74.0690435;

    // Elemento para mostrar el estado
    const statusText = document.getElementById('coords-status');

    // Inicializa el mapa
    var map = L.map('map-add-point').setView([latitudInicial, longitudInicial], 16);

    // Añade la capa de teselas de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker; // Variable para guardar el marcador

    // Función que se ejecuta cuando el usuario hace clic en el mapa
    map.on('click', function(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;

        // Actualiza los campos ocultos del formulario con las coordenadas
        document.getElementById('latitud').value = lat;
        document.getElementById('longitud').value = lng;

        // Si ya existe un marcador, lo mueve. Si no, lo crea.
        if (marker) {
            marker.setLatLng([lat, lng]);
        } else {
            marker = L.marker([lat, lng]).addTo(map);
        }

        // Actualiza el texto de estado debajo del mapa
        statusText.textContent = `Punto seleccionado: Lat: ${lat.toFixed(4)}, Lon: ${lng.toFixed(4)}`;
        statusText.style.color = '#198754'; // Color verde para indicar éxito
    });
});