import { FETCH_WEATHER } from '../actions/index';

// sets the initial data structure of global application state to an array 
// allowing for multiple cities to be selected/searched for
export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // handle the payload only if the action type if FETCH_WEATHER
            // concatenates the new data to the existing state (an array of selected cities)
            // this way, we don't manipulate state directly in the reducer, we add the new city to the existing
            // array and return a new instance of state (plain js object)
            return state.concat([ action.payload.data ]);
            // ***** ES6 syntax that does the same thing as the above line of code
            // return [ action.payload.data, ...state ];
    };
    return state;
}; 