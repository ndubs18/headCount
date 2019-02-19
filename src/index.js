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

let state = {

}

//get the input element for the search model and encode it for url
const estab = encodeURI('Sandovals Mexican Grill Portland')

//initialize a search object with the query from input element
let idSearch = new search(estab);

state.search = idSearch.getResult();

//run the getResult function for the idSearch object


let detailsSearch = new details(state.search.callback)

detailsSearch.getDetails();



