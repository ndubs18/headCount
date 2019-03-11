const axios = require('axios');




export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResult() {
        try {
            const res = await axios(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${key}&input=${this.query}&inputtype=textquery&locationBias=ipbias`);
            if(res.statusText === "OK") {
                //Set the axios request result equal to the 'result' variable on 'this' object.
                this.result = res.data.candidates[0].place_id;
            }

            else{
                console.log('Could not find that address.')
            }
        } catch(e) {
            console.log(e);
        }
    
    }

}



