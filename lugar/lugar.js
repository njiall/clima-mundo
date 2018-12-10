const axios = require('axios');
const colors = require('colors');


const getLugarLatLng = async(direccion) => {

    let encodedURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No existen resultados para ${direccion}`)
    }

    let ubicacion = resp.data.results[0];
    let coordenadas = ubicacion.geometry.location;


    return {
        direccion: ubicacion.formatted_address,
        latitud: coordenadas.lat,
        longitud: coordenadas.lng
    }
}

module.exports = {
    getLugarLatLng
}