import React from 'react';

const OpenStatus = () => {
  const now = new Date();
  const currentDay = now.getDay(); 
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  const currentTimeInMinutes = currentHour * 60 + currentMinutes;

  let isOpen = false;
  let statusMessage = "WE ARE CLOSED";

  if (currentDay >= 1 && currentDay <= 5) {
    const openTime = 7 * 60;   
    const closeTime = 21 * 60; 
    isOpen = currentTimeInMinutes >= openTime && currentTimeInMinutes <= closeTime;
  } 

  else if (currentDay === 0 || currentDay === 6) {
    const openTime = 10 * 60;  
    const closeTime = 15 * 60;
    isOpen = currentTimeInMinutes >= openTime && currentTimeInMinutes <= closeTime;
  }

  statusMessage = isOpen ? "WE ARE OPEN" : "WE ARE CLOSED";

  return (
    <>
      <div className="working_hours">
        <h3>WORKING HOURS</h3>
        <div>
          <p>MONDAY - FRIDAY</p>
          <p>7 AM - 9 PM</p>
        </div>
        <div>
          <p>SATURDAY, SUNDAY</p>
          <p>10 AM - 3 PM</p>
        </div>
      </div>

      <div className={`open_status ${isOpen ? 'open' : 'closed'}`}>
        <p>{statusMessage}</p>
      </div>
    </>
  );
};

export default OpenStatus;