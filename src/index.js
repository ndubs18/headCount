import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import search from './models/Search.js';
import details from './models/Details.js';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


//get the input element for the search model and encode it for url
const estab = encodeURI('Sandovals Mexican Grill Portland')

//initialize a search object with the query from input element
let idSearch = new search(estab, (errorMessage, results) => {

    if(errorMessage) {
        console.log(errorMessage)
    }
    if(results){
        console.log(results)

        let detailsSearch = new details(results.placeID);
        detailsSearch.getDetails();
        
    }
});

idSearch.getResult();








