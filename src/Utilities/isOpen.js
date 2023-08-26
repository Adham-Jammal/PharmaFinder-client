import { getCurrentTime } from "../Utilities/getCurrentTime";
import { handelDutyDay } from "../Utilities/handelDutyDay";


const currentTime = getCurrentTime();
const currentDay = new Date().toLocaleString("en-US", { weekday: "short" });

export const isOpen = (pharmacy) => {
  const { OpeningTime, ClosingTime } = pharmacy.attributes.WorkingHours;
  const  dayOff  = pharmacy.attributes.day_off.data.attributes.Day;
  const dutyDay = pharmacy.attributes.duty_day.data.attributes.Day;
  if (
    OpeningTime < currentTime &&
    ClosingTime > currentTime &&
    dayOff !== currentDay
  )
  {
    return true;
  }
  else if(dutyDay === handelDutyDay()){
    return true;
  }

  return false;
};
