"use client";
import React, { useState, useEffect } from "react";

const LocalTime = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const utcTime = new Date();
      const phTime = new Date(utcTime.getTime() + 8 * 60 * 60 * 1000); // Adding 8 hours for UTC+8 (Philippine Time)
      const hours = phTime.getHours().toString().padStart(2, "0");
      const minutes = phTime.getMinutes().toString().padStart(2, "0");
      const seconds = phTime.getSeconds().toString().padStart(2, "0");
      setLocalTime(`${hours}:${minutes}:${seconds} AM GMT+8`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white font-helvetica font-semibold">
      <p>Local Time:</p>
      <p>{localTime}</p>
    </div>
  );
};

export default LocalTime;
