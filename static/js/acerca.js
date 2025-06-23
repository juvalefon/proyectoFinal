/* =================================================================
   SCRIPT PARA INICIALIZAR EL MAPA DE LA PÁGINA "ACERCA DE"
   ================================================================== */

// Se asegura de que el código se ejecute solo cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Coordenadas del Parque Alcázares
    const latitud = 4.6624656;
    const longitud = -74.0690435;

    // Creación del mapa, centrado en las coordenadas
    var mapAcerca = L.map('map-acerca').setView([latitud, longitud], 16);

    // Añade la capa de teselas (el mapa base) de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapAcerca);

    // Añade un marcador en la ubicación del parque
    L.marker([latitud, longitud]).addTo(mapAcerca)
        .bindPopup("<b>Parque Alcázares</b><br>Ubicación del proyecto.")
        .openPopup();
});