import React, { useState, useEffect } from "react";

const Alarm = ({ currentTime }) => {
  const [alarmTime, setAlarmTime] = useState("");
  const [isSet, setIsSet] = useState(false);
  const alarmAudio = new Audio(
    "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
  );

  useEffect(() => {
    if (!isSet) return;
    const now = currentTime;
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    if (`${hh}:${mm}` === alarmTime) {
      setIsSet(false);
      alarmAudio.play();
      alert("⏰ Alarm ringing!");
    }
  }, [currentTime, isSet, alarmTime]);

  return (
    <div className="alarm">
      <h2>⏰ Set Alarm</h2>
      <input
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
      />
      <button onClick={() => setIsSet(Boolean(alarmTime))}>
        Set Alarm
      </button>
      <p>{isSet ? `Alarm set for ${alarmTime}` : "No alarm set."}</p>
    </div>
  );
};

export default Alarm;
