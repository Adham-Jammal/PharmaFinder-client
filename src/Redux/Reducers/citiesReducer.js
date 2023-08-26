const initialState = {
    cities: [],
  };
  
  const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_CITIES_REQUEST":
        return {
          ...state,
        };
      case "FETCH_CITIES_SUCCESS":
        return {
          ...state,
          cities: action.data,
        };
      case "FETCH_CITIES_FAILURE":
        return {
          ...state,
        };
      default:
        return state;
    }
  };
  
  export default citiesReducer;
  