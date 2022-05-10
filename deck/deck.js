var cities = "_cities.json"
var towns = "_towns.json"
var villages = "_villages.json"
var hamlets = "_hamlets.json"

var file = 'https://raw.githubusercontent.com/SoufianBk/perftest/master/data/' + cities;

var timerStart = Date.now();
var timerStop;
var timerDelta;


const layer = new deck.GeoJsonLayer({
    id: 'geojson-layer',
    data: file,
    filled : false,
    stroked: true,
    getLineColor: [255,0,0],
    getLineWidth: 1,
    lineWidthUnits: 'pixels',
    getPointRadius: 5,
    pointRadiusUnits: 'pixels'
});

var map = new deck.DeckGL({
    container: 'map',
    mapStyle: deck.carto.BASEMAP.VOYAGER,

    initialViewState: {
        latitude: 47,
        longitude: 5,
        zoom: 5,
    },
    controller: true,

    layers: [layer],

    onAfterRender: () => {
        timerStop = Date.now();
        timerDelta = timerStop - timerStart;

        console.info("Start at " + timerStart);
        console.info("Stopped at " + timerStop );

        console.info("Loading time = " + timerDelta );
    }
});
