// create the map
var map = L.map('map', {
    center: [40.75, -74.2],
    zoom: 13
});

// create the image
var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
    imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];

L.imageOverlay(imageUrl, imageBounds).addTo(map);