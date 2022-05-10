var cities = "_cities.json"
var towns = "_towns.json"
var villages = "_villages.json"
var hamlets = "_hamlets.json"

var file = 'https://raw.githubusercontent.com/SoufianBk/perftest/master/data/' + towns ;

var timerStart = Date.now();
var timerStop;
var timerDelta;

// We’ll add a tile layer to add to our map, in this case it’s a OSM tile layer.
// Creating a tile layer usually involves setting the URL template for the tile images
var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {
        maxZoom: 18,
        attribution: osmAttrib
    });

// Map
var mymap = L.map('map')

mymap.setView([47, 5], 5).addLayer(osm);

// BIG JSON
var bigJSON = new L.geoJson();
bigJSON.addTo(mymap);

$.getJSON({
    dataType: "json",
    url: file, // big JSON file

    success: function (data) {
        L.geoJson(data).addTo(mymap);
        var nb = 1;
        for (var i = 0; i < nb; i++) {
            $(data.features).each(function (key, data) {
                bigJSON.addData(data);
            });
        }
    },
    error: function (e) {
        console.log(e);
    }
});

$( window ).on( "load",function () {
    timerStop = Date.now();
    timerDelta = timerStop - timerStart;

    console.info("Start at " + timerStart);
    console.info("Stopped at " + timerStop);
    console.info("Loading time = " + timerDelta);
});
