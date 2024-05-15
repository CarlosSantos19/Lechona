var map;
var geocoder;

document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var address = document.getElementById('address').value;
    var items = document.getElementById('items').value;

    // Simulación de envío de pedido y seguimiento
    simulateOrder(address, items);
});

function initMap() {
    console.log('La función initMap() se ha llamado correctamente.');
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
    geocoder = new google.maps.Geocoder();
    console.log("initMap() se ha ejecutado correctamente.");
}

function simulateOrder(address, items) {
    // Simulación de envío de pedido (puede ser una solicitud AJAX a un servidor)
    console.log('Pedido realizado con éxito:');
    console.log('Dirección de entrega:', address);
    console.log('Artículos solicitados:', items);

    // Geocodificar la dirección para obtener las coordenadas
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            var location = results[0].geometry.location;
            // Mover el mapa al lugar de entrega
            map.setCenter(location);
            map.setZoom(14);
            // Mostrar marcador en el mapa
            var marker = new google.maps.Marker({
                map: map,
                position: location,
                title: 'Dirección de entrega'
            });
            // Mostrar información de seguimiento
            var trackingInfo = document.getElementById('tracking-info');
            trackingInfo.style.display = 'block';
            document.getElementById('status').textContent = 'Estado: En camino';
        } else {
            alert('No se pudo encontrar la dirección: ' + status);
        }
    });
}

// Llama a initMap una vez que el DOM se ha cargado completamente
document.addEventListener('DOMContentLoaded', function() {
    initMap();
});

