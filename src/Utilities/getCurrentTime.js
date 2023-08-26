export const getCurrentTime = () => {
    const now = new Date();
    const padZero = (num) => (num < 10 ? `0${num}` : num);
    const currentHour = padZero(now.getHours());
    const currentMinute = padZero(now.getMinutes());
    const currentSecond = padZero(now.getSeconds());
    const currentTime = `${currentHour}:${currentMinute}:${currentSecond}`;
    return currentTime
  };