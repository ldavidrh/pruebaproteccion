import { useState, useEffect } from "react";

const useDate = () => {
  const [actualTime, setActualTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setActualTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const hour = actualTime.getHours();
  const minutes = actualTime.getMinutes();
  const seconds = actualTime.getSeconds();

  const time = `${hour}:${minutes}:${seconds}\n\n`;

  return {
    time,
    hour,
    minutes,
    seconds,
  };
};

export default useDate;
