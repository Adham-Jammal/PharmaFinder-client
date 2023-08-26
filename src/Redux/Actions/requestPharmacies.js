import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'http://localhost:1337/api/pharmacies?populate=*&';
const HEADERS = {
    Authorization: 'bearer cff3dedb0d736738339c2035552368e63aab7d10c5306159bb23458ffae75c41064ac94d0967c3c5f3fcc9e7c5ab1990aa3372783f6168164e3e7a2ce4097679d72eb027ac17c099813e5db5cadb4a4dcc843da1603717ab7dd366c86a7a2e88af89291fe42d2eeb2a8a664cbef0aaa54f25b145003f401aeba7e150d847ed5a'
};

export const requestPharmacies = async (dispatch, params) => {
    try {
        dispatch({ type: 'REQUEST_PENDING' });

        const response = await axios.get(`${BASE_URL}${qs.stringify(params)}`, {
            headers: HEADERS
        });
        dispatch({ type: 'REQUEST_SUCCESS', data: response.data.data });
    } catch (error) {
        console.error(error);
    }
};