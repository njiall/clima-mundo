const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Nombre de la ciudad'
    }
}).argv;

console.log(argv.direccion);