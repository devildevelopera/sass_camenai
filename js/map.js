initMap = () => {
    const map = new google.maps.Map(document.getElementsByClassName("map-sec")[0], {
        zoom: 4,
        center: { lat: 52, lng: 4 },
        disableDefaultUI: true,
    });
};