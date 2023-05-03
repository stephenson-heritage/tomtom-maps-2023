import "./css/styles.css";

import tt from "@tomtom-international/web-sdk-maps";
import toxicStyle from "./js/toxic.js";

import templateRoot from "./hbs/root.hbs";
import templateMap from "./hbs/map.hbs";

// use root template, apply to "app" div
let appEl = document.getElementById("app");
let mainEl;
appEl.innerHTML = templateRoot({ siteInfo: { title: "Map" } });

window.onload = () => {
  mainEl = document.getElementById("main");
  mainEl.innerHTML = templateMap();
  initMap();
};

let map;
// 45.455313 -75.737609

var markerHeight = 50, markerRadius = 10, linearOffset = 25;
var popupOffsets = {
  'top': [0, 0],
  'top-left': [0, 0],
  'top-right': [0, 0],
  'bottom': [0, -markerHeight],
  'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
  'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
  'left': [markerRadius, (markerHeight - markerRadius) * -1],
  'right': [-markerRadius, (markerHeight - markerRadius) * -1]
};


let initMap = () => {
  map = tt.map({
    key: "NNnVPoPM9wVe2TNRA93zMuE6cKBdP2M0",
    container: "map",
    style: toxicStyle,
    center: [-75.737609, 45.455313],
    zoom: 12,
  });

  var marker = new tt.Marker().setLngLat([-75.737609, 45.455313]).addTo(map);



  marker.on('click', function (e) { console.log(e); });

  var popup = new tt.Popup({ offset: popupOffsets, className: 'popup' }).setLngLat(marker.getLngLat())
    .setHTML("<h1>Hello I'm a Popup!</h1>")
    .addTo(map);


  marker.setPopup(popup);

  marker.getElement().addEventListener('click', function () {
    console.log('marker clicked');
  });


};