"use client";
import React, { useState, useEffect } from "react";

const LocalTime = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const utcTime = new Date();
      const gmtPlus8Time = new Date(utcTime.getTime() + 8 * 60 * 60 * 1000);
      const hours = gmtPlus8Time.getHours().toString().padStart(2, "0");
      const minutes = gmtPlus8Time.getMinutes().toString().padStart(2, "0");
      const seconds = gmtPlus8Time.getSeconds().toString().padStart(2, "0");
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
