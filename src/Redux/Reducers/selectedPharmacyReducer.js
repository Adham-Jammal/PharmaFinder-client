
const initialState = null;

const selectedPharmacyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PHARMACY":
      return action.payload;
    case "CLEAR_SELECTED_PHARMACY":
      return null;
    default:
      return state;
  }
};

export const selectPharmacy = (pharmacy) => ({
  type: "SELECT_PHARMACY",
  payload: pharmacy,
});

export const clearSelectedPharmacy = () => ({
  type: "CLEAR_SELECTED_PHARMACY",
});

export default selectedPharmacyReducer;
