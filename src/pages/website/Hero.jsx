import React, { useRef } from 'react'
import WebWrapper from '../../components/website/WebWrapper'


import '../../styles/Hero.css'
import { Link } from 'react-router-dom'
import { checkbox, cta, cta_yellow, tooth1, tooth2, tooth3, tooth4 } from '../../assets'

const Hero = () => {
  return (
    <WebWrapper>
      <HeroSection />
      <ServicesSection />

      <section className="about">
        Hello
      </section>

      <section className="doctor">
        Hello
      </section>

      <section className="cta">
        Hello
      </section>

    </WebWrapper>
  )
}

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="content">

        <div className="hero_text">
          <h1>if it’s not white, it’s not right!</h1>
          <p>Advanced dental care with a white gentle touch.</p>
        </div>

        <div className="appointment_info">
          <div className="schedule">
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

            <div className="open_status">
              <p>WE ARE OPEN</p>

            </div>
          </div>

          <Link to="/auth">
            <div className="cta_hero">

              <div className="top">
                <h3>BOOK APPOINTMENT</h3>
                <img src={cta} alt="" />
              </div>

              <p>Gain access to our propitiatory software for dental appointments with our leading dentists </p>
            </div>

          </Link>

        </div>
      </div>
    </section>
  );
}

const ServicesSection = () => {
  const servicesCardContent = [
    {
      title: "Cosmetic Dentistry",
      subtitle: "Enhance the appearance of your smile.",
      services: ["Teeth Whitening", "Veneers", "Smile Makeovers"],
      img: tooth1,
    },
    {
      title: "Implants & Prosthetics",
      subtitle: "Restore function and aesthetics with durable replacements.",
      services: ["Tooth-Colored Fillings", "Veneers", "Smile Makeovers"],
      img: tooth2,
    },
    {
      title: "Restorative Dentistry",
      subtitle: "Repair damaged or decayed teeth.",
      services: ["Tooth-Colored Fillings", "Dental Crowns", "Dental Bridges"],
      img: tooth3,
    },
    {
      title: "Preventive Care",
      subtitle: "Maintain optimal oral health and catch issues early.",
      services: ["Dental Cleanings", "Oral Exams", "Fluoride Treatments"],
      img: tooth4,
    },
    {
      title: "Orthodontics",
      subtitle: "Straighten and align teeth for a healthier bite.",
      services: ["Traditional Braces", "Clear Aligners (e.g., Invisalign)", "Retainers"],
      img: tooth1,
    },
    {
      title: "Pediatric Dentistry",
      subtitle: "Gentle, friendly dental care for children.",
      services: ["Child Dental Exams & Cleanings", "Sealants & Fluoride Treatments", "Habit Counseling (Thumb-sucking, etc.)"],
      img: tooth2,
    },
    {
      title: "Emergency Dental Care",
      subtitle: "Prompt treatment when you need it most.",
      services: ["Toothaches", "Chipped or Broken Teeth", "Lost Fillings or Crowns"],
      img: tooth3,
    },
  ];

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const sliderRef = useRef(null);

  return (
    <section className="service">
      <div className="tag">
        <p>OUR ORAL SERVICES</p>
      </div>

      <div className="description">
        <div className="title">
          <h1>Dental Services</h1>
          <h1>for Every Need</h1>
        </div>

        <div className="disc">
          <p>
            From preventive care to advanced cosmetic and restorative treatments,
            we provide a full range of dental services tailored to your white needs.
          </p>
          <button>Explore All Services</button>
        </div>
      </div>

      <div className="slider-container">
        <div className="btn_controller">
          <button onClick={() => scroll("left")} className="slider-btn">←</button>
          <button onClick={() => scroll("right")} className="slider-btn">→</button>
        </div>

        <div className="slider-wrapper" ref={sliderRef}>
          {servicesCardContent.map((card, index) => (
            <div className="card" key={index}>
              <div className="img_container">
                <img src={card.img} alt="" />
              </div>
              <h2>{card.title}</h2>
              <ul>
                {card.services.map((service, idx) => (
                  <li key={idx}><img src={checkbox} alt="" /><p>{service}</p></li>
                ))}
              </ul>
              <button>
                Explore More
                <img src={cta_yellow} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    
  );
};

export default Hero