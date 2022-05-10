import 'ol/ol.css';

var cities = "_cities.json"
var towns = "_towns.json"
var villages = "_villages.json"
var hamlets = "_hamlets.json"

var file = 'https://raw.githubusercontent.com/SoufianBk/perftest/master/data/' + towns ;

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

myMap.on('rendercomplete', function(e) {
    timerStop = Date.now();
    timerDelta = timerStop - timerStart;

    console.info("Start at " + timerStart);
    console.info("Stopped at " + timerStop );
    console.info("Loading time = " + timerDelta );
});