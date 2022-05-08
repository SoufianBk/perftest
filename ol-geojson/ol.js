import 'ol/ol.css';

// https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/county.geo.json 200 MB line
// https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/state.geo.json 20  MB line
// https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson 2 MB point
var file = 'https://raw.githubusercontent.com/SoufianBk/perftest/master/data/_cities.geojson';

ol.proj.useGeographic();

var timerStart = Date.now();
var timerStop;
var timerDelta;


// MAP
var myMap = new ol.Map({
    layers: [
        new ol.layer.Tile ({
            source: new ol.source.OSM(),
        }),
    ],
    target: 'map',
    view:   new ol.View({
        center: [4, 51],
        zoom: 5
    })
});

var SRC_bigJSON = new ol.source.Vector({
    url: file,  // big JSON file
    format: new ol.format.GeoJSON()
});
var bigJSON  = new ol.layer.Vector ({
    source: SRC_bigJSON
});


myMap.addLayer(bigJSON);

bigJSON.on('change', function(e) {
    timerStop = Date.now();
    timerDelta = timerStop - timerStart;

    console.info("Start at " + timerStart);
    console.info("Stopped at " + timerStop );
    console.info("Loading time = " + timerDelta );
});