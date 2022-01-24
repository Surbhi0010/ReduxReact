//5. after combinig the reducers, we have to create the store, so, first
//we have to import the {createstore}
//import reducers here.
//we will create const store which is equal to redux store called (createStore)
//createStore takes couple of argument = 1.all reducers which we have created= i have combined all reducer to (reducers)
                                    //   2.redux thung/redux saga
                                    //   3.empty state
import { createStore } from "redux";
import reducers from "./Reducers/index";

const store= createStore(reducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store



//6. after doing all of this, you will not see any difference, you want to see the redux in our chrome devtool
//we need to have an extension
//adding  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() to createstore argument
// now also, we will not see the store, because react is not linked with the redux store which we have created now.
//lets go to index.js