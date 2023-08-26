// reducers/rootReducer.js

import { combineReducers } from 'redux';
import { pharmaciesReducer } from './pharmaciesReducer';
import citiesReducer from './citiesReducer';
import selectedPharmacyReducer from './selectedPharmacyReducer'; // Import the new reducer

const rootReducer = combineReducers({
    pharmacies: pharmaciesReducer,
    cities: citiesReducer,
    selectedPharmacy: selectedPharmacyReducer, // Add the new reducer
});

export default rootReducer;
