const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZHJvcmJ5IiwiYSI6ImNrN25iODc0aTA0d3kzbm9jbGRla3U3NnQifQ.twlWY2u8F9go7Ne7CIQmmw'
    request({ url, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (res.body.features ===undefined || res.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode