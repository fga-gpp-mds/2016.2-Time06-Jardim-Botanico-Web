$(window).load(function() {
loadScript();
});

var map;

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(-15.872652, -47.836588),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.NORMAL,
        panControl: true,
        scaleControl: false,
        streetViewControl: true,
        overviewMapControl: true
    };

    // initializing map
    map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

    //add jbb space markers at map
    addJapaneseGardenMarker();
    addTeaHouseMarker();
    addVisitantCenterMaker();
    addOrchidGardenMaker();
    addSunWatchMarker();
    addAmphitheaterMarker();
}

function loadScript() {
console.log("map loading ...");
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWLcEV1-tSCf5oUTnjsny_ubD4oZmTmOc' +
'&libraries=drawing'+
'&callback=initialize';
// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCWLcEV1-tSCf5oUTnjsny_ubD4oZmTmOc&callback=initMap
document.body.appendChild(script);
}