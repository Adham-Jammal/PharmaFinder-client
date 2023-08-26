export const pharmaciesReducer = (state = { pharmacies: [], loading: false }, action) => {
    switch (action.type) {
        case "REQUEST_PENDING":
            return { ...state, loading: true };
        case "REQUEST_SUCCESS":
            return { ...state, pharmacies: action.data, loading: false };
        default:
            return state;
    }
}
