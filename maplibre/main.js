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
    center: [1, 15],
    zoom: 3
});

// Add the navigation control
map.addControl(new maplibregl.NavigationControl());

map.on('load', function () {
    map.loadImage(
        'https://cdn1.iconfinder.com/data/icons/unicons-line-vol-4/24/location-point-512.png',
        function (error, image) {
            if (error) throw error;
            map.addImage('AirPort_icon', image);


            map.addSource('AirPorts_points', {
                type: 'geojson',
                // https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/county.geo.json
                data: 'https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/county.geo.json'
            });

            map.addLayer({
                'id': 'AirPorts',
                'type': 'line',
                'source': 'AirPorts_points',
                // 'layout': {
                //     'icon-image': 'AirPort_icon',
                //     'icon-size': 0.05
                // }
                'layout': {},
                'paint': {
                    'line-color': '#000',
                    'line-width': 3
                }
            });
        }
    );

    timerStop = Date.now();
    timerDelta = timerStop - timerStart;

    console.info("Start at " + timerStart);
    console.info("Stopped at " + timerStop );
    console.info("Loading time = " + timerDelta );
});