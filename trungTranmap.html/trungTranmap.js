 var trungTranmap = L.map('trungTranmap').setView([32.18, -99.14], 4)
 L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(trungTranmap)
 var nolaMarker = L.marker([30, -90]).addTo(trungTranmap)
 var triangle = L.polygon([
   [31, -88],
   [35, -88],
   [32, -82]
 ]).addTo(trungTranmap)
 var polyline = L.polyline([
   [30, -87],
   [31, -86],
   [32, -85],
   [33, -84],
   [34, -83]
 ]).addTo(trungTranmap)
 triangle.bindPopup('TrungTran Triangle.')
 nolaMarker.bindPopup('TrungTran New Orleans.')
 polyline.bindPopup('TrungTran Line.')
