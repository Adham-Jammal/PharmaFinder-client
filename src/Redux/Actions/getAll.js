import { requestPharmacies } from "./requestPharmacies";
export const getAll = (city) => {
    return async (dispatch) => {
        let params ={}
        if(city === 'all'){
            params = {
                
            };
        }
        else{
            params = {
                filters: {
                    city: {
                        CityName: {
                            $eq: city
                        }
                    },
                }
            };
        }
        await requestPharmacies(dispatch, params);
    };
}
