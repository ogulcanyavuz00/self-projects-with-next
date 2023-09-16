"use client";
import { useEffect, useState } from "react";

const padStartAdder = (dateElement: number) =>
  dateElement.toString().padStart(2, "0");

function showTime(newDate: Date = new Date()) {
  const getTime = {
    dateObj: newDate,
    get currentHour() {
      return padStartAdder(this.dateObj.getHours());
    },
    get currentMinute() {
      return padStartAdder(this.dateObj.getMinutes());
    },
    get currentSecond() {
      return padStartAdder(this.dateObj.getSeconds());
    },
  };
  const { currentHour, currentMinute, currentSecond } = getTime;

  return `${currentHour}:${currentMinute}:${currentSecond}`;
}

export function ShowTime() {
  const [time, setTime] = useState("");
  const [timeVisible, setTimeVisible] = useState(true);

  useEffect(() => {
    setTime(showTime());
    const intervalId = setInterval(() => {
      setTime(showTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p>Hello React. Its {timeVisible && time}</p>
      <button onClick={() => setTimeVisible((p) => !p)}>
        {timeVisible ? "Hide" : "Show"} time
      </button>
    </>
  );
}
