fetch('datos/lugares.json')
    .then(response => response.json())
    .then(lugares => {

        console.log(lugares);

        lugares.forEach(lugar => {

            new maplibregl.Marker({
                color: '#b50e0e'
            })
            .setLngLat([lugar.lon, lugar.lat])
            .addTo(mapa);

        });

    });