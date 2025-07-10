import React, { useState, useEffect } from 'react';

function AlarmSection({ currentTime }) {
  const [alarmTime, setAlarmTime] = useState('');
  const [isSet, setIsSet] = useState(false);
  const audio = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');

  useEffect(() => {
    if (!isSet) return;

    const now = currentTime;
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const nowStr = `${hh}:${mm}`;

    if (alarmTime === nowStr) {
      audio.play();
      alert('⏰ Alarm ringing!');
      setIsSet(false);
    }
  }, [currentTime, alarmTime, isSet]);

  return (
    <div className="mt-5">
      <h4>Set an Alarm</h4>
      <label>Select a time for your Alarm: </label>
      <input
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
        className="mx-2"
      />
      <button className="btn btn-success" onClick={() => setIsSet(true)}>
        Set Alarm
      </button>
    </div>
  );
}

export default AlarmSection;
