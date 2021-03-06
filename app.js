const manyLatLong = [
  { lat: -20.545476818846954, lng: -47.40601247311941 },
  { lat: -20.529843158099354, lng: -47.40644114428367 }
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: manyLatLong[0],
  });
  for (let i in manyLatLong) {
    new google.maps.Marker({
      position: manyLatLong[i],
      map,
      title: "Maps Widget!",
    });
  }
}