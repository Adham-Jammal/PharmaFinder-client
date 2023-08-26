import { useEffect, useState } from "react";
import axios from "axios";

 const fetchAPI = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        Authorization: 'bearer cff3dedb0d736738339c2035552368e63aab7d10c5306159bb23458ffae75c41064ac94d0967c3c5f3fcc9e7c5ab1990aa3372783f6168164e3e7a2ce4097679d72eb027ac17c099813e5db5cadb4a4dcc843da1603717ab7dd366c86a7a2e88af89291fe42d2eeb2a8a664cbef0aaa54f25b145003f401aeba7e150d847ed5a'
    }
})

export const useFetch = (endPoint) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const result = await fetchAPI.get(endPoint);
                setData(result.data.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [endPoint])
    return {data , loading , error}
}