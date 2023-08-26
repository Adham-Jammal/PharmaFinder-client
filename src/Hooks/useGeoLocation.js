import { useState, useEffect } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: null,
        coordinates: { lat: "", lng: "" },
        supported: true, 
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
            supported: true,
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            // Default coordinates
            coordinates: {
                lat: 34.8021,
                lng: 38.9968,
            },
            error: {
                code: error.code,
                message: error.message,
            },
            supported: false, 
        });
    };
    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
};

export default useGeoLocation;
