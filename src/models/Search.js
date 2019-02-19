const request = require('request');

const key = 'AIzaSyADi7s9vN9O6DNzVRgW1TiM1S_hvWQTaJA'


export default class Search {
    constructor(query, callback) {
        this.query = query;
        this.callback = callback
    }

    getResult() {

        request({
            url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${key}&input=${this.query}&inputtype=textquery&locationBias=ipbias`,
            json: true},
            (error, response, body) => {

                if(body.status === "OK") {
                    console.log(body.candidates[0].place_id)
                    this.callback = body.candidates[0].place_id;

                } else {
                    console.log('There was a problem with your request')
                }
        })
    }

}



