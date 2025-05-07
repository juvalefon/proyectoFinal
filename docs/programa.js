var map = L.map('map').setView([4.6625631,-74.0738517], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var polygon = L.polygon([

    [4.663349, -74.069549],
    [4.662708, -74.069989],
    [4.662419, -74.069453],
    [4.662087, -74.068831],
    [4.661788, -74.068251],
    [4.662900, -74.068907],
    [4.662471, -74.068788],
    [4.662171, -74.068724],
    [4.661999, -74.068293],
    [4.661913, -74.068143],

]).addTo(map);

console.log("Hola desde JS");

for (let i = 1; i <= 50; i++) {
    if (i % 9 !== 0 && i % 13 !== 0) {
        console.log(i);
    }
}