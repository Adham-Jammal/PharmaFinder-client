import { getCurrentTime } from "../../Utilities/getCurrentTime";
import { handelDutyDay } from "../../Utilities/handelDutyDay";
import { requestPharmacies } from "./requestPharmacies";

export const getOpenPharmacies = (city) => {
    return async (dispatch) => {
        const currentTime = getCurrentTime();
        const currentDay = new Date().toLocaleString("en-US", { weekday: "short" });
        let params
        if (city === 'all') {
            params = {
                filters: {
                    $or: [
                        {
                            WorkingHours: {
                                OpeningTime: {
                                    $lt: currentTime,
                                },
                                ClosingTime: {
                                    $gt: currentTime
                                },
                            },
                            day_off: {
                                Day: {
                                    $ne: currentDay
                                }
                            },
                        },
                        {
                            duty_day: {
                                Day: {
                                    $eq: handelDutyDay(),
                                }
                            },
                        },
                    ],
                }
            };
        }
        else {
            params = {
                filters: {
                    city: {
                        CityName: {
                            $eq: city
                        }
                    },
                    $or: [
                        {
                            WorkingHours: {
                                OpeningTime: {
                                    $lt: currentTime,
                                },
                                ClosingTime: {
                                    $gt: currentTime
                                },
                            },
                            day_off: {
                                Day: {
                                    $ne: currentDay
                                }
                            },
                        },
                        {
                            duty_day: {
                                Day: {
                                    $eq: handelDutyDay(),
                                }
                            },
                        },
                    ],
                }
            };
        }


        await requestPharmacies(dispatch, params);
    };
};
