// Inicializando o mapa
var map = L.map('map').setView([-8.839988, 13.289434], 13); // Defina a latitude e longitude do centro do mapa

// Adicionando o "tile layer" (camada de mapa) usando OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marcadores com diferentes províncias e imagens associadas
var markers = [
  // Luanda (Capital)
  { lat: -8.839988, lng: 13.289434, title: "Vila Alice - Casa T3 (Luanda)", img: "assets/vila_alice.jpg" },
  { lat: -8.852342, lng: 13.288301, title: "Ingombota - Casa T3 de Luxo (Luanda)", img: "assets/ingombota.jpg" },

  // Benguela
  { lat: -12.589432, lng: 13.448530, title: "Casa Mar Azul - Benguela", img: "assets/mar_azul.jpg" },
  { lat: -12.614286, lng: 13.396451, title: "Vila Nova - Benguela", img: "assets/vila_nova.jpg" },

  // Huíla
  { lat: -14.915472, lng: 13.495670, title: "Residencial Sereno - Huíla", img: "assets/residencial_sereno.jpg" },
  { lat: -14.926381, lng: 13.495981, title: "Casa do Sol - Huíla", img: "assets/casa_do_sol_huila.jpg" },

  // Luanda Sul
  { lat: -9.251248, lng: 13.423211, title: "Vila Laranja - Luanda Sul", img: "assets/vila_laranja.jpg" },
  { lat: -9.243253, lng: 13.417410, title: "Residencial Central - Luanda Sul", img: "assets/residencial_central.jpg" },

  // Cabinda
  { lat: -5.571384, lng: 12.196019, title: "Vila do Mar - Cabinda", img: "assets/vila_mar.jpg" },
  { lat: -5.532402, lng: 12.183846, title: "Casa das Palmeiras - Cabinda", img: "assets/casa_palmeiras.jpg" },

  // Kwanza Sul
  { lat: -10.338506, lng: 14.917039, title: "Moradia Bela Vista - Kwanza Sul", img: "assets/moradia_bela_vista.jpg" },
  { lat: -10.341899, lng: 14.915019, title: "Vila Kwanza - Kwanza Sul", img: "assets/vila_kwanza.jpg" },

  // Uíge
  { lat: -7.623228, lng: 15.045113, title: "Vila Verde - Uíge", img: "assets/vila_verde_uige.jpg" },
  { lat: -7.612314, lng: 15.041218, title: "Casa do Bosque - Uíge", img: "assets/casa_bosque.jpg" },

  // Malanje
  { lat: -9.227822, lng: 16.343779, title: "Residencial Malanje", img: "assets/residencial_malanje.jpg" },
  { lat: -9.236512, lng: 16.352084, title: "Casa Bela Vista - Malanje", img: "assets/casa_bela_vista_malanje.jpg" },

  // Moxico
  { lat: -11.226687, lng: 20.289685, title: "Vila Moxico", img: "assets/vila_moxico.jpg" },
  { lat: -11.232014, lng: 20.291827, title: "Casa das Árvores - Moxico", img: "assets/casa_arvores.jpg" },

  // Zaire
  { lat: -6.258155, lng: 12.374075, title: "Moradia Zaire", img: "assets/moradia_zaire.jpg" },
  { lat: -6.259741, lng: 12.375518, title: "Vila Zaire - Zaire", img: "assets/vila_zaire.jpg" },

  // Lunda Norte
  { lat: -7.446813, lng: 20.390062, title: "Casa Norte Lunda", img: "assets/casa_norte_lunda.jpg" },
  { lat: -7.445662, lng: 20.392210, title: "Residencial Lunda", img: "assets/residencial_lunda.jpg" },

  // Lunda Sul
  { lat: -9.289362, lng: 20.541438, title: "Vila da Serra - Lunda Sul", img: "assets/vila_serra_lunda_sul.jpg" },
  { lat: -9.296273, lng: 20.544585, title: "Casa Dourada - Lunda Sul", img: "assets/casa_dourada_lunda_sul.jpg" },

  // Cuando Cubango
  { lat: -16.610576, lng: 18.121875, title: "Casa do Rio - Cuando Cubango", img: "assets/casa_rio.jpg" },
  { lat: -16.612408, lng: 18.125141, title: "Residencial Cubango", img: "assets/residencial_cubango.jpg" }
];

// Adicionando marcadores ao mapa
markers.forEach(function(markerData) {
  var popupContent = "<b>" + markerData.title + "</b><br>" +
    "<img src='" + markerData.img + "' alt='" + markerData.title + "' style='width: 200px; height: auto;' />";

  L.marker([markerData.lat, markerData.lng])
    .addTo(map)
    .bindPopup(popupContent);
});