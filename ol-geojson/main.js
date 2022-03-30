import 'ol/ol.css';

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
        center: [20, 0],
        zoom: 3
    })
});

var SRC_bigJSON = new ol.source.Vector({
    // https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/county.geo.json
    url: 'https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/state.geo.json',  // big JSON file
    format: new ol.format.GeoJSON()
});
var bigJSON  = new ol.layer.Vector ({
    source: SRC_bigJSON
});

var nb=1;
for (var i=0; i<nb; i++) {
    console.info("add n°" + i);
    myMap.addLayer(bigJSON);
}

bigJSON.on('change', function(e) {
    console.info("Number of features loaded = " + bigJSON.getSource().getFeatures().length * myMap.getLayers().getLength());

    timerStop = Date.now();
    timerDelta = timerStop - timerStart;

    console.info("Start at " + timerStart);
    console.info("Stopped at " + timerStop );
    console.info("Loading time = " + timerDelta );
});