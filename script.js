const mapa = new maplibregl.Map({
    container: 'mapa-interactivo',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-3.7038, 40.4168],
    zoom: 5
});


mapa.addControl(new maplibregl.NavigationControl());


// Cargar lugares de memoria

fetch('datos/lugares.json')
    .then(response => response.json())
    .then(lugares => {

        lugares.forEach(lugar => {

            const marcador = new maplibregl.Marker({
                color: '#b50e0e'
            })
            .setLngLat([lugar.lon, lugar.lat])
            .setPopup(
                new maplibregl.Popup()
                .setHTML(`
                    <h3>${lugar.nombre}</h3>
                    <p>${lugar.descripcion}</p>
                `)
            )
            .addTo(mapa);

        });

    });