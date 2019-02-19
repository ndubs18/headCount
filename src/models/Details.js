const request = require('request');

const key = 'AIzaSyADi7s9vN9O6DNzVRgW1TiM1S_hvWQTaJA'


export default class Details {
    constructor(placeID) {
        this.placeID = placeID;
    }

    getDetails() {
        request({
            url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${this.placeID}&fields=name,rating,formatted_address&key=${key}`,
            json: true},
            (error, response, body) => {
                if(body.status === 'OK') {
                console.log(body.result.name);
                } else {
                    console.log('Something went wrong with your Details request')
                }
            
        })
    }
}

