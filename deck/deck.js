
// https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/county.geo.json 200 MB line
// https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/state.geo.json 20  MB line
// https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson 2 MB point


const layer = new deck.GeoJsonLayer({
    id: 'geojson-layer',
    data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson',
    filled : false,
    stroked: true,
    getLineColor: [255,0,0],
    getLineWidth: 1,
    lineWidthUnits: 'pixels',
    getPointRadius: 5,
    pointRadiusUnits: 'pixels'
});

new deck.DeckGL({
    container: 'map',
    mapStyle: deck.carto.BASEMAP.VOYAGER,

    initialViewState: {
        latitude: 0,
        longitude: 0,
        zoom: 1,
    },
    controller: true,

    layers: [layer]
});