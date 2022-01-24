//7. to link react to reduxstore, we need to import (provider) which will provide redux store to react
//importing store to index, by provider... we will provide our redux store to react app
//we will wrap app inside provider
//in provider, we will pass the store as a prop,
// store={store}




import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {provider} from "react-redux"
import Store from './Redux/Store'
import { Provider } from 'react-redux';



ReactDOM.render(
  <React.StrictMode>
  <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//8.now, we will able to see the store inside our reactdom while inspecting inside redux.
//store has now all the data that i had provided inside product option