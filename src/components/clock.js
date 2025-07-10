import React from "react";

const Clock = ({ label, timeZone, time }) => (
  <div className="clock">
    <h3>{label}</h3>
    <p>
      {time.toLocaleTimeString("en-US", {
        timeZone,
        hour12: false,
      })}
    </p>
  </div>
);

export default Clock;

