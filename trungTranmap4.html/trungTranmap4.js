/* global L JQuery*/
var trungTranmap4 = L.map('trungTranmap4').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(trungTranmap4)
var statesUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(statesUrl, function (data) {
  var stateStyle = function (feature) {
    var pop = feature.properties.POP2010
    var stateColor = 'olive'
    if (pop < 6162876) { stateColor = 'blue' }
    return {
      color: stateColor,
      weight: 1,
      fillOpacity: 0.2,
      opacity: 1
    }
  }
  var stateLayerOptions = {
  style: stateStyle,
  onEachFeature: createPopup
  }
  L.geoJSON(data, stateLayerOptions).addTo(trungTranmap4)
})
var createPopup = function (feature, layer) {
  var name = feature.properties.STATE_NAME
   var pop = feature.properties.POP2010
   layer.bindPopup('Population 2010 of ' + name + ': ' + pop + '<br>National average: 6162876')
 }
