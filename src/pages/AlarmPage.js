import React from 'react';
import AlarmSection from '../components/alarmSection';

function AlarmPage({ time }) {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Alarm Section</h2>
      <AlarmSection currentTime={time} />
    </div>
  );
}

export default AlarmPage;
