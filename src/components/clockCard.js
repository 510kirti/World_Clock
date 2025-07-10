import React from 'react';
import { Link } from 'react-router-dom';

function ClockCard({ title, timeZone, time, users, storage, support, btnText }) {
  const formattedTime = time.toLocaleTimeString('en-US', {
    timeZone,
    hour12: true,
  });

  return (
    <div className="col-md-4 mb-4">
      <div className="card text-center shadow-sm border-0">
        <div className="card-header bg-primary text-white fw-semibold">{title} 🕒</div>
        <div className="card-body">
          <h3 className="card-title">{formattedTime}</h3>
          <p className="card-text">{users} users included</p>
          <p className="card-text">{storage} of storage</p>
          <p className="card-text">{support}</p>
          <p className="card-text">Help center access</p>

          {/* 🔁 Internal Link to Zone Page */}
          <Link
            to={`/zone/${title.toLowerCase()}`}
            className="btn btn-outline-primary mt-2"
          >
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClockCard;
