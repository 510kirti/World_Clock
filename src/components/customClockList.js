import React, { useState } from 'react';

const timezones = [
  'Asia/Kolkata',
  'America/New_York',
  'Europe/London',
  'Asia/Tokyo',
  'Europe/Paris',
  'Australia/Sydney',
  'America/Los_Angeles',
  'Africa/Nairobi',
];

const timeZoneCountryMap = {
  'Asia/Kolkata': 'IN',
  'America/New_York': 'US',
  'Europe/London': 'GB',
  'Asia/Tokyo': 'JP',
  'Europe/Paris': 'FR',
  'Australia/Sydney': 'AU',
  'America/Los_Angeles': 'US',
  'Africa/Nairobi': 'KE',
};

function CustomClockList({ currentTime }) {
  const [selectedZones, setSelectedZones] = useState([]);
  const [newZone, setNewZone] = useState('');

  const addZone = () => {
    if (newZone && !selectedZones.includes(newZone)) {
      setSelectedZones([...selectedZones, newZone]);
    }
    setNewZone('');
  };

  const removeZone = (zoneToRemove) => {
    const updated = selectedZones.filter((zone) => zone !== zoneToRemove);
    setSelectedZones(updated);
  };

  return (
    <div className="mt-4">
      <h4>Add a City Clock</h4>
      <div className="d-flex mb-3">
        <select
          className="form-select me-2"
          value={newZone}
          onChange={(e) => setNewZone(e.target.value)}
        >
          <option value="">-- Select Timezone --</option>
          {timezones.map((tz, i) => (
            <option key={i} value={tz}>
              {tz}
            </option>
          ))}
        </select>
        <button className="btn btn-primary" onClick={addZone}>
          Add Clock
        </button>
      </div>

      <div className="row">
        {selectedZones.map((zone, index) => {
          const countryCode = timeZoneCountryMap[zone];
          const flagUrl = countryCode
            ? `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`
            : null;

          return (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card text-center">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    {flagUrl && (
                      <img
                        src={flagUrl}
                        alt={countryCode}
                        width="30"
                        height="22"
                        style={{ borderRadius: '3px' }}
                      />
                    )}
                    <span>{zone}</span>
                  </div>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeZone(zone)}
                  >
                    ❌
                  </button>
                </div>
                <div className="card-body">
                  <h5>
                    {currentTime.toLocaleTimeString('en-US', {
                      timeZone: zone,
                      hour12: true,
                    })}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomClockList;
