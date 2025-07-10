import React, { useState } from 'react';
import ClockCard from '../components/clockCard';
import MapView from '../components/MapView';

function Home({ time }) {
  const [dynamicClocks, setDynamicClocks] = useState([]);

  const handleAddClock = (country) => {
    const guessZone = {
      India: 'Asia/Kolkata',
      China: 'Asia/Shanghai',
      'United States': 'America/New_York',
      // add more as needed
    };

    const timeZone = guessZone[country] || Intl.DateTimeFormat().resolvedOptions().timeZone;

    setDynamicClocks((prev) => [
      ...prev,
      { title: country, timeZone, users: 'Unknown', storage: '-', support: 'Standard support' },
    ]);
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Welcome to World Clock</h2>
      <MapView onAddClock={handleAddClock} />

      <div className="row">
        <ClockCard
          title="India"
          timeZone="Asia/Kolkata"
          time={time}
          users="10"
          storage="2 GB"
          support="Email support"
          btnText="More About This Zone"
        />
        <ClockCard
          title="United States"
          timeZone="America/New_York"
          time={time}
          users="20"
          storage="10 GB"
          support="Priority email support"
          btnText="More About This Zone"
        />
        <ClockCard
          title="China"
          timeZone="Asia/Shanghai"
          time={time}
          users="30"
          storage="15 GB"
          support="Phone and email support"
          btnText="More About This Zone"
        />

        {dynamicClocks.map((clock, idx) => (
          <ClockCard
            key={idx}
            title={clock.title}
            timeZone={clock.timeZone}
            time={time}
            users={clock.users}
            storage={clock.storage}
            support={clock.support}
            btnText="More About This Zone"
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
