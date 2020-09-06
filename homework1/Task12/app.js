function getCitiesMMR(outputView) {
    return Promise.all([getCities(outputView, "Minsk"), getCities(outputView, "Madrid"), getCities(outputView, "Rome")])
        .catch(err => console.log(err));
}

function getCities(outputView, cityName) {
    let options = {
        method: 'GET', headers: {'Content-Type': 'text/plain'}
    };
    return fetch(`https://geocode.xyz/${cityName}?json=1&auth=477925543705234349246x13958`, options)
        .then(response => response.json())                  
        .then(responseJson => {

            if (outputView) {
                document.getElementById('city').innerHTML += responseJson.standard.city + ' ';
            } else {
                document.getElementById(`city${cityName}`).innerHTML += responseJson.standard.city + " - " + responseJson.standard.countryname;
            }
            return responseJson;
        });
}

function getCityParis() {
    let options = {
        method: 'GET', headers: {'Content-Type': 'text/plain'}
    };
    return fetch('https://geocode.xyz/Paris?json=1&auth=477925543705234349246x13958', options)
        .then(response => response.json());
}

function getCityNice() {
    let options = {
        method: 'GET', headers: {'Content-Type': 'text/plain'}
    };
    return fetch('https://geocode.xyz/Nice?json=1&auth=477925543705234349246x13958', options)
        .then(response => response.json());
}

function getCitiesPN() {
    Promise.race([
        getCityParis(),
        getCityNice()
    ]).then(responseJson => {
        document.getElementById('cityNiceParis').innerHTML += responseJson.standard.city + " - " + responseJson.standard.countryname;
    }).catch(err => console.log(err));
}

function returnInformationCity() {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            let allCity = getCitiesMMR(1);
            resolve(allCity);
        }, 3000)
    }))
}

returnInformationCity()
    .then(responseJson => {
        for (let i = 0; i < responseJson.length; i++) {
            document.getElementById('country').innerHTML += responseJson[i].standard.countryname + ' ';
        }
    }).catch(err => console.log(err));