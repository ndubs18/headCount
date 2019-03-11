const axios = require('axios');

const key = 'AIzaSyADi7s9vN9O6DNzVRgW1TiM1S_hvWQTaJA'


export default class Details {
    constructor(placeID) {
        this.placeID = placeID;
    }

    async getDetails() {
        try {

            const det = await axios(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${this.placeID}&fields=name,rating,formatted_address&key=${key}`);
            
            if(det.statusText === "OK") { 
            console.log(det.data.result);
            }

            else {
                console.log('There was an error with your details request')
            }
        } catch(e) {
            console.log(e);
        }
    }
}

