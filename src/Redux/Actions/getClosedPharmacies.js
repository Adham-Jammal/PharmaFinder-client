import { getCurrentTime } from "../../Utilities/getCurrentTime";
import { handelDutyDay } from "../../Utilities/handelDutyDay";
import { requestPharmacies } from "./requestPharmacies";

export const getClosedPharmacies = (city) => {
    return async (dispatch) => {
        const currentTime = getCurrentTime();
        const currentDay = new Date().toLocaleString("en-US", { weekday: "short" });
        let params
        if (city === 'all') {
            params = {
                filters: {
                    $and: [
                        {
                            $or: [
                                {
                                    WorkingHours: {
                                        $or: [
                                            {
                                                OpeningTime: {
                                                    $gt: currentTime,
                                                },
                                            },
                                            {
                                                ClosingTime: {
                                                    $lt: currentTime
                                                },
                                            }
                                        ]


                                    },
                                },
                                {
                                    day_off: {
                                        Day: {
                                            $eq: currentDay
                                        }
                                    },
                                },
                            ],
                        },
                        {
                            duty_day: {
                                Day: {
                                    $ne: handelDutyDay(),
                                }
                            },
                        }
                    ]
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
                    $and: [
                        {
                            $or: [
                                {
                                    WorkingHours: {
                                        $or: [
                                            {
                                                OpeningTime: {
                                                    $gt: currentTime,
                                                },
                                            },
                                            {
                                                ClosingTime: {
                                                    $lt: currentTime
                                                },
                                            }
                                        ]


                                    },
                                },
                                {
                                    day_off: {
                                        Day: {
                                            $eq: currentDay
                                        }
                                    },
                                },
                            ],
                        },
                        {
                            duty_day: {
                                Day: {
                                    $ne: handelDutyDay(),
                                }
                            },
                        }
                    ]


                }
            };
        }


        await requestPharmacies(dispatch, params);
    };
};
