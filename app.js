const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Nombre de la ciudad'
    }
}).argv;

const colors = require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         clima.getClima(resp.latitud,resp.longitud);
//     })
//     .catch(e => console.log('Error: '.red, e))

// clima.getClima('48.856614', '2.3522219')
//     .then(temp => console.log(temp))
//     .catch(e => console.log('Error:'.red, e))


let getInformacion = async(direccion) => {

    try {
        let localiza = await lugar.getLugarLatLng(direccion);
        let tiempo = await clima.getClima(localiza.latitud, localiza.longitud);
        return `La temperatura de ${localiza.direccion} es de ${tiempo.temperatura} grados`;

    } catch (error) {
        console.log('Error'.red, error)
    }
}

getInformacion(argv.direccion)
    .then(respuesta => console.log(respuesta))
    .catch(e => console.log('Error'.red, e))