function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: 52, lng: 4 },
        disableDefaultUI: true,
    });
}