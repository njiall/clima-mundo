const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6723e894bb0d153117c3232f4ce7a1aa`)

    if (resp.data.cod !== 200) {
        throw new Error(`No existen resultados`)

    } else {
        return {
            temperatura: resp.data.main.temp
        };
    }
}

module.exports = {
    getClima
}