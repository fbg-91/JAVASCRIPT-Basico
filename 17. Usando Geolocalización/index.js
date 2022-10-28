let map;

function initMap() {
    const posicionCasa = {
        lat: 27.8549671, 
        lng: -15.4378091
    }
    const posicionHogar = {
        lat: 40.40459418905764, 
        lng: -3.5987745840581833
    }
    const posicionPrimerViaje = {
        lat: 42.350622786544584, 
        lng: -3.6887283659630654
    }
    const map = new google.maps.Map(document.getElementById("map"), {
        center: posicionHogar,
        zoom: 4,
    });
    const markerCasa = new google.maps.Marker({
        position: posicionCasa,
        map,
        title: "Mi casa"
    })
    const markerHogar = new google.maps.Marker({
        position: posicionHogar,
        map,
        title: "Mi hogar"
    })
    const markerPrimerViaje = new google.maps.Marker({
        position: posicionPrimerViaje,
        map,
        title: "Mi primer viaje"
    })
}

window.initMap = initMap;