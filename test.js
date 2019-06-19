/*var map = L.map('map', {
  minZoom: 1,
  maxZoom: 4,
  center: [0, 0],
  zoom:1,
  crs: L.CRS.Simple,
  attributionControl: false
});

L.control.attribution({
  prefix: false
}).addAttribution('HT @ HCMUT Lab').addTo(map);

// House: https://i.imgur.com/cenqiCf.jpg
// Palace SVG (1280 x 806): https://dl.dropbox.com/s/yhrpnftsuis15z6/Topkapi_Palace_plan.svg
// dimensions of the image
var w = 1900 * 2,
    h = 890 * 2,
    url = '../assets/img/LabCaoThang-Layout.svg';

// calculate the edges of the image, in coordinate space
var southWest = map.unproject([0, h], map.getMaxZoom()-1);
var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
var bounds = new L.LatLngBounds(southWest, northEast);

// add the image overlay, 
// so that it covers the entire map
L.imageOverlay(url, bounds).addTo(map);

// tell leaflet that the map is exactly as big as the image
map.setMaxBounds(bounds);

var min=1;
var max1=9.05, max2=4.2; 
var random1 = Math.random() * (+max1 - +min) + +min;
var random2 = Math.random() * (+max2 - +min) + +min;
// pixel coords

x = (random1/9.05) * 4720 + 1440 ;
y = -(random2/4.2) * 2190 + 2850;

//Add marker
//var newMarkerGroup = new L.LayerGroup();
var addedOne = false,
    customPin = L.divIcon({
    className: 'location-pin',
    html: '<img src="https://static.robinpowered.com/roadshow/robin-avatar.png"><div class="pin"></div><div class="pulse"></div>',
    iconSize: [30, 30],
    iconAnchor: [18, 30]
  });
function addMarker(e){
// Add marker to map at click location; add popup window
  if (addedOne) {
    return;
  }
}
// Lookup neighbors https://github.com/mapbox/leaflet-knn
var marker = L.marker(map.unproject([x, y], map.getMaxZoom()), {
    icon: customPin
  }).addTo(map);
// Add pop up for click
marker.bindPopup("<b>Tag</b><br> x : " + x + " , " + "y : " + y);

*/
var mqtt = require('mqtt');

 var options = {
   port:  15177,
   clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
   username: "nthgoqsz",
   password: "Kq-e1D2C7L1y",
 };
  
 var client  = mqtt.connect('mqtt://postman.cloudmqtt.com', options)
  
    client.on('connect', function() { // When connected
  
   // subscribe to a topic
   client.subscribe('ips', function() {
     // when a message arrives, do something with it
     client.on('message', function(topic, message, packet) {
         var msg = JSON.parse(message);
         console.log(msg.x + "," + msg.y);
        });
    });
  });