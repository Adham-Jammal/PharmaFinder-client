import { getCurrentTime } from "./getCurrentTime";

const currentTime = getCurrentTime();
const currentDay = new Date().toLocaleString("en-US", { weekday: "short" });
const nextDay = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toLocaleString("en-US", { weekday: "short" });
export const handelDutyDay = () => {
    if (currentTime > '21:00:00') {
        return nextDay;
    } else {
        return currentDay;
    }
};