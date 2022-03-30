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
var mymap = L.map('map').setView([20, 0], 2).addLayer(osm);

// BIG JSON
var bigJSON = new L.geoJson();
bigJSON.addTo(mymap);

$.getJSON({
    dataType: "json",
    url: "https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/county.geo.json", // big JSON file

    success: function (data) {
        L.geoJson(data).addTo(mymap);
        var nb = 1;
        for (var i = 0; i < nb; i++) {
            $(data.features).each(function (key, data) {
                bigJSON.addData(data);
            });
        }

        timerStop = Date.now();
        timerDelta = timerStop - timerStart;

        console.info("Start at " + timerStart);
        console.info("Stopped at " + timerStop);
        console.info("Loading time = " + timerDelta);
    },
    error: function (e) {
        console.log(e);
    }
});