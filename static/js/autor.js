/* =================================================================
   SCRIPT PARA INICIALIZAR EL MAPA DE LA PÁGINA "AUTOR"
   ================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    // --- DATOS DE EJEMPLO - REEMPLAZAR CON LOS DE TU UNIVERSIDAD ---
    const latitud = 4.628003357535741; // Reemplaza con la latitud de tu universidad
    const longitud = -74.06590726122234; // Reemplaza con la longitud de tu universidad
    const nombreUniversidad = "U Distrital - Facultad de Ingeniería"; // Reemplaza con el nombre
    // ----------------------------------------------------------------

    // Creación del mapa, centrado en las coordenadas
    var mapAutor = L.map('map-autor').setView([latitud, longitud], 17);

    // Añade la capa de teselas (el mapa base)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapAutor);

    // Añade un marcador en la ubicación
    L.marker([latitud, longitud]).addTo(mapAutor)
        .bindPopup(`<b>${nombreUniversidad}</b>`)
        .openPopup();
});