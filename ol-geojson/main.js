import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {useGeographic} from 'ol/proj';
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

useGeographic();

var timerStart = Date.now();
var timerStop;
var timerDelta;


// MAP
var myMap   =   new Map({
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
    ],
    target: 'map',
    view:   new View({
        center: [20, 0],
        zoom: 3
    })
});

var SRC_bigJSON = new VectorSource({
    url: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson',  // big JSON file
    format: new GeoJSON()
});
var bigJSON  = new VectorLayer({
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