var map = L.map('map').setView([4.6624656,-74.0690435], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var polygon = L.polygon([

    [4.663343457881776, -74.0695487450765],
    [4.662675803513066, -74.07000434797425],
    [4.662417283974291, -74.06947882581991],
    [4.662161012337599, -74.06893751544635],
    [4.661850744304681, -74.06826588190093],
    [4.662005856164436, -74.06797041665536],
    [4.662491423504042, -74.06877336037614],
    [4.662792654925724, -74.06877561583603],

]).addTo(map);

console.log("Hola desde JS");

for (let i = 1; i <= 50; i++) {
    if (i % 9 !== 0 && i % 13 !== 0) {
        console.log(i);
    }
}