
// https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/county.geo.json 200 MB line
// https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/state.geo.json 20  MB line
// https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson 2 MB point

var timerStart = Date.now();
var timerStop;
var timerDelta;


const layer = new deck.GeoJsonLayer({
    id: 'geojson-layer',
    data: 'https://raw.githubusercontent.com/SoufianBk/perftest/master/data/_hamlets.json',
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
