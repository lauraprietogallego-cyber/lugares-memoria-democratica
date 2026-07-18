const mapa = new maplibregl.Map({
    container: 'mapa-interactivo',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-3.7038, 40.4168],
    zoom: 5
});
mapa.addControl(new maplibregl.NavigationControl());