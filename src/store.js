// store keeps hold of the state and allows to dispatch actions that will 
// modify state. Redux archit. expects to have a single store contain app
// state, easier to syncg app's state with state stored in db

// create a store using createstore method, telling to use our reducer to 
// handle any actions dispatched
import { createStore } from 'redux';

import hotColdReducer from './hotColdReducer';

export default createStore(hotColdReducer);