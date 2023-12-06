let slide = 1;
showSlides(slide);

function plusSlides(num) {
  showSlides(slide += num);
}

function currentSlide(num) {
  showSlides(slide = num);
}

function showSlides(num) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0)
    return;
  let dots = document.getElementsByClassName("dot");
  if (num > slides.length) {slide = 1}    
  if (num < 1) {slide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide-1].style.display = "block";  
  dots[slide-1].className += " active";
}

let map;

async function initMap() {

    const jcp = { lat: 41.87296, lng: -87.62791 };
    const center = { lat: 41.87247, lng: -87.62731};

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: center,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: jcp,
    title: "My School",
  });

  const logos = {
    Hero: {
      icon: "media/hero.png"
    },

    Starbucks: {
      icon: "media/starbucks.png"
    },

    Chipotle: {
      icon: "media/chipotle.png"
    }
  }
  
  const places = [
    {
      position: new google.maps.LatLng(41.87466, -87.62901),
      type: "Starbucks",
    },
    {
      position: new google.maps.LatLng(41.86782, -87.62614),
      type: "Chipotle",
    },
    {
      position: new google.maps.LatLng(41.87590, -87.62906),
      type: "Hero"
    },
  ];

  for (let i = 0; i < places.length; i++) {
    const marker = new google.maps.Marker({
      position: places[i].position,
      logo: logos[places[i].type].icon,
      map: map,
    });
  }

  var points = [
    {lat: 41.87296, lng: -87.62767}, //jcp
    {lat: 41.87298, lng: -87.62774},
    {lat: 41.87463, lng: -87.62763}, //corner
    {lat: 41.87461, lng: -87.62902},
    {lat: 41.87466, lng: -87.62901}, //starbucks
    {lat: 41.87461, lng: -87.62902},
    {lat: 41.87462, lng: -87.62916}, //corner
    {lat: 41.87587, lng: -87.62917},
    {lat: 41.87590, lng: -87.62906}, //hero
    {lat: 41.87574, lng: -87.62917}, //corner
    {lat: 41.87597, lng: -87.62607}, //corner
    {lat: 41.86805, lng: -87.62589},
    {lat: 41.86782, lng: -87.62614}, //chipotle
    {lat: 41.86805, lng: -87.62589},
    {lat: 41.87186, lng: -87.62597}, //corner
    {lat: 41.87184, lng: -87.62766}, //corner
    {lat: 41.87298, lng: -87.62774}
  ];

  var path = new google.maps.Polyline({
    path: points,
    geodesic: true,
    strokeColor: "#e33057",
    strokeOpacity: 1.0,
    strokeWeight: 3,
  });

  path.setMap(map);
}

initMap();
