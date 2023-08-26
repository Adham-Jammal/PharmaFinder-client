import axios from 'axios';

const BASE_URL = 'http://localhost:1337/api/cities';
const HEADERS = {
    Authorization: 'bearer cff3dedb0d736738339c2035552368e63aab7d10c5306159bb23458ffae75c41064ac94d0967c3c5f3fcc9e7c5ab1990aa3372783f6168164e3e7a2ce4097679d72eb027ac17c099813e5db5cadb4a4dcc843da1603717ab7dd366c86a7a2e88af89291fe42d2eeb2a8a664cbef0aaa54f25b145003f401aeba7e150d847ed5a'
};

export const getAllCities = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'FETCH_CITIES_REQUEST' });

            const response = await axios.get(BASE_URL, {
                headers: HEADERS
            });

            dispatch({ type: 'FETCH_CITIES_SUCCESS', data: response.data.data });
        } catch (error) {
            console.error(error);
            dispatch({ type: 'FETCH_CITIES_FAILURE', error: error.message });
        }
    };
};
