import React, { useState, useRef } from 'react'
import WebWrapper from '../../components/website/WebWrapper'


import '../../styles/Hero.css'
import { Link } from 'react-router-dom'
import { about_1, about_2, about_3, about_4, checkbox, cta, cta_yellow, doctor_1, doctor_2, doctor_3, doctor_4, doctor_5, tooth1, tooth2, tooth3, tooth4 } from '../../assets'

const Hero = () => {
  return (
    <WebWrapper>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <DoctorSection />
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

const AboutSection = () => {
  return (
    <section className="about">
      <div className="tag">
        <p>WHY CHOOSE US?</p>
      </div>
      <br />

      <h1>About LMAO DENTAL CLINIC</h1>
      <br />

      <div className="description">
        <p>
          At Lume Dental, we believe that a healthy smile is a gateway to confidence and well-being.

          <br />
          <br />

          Our team of experienced dentists and hygienists use the latest technology to provide top-quality dental care in a comfortable and welcoming environment.
        </p>
        <p>
          Whether you need routine cleanings, cosmetic enhancements, or advanced procedures, we are here to help you achieve the smile of your dreams.
        </p>
      </div>
      <br />
      <br />

      <div className="card_container">
        <div className="card">
          <div className="img_container">
            <img src={about_1} alt="" />
          </div>

          <br />
          <h3>State-of-the-art equipment</h3>
          <p>We use the latest advancements in dental technology to provide the highest quality care.</p>
        </div>
        <div className="card">
          <div className="img_container">
            <img src={about_2} alt="" />
          </div>

          <br />
          <h3>State-of-the-art equipment</h3>
          <p>We use the latest advancements in dental technology to provide the highest quality care.</p>

        </div>
        <div className="card diff">
          <div className="img_container">
            <img src={about_3} alt="" />
          </div>

          <br />
          <h3>State-of-the-art equipment</h3>
          <p>We use the latest advancements in dental technology to provide the highest quality care.</p>

        </div>
        <div className="card">
          <div className="img_container">
            <img src={about_4} alt="" />
          </div>

          <br />
          <h3>State-of-the-art equipment</h3>
          <p>We use the latest advancements in dental technology to provide the highest quality care.</p>

        </div>
      </div>
    </section>


  );
}

const DoctorSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Experts");
  const sliderRef = useRef(null);

  const doctorDetails = [
    {
      name: "Dr. Emily Carter",
      specialty: "Orthodontist",
      category: "Orthodontists",
      img: doctor_1,
    },
    {
      name: "Dr. Benjamin Hayes",
      specialty: "Prosthodontist",
      category: "Dentists",
      img: doctor_2,
    },
    {
      name: "Dr. Lauren Mitchell",
      specialty: "Cosmetic & General Dentist",
      category: "Dentists",
      img: doctor_3,
    },
    {
      name: "Dr. James Whitaker",
      specialty: "Oral Surgeon",
      category: "Surgeons",
      img: doctor_4,
    },
    {
      name: "Dr. Daniel Brooks",
      specialty: "General & Family Dentist",
      category: "Dentists",
      img: doctor_5,
    },
  ];

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredDoctors = selectedCategory === "All Experts"
    ? doctorDetails
    : doctorDetails.filter(doc => doc.category === selectedCategory);

  return (
    <section className="doctor">
      <div className="tag">
        <p>OUR ORAL EXPERTS</p>
      </div>

      <div className="description">
        <div className="title">
          <h1>Dental Experts</h1>
          <h1>You Can Trust</h1>
        </div>

        <div className="disc">
          <p>
            From preventive care to advanced cosmetic and restorative treatments,
          we provide a full range of dental services tailored to your white needs.
          </p>
        </div>
      </div>

      <div className="controller">
        <div className="category_sorter">
          {["All Experts", "Dentists", "Surgeons", "Orthodontists"].map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="slider_buttons">
          <button onClick={() => scroll("left")} className="slider-btn">←</button>
          <button onClick={() => scroll("right")} className="slider-btn">→</button>
        </div>
      </div>

      <div className="slider_container" ref={sliderRef}>
        {filteredDoctors.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.name} />
            <h2>{card.name}</h2>
            <p><i>{card.specialty}</i></p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Hero