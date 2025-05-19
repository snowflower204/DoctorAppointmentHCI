import React, { useState } from 'react';
import '../../../styles/PatientDashboard.css';
import PatientWrapper from '../../../components/app/PatientWrapper';
import { Card, CardContent } from '../../../components/app/card';
import { Button } from '../../../components/app/button';
import Calendar from '../../../components/app/calendar';

import doctor_1 from "../../../assets/imgs/doctor_1.png";
import doctor_2 from "../../../assets/imgs/doctor_2.png";
import doctor_3 from "../../../assets/imgs/doctor_3.png";
import doctor_4 from "../../../assets/imgs/doctor_4.png";
import doctor_5 from "../../../assets/imgs/doctor_5.png";
import design from "../../../assets/imgs/header.png";
import { image } from 'framer-motion/client';

const PatientDashboard = () => {
  const [doctorDetails] = useState([
    { name: "Dr. Emily Carter", specialty: "Orthodontist", category: "Orthodontists", available: true, avatar: doctor_1 },
    { name: "Dr. Benjamin Hayes", specialty: "Prosthodontist", category: "Dentists", available: true, avatar: doctor_2 },
    { name: "Dr. James Whitaker", specialty: "Cosmetic & General Dentist", category: "Dentists", available: true, avatar: doctor_3 },
    { name: "Dr. Lauren Mitchell", specialty: "Oral Surgeon", category: "Surgeons", available: true, avatar: doctor_4 },
    { name: "Dr. Daniel Brooks", specialty: "General & Family Dentist", category: "Dentists", available: true, avatar: doctor_5 },
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    if (selectedDoctor && selectedTime) {
      console.log(`Booking confirmed for ${selectedDoctor.name} at ${selectedTime}`);
    } else {
      console.log('Please select a doctor and time');
    }
  };

  return (
    <PatientWrapper>
     <header className="dashboard-header">
  <div className="header-left">
    <h1 className="text-2xl font-bold">Welcome Back!</h1>
    <p className="text-lg">Robert Bamba</p>

    {/* Banner box below patient name */}
    <div className="banner-section">
      <span className="font-semibold">WE ARE CLOSED</span>
    </div>
  </div>

  <div className="header-right">
    <img src={design} alt="Dashboard Design" />
  </div>
</header>

{/* Booking & Doctor Section */}
<section className="dashboard-layout">
  <div className="dashboard-content">
          
          {/* Booking Section */}
          <div className="booking-section">
            <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
            <div className="booking-box">
              <Calendar mode="single" className="rounded-xl" />

              <select
                className="select-box"
                value={selectedDoctor?.name || ""}
                onChange={(e) => setSelectedDoctor(doctorDetails.find((doc) => doc.name === e.target.value))}
              >
                <option value="">Select a doctor</option>
                {doctorDetails.filter(doc => doc.available).map((doc) => (
                  <option key={doc.name} value={doc.name}>
                    {doc.name} - {doc.specialty}
                  </option>
                ))}
              </select>

              <input
                type="time"
                className="time-picker"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />

              <Button className="glassy-button" onClick={handleBooking}>
                Confirm Booking
              </Button>
            </div>
          </div>

          {/* Doctor Cards */}
          <div className="doctor-list-box">
            <h2 className="text-2xl font-semibold mb-4">Available Doctors</h2>
            <div className="doctor-list">
              {doctorDetails.filter(doc => doc.available).map((doc) => (
                <div key={doc.name} className="doctor-item">
                  <img src={doc.avatar} alt={doc.name} className="doctor-avatar" />
                  <div className="doctor-info">
                    <h3>{doc.name}</h3>
                    <p>{doc.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Appointment Schedule */}
      <section className="appointment-section">
        <h2 className="text-2xl font-semibold mb-4">Your Appointment Schedule</h2>
        <div className="appointment-box">
          <Card>
            <CardContent className="appointment-content">
              <p className="text-lg font-medium text-gray-500">
                No booked appointments yet
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </PatientWrapper>
  );
};

export default PatientDashboard;
