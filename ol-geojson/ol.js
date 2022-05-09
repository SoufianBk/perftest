import 'ol/ol.css';

var file = 'https://raw.githubusercontent.com/SoufianBk/perftest/master/data/fr_cities.geojson';

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
        center: [5, 47],
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