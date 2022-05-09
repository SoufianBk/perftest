var file = 'https://raw.githubusercontent.com/SoufianBk/perftest/master/data/be_cities_converted.geojson';

var timerStart = Date.now();
var timerStop;
var timerDelta;

// Define the map syle (OpenStreetMap raster tiles)
const style = {
    "version": 8,
    "sources": {
        "osm": {
            "type": "raster",
            "tiles": ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256,
            "attribution": "&copy; OpenStreetMap Contributors",
            "maxzoom": 19
        }
    },
    "layers": [
        {
            "id": "osm",
            "type": "raster",
            "source": "osm" // This must match the source key above
        }
    ]
};

// Initialise the map
const map = new maplibregl.Map({
    container: 'map',
    style: style,
    center: [5, 47],
    zoom: 5
});

// Add the navigation control
map.addControl(new maplibregl.NavigationControl());

map.on('load', function () {
    map.loadImage(
        'https://cdn1.iconfinder.com/data/icons/unicons-line-vol-4/24/location-point-512.png',
        function () {
            map.addSource('points', {
                type: 'geojson',
                data: file
            });

            map.addLayer({
                'id': 'Points',
                'type': 'circle',
                'source': 'points',
                'layout': {},
                'paint': {
                    'circle-radius': 8,
                    'circle-opacity': 0.8,
                    "circle-color": "white",
                    'circle-stroke-width': 1,
                    'circle-stroke-color': 'black'
                }
            });
        }
    );
});

timerStop = Date.now();
timerDelta = timerStop - timerStart;

console.info("Start at " + timerStart);
console.info("Stopped at " + timerStop );
console.info("Loading time = " + timerDelta );