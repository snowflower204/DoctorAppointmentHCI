import React, { useState, useRef } from 'react'
import WebWrapper from '../../components/website/WebWrapper'
import '../../styles/Hero.css'

import { Link, useNavigate } from 'react-router-dom'
import { about_1, about_2, about_3, about_4, checkbox, cta, cta_hero, cta_yellow, doctor_1, doctor_2, doctor_3, doctor_4, doctor_5, tooth1, tooth2, tooth3, tooth4, tooth5, tooth6, tooth7 } from '../../assets'
import OpenStatus from '../../components/website/OpenStatus'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <WebWrapper>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <DoctorSection />
      <Hero_CTA navigate={navigate} />

    </WebWrapper>
  )
}

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="content">

        <div className="hero_text">
          <h1>if it’s not white, it’s not right!</h1>
          <p>Advanced dental care with a white gentle touch for the best race.</p>
        </div>

        <div className="appointment_info">
          <div className="schedule">
            <OpenStatus/>
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
      img: tooth5,
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
      img: tooth2,
    },
    {
      title: "Pediatric Dentistry",
      subtitle: "Gentle, friendly dental care for children.",
      services: ["Child Dental Exams & Cleanings", "Sealants & Fluoride Treatments", "Habit Counseling (Thumb-sucking, etc.)"],
      img: tooth6,
    },
    {
      title: "Emergency Dental Care",
      subtitle: "Prompt treatment when you need it most.",
      services: ["Toothaches", "Chipped or Broken Teeth", "Lost Fillings or Crowns"],
      img: tooth7,
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
    <section className="service" id='service'>
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
  const aboutInformation = [
    {
      img: about_1,
      class: "",
      header: "State-of-the-art equipment",
      desc: "We use the latest advancements in dental technology to provide the highest quality care."
    },
    {
      img: about_2,
      class: "",
      header: "Experienced & caring professionals",
      desc: "Our team of dentists, hygienists, and specialists brings years of expertise and a passion for patient care."
    },
    {
      img: about_3,
      class: "diff",
      header: "Pain-free, stress- free treatments",
      desc: "We understand that dental visits can be stressful, which is why we prioritize gentle techniques."
    },
    {
      img: about_4,
      class: "",
      header: "Personalized approach for every patient",
      desc: "Every smile is unique, and so is every treatment plan. We take time to understand your particular oral problem and then provide the appropriate oral service."
    },
  ]
  return (
    <section className="about" id='about'>
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
        {aboutInformation.map((card, index) => (
          <div className={`card ${card.class}`} key={index}>
            <div className="img_container">
              <img src={card.img} alt="" />
            </div>

            <br />
            <h3>{card.header}</h3>
            <p>{card.desc}</p>
          </div>
        ))}

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
      name: "Dr. James Whitaker ",
      specialty: "Cosmetic & General Dentist",
      category: "Dentists",
      img: doctor_3,
    },
    {
      name: "Dr. Lauren Mitchell",
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
    <section className="doctor" id='doctor'>
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

const Hero_CTA = ({navigate}) => {
  return (
    <section className="cta">
      <div className="cta_content">
        <div className="text ">
          <h1>
            book Your appointment
            <br />
            within minutes
          </h1>

          <p>
            Scheduling your visit is quick and effortless.
            <br />
            A whiter brighter smile is just around the corner.
          </p>
          <br />
          <br />

          <button onClick={(e) => navigate("/auth")}>
            <span>Explore More</span>
            <img src={cta_yellow} alt="" />
          </button>
        </div>

        <img src={cta_hero} alt="" />
      </div>
    </section>
  );
}


export default Hero