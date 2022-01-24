//7. importing router in app.js AS browserouter, route, switch
//Routing in App.js  as i know it very well.
//Routing is working fine

import React from 'react';
import Header from './Containers/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import ProductListings from './Containers/ProductListings';
import ProductDetails from './Containers/ProductDetails';


const App = () => {
  return (
<div className='App'>
<Router>
<Header/>
<Switch>
<Route path="/" exact component={ProductListings}/>
<Route path="/product/:productId" exact component={ProductDetails}/>
<Route>404 Not Found</Route>
</Switch>
</Router>
</div>
  
  )
};

export default App;
