import React from 'react';
import CustomClockList from '../components/customClockList';

function AddClockPage({ time }) {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Add a Clock</h2>
      <CustomClockList currentTime={time} />
    </div>
  );
}

export default AddClockPage;
