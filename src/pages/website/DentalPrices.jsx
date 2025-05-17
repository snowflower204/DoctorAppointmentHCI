import React from 'react'
import WebWrapper from '../../components/website/WebWrapper';

import "../../styles/DentalPrices.css"

const services = [
    { name: "Oral Prophylaxis (Cleaning)", price: "₱800 – ₱1,200" },
    { name: "Tooth Extraction", price: "₱1,000 – ₱3,000" },
    { name: "Dental Fillings (Pasta)", price: "₱1,000 – ₱2,500 per tooth" },
    { name: "Tooth Whitening", price: "₱4,000 – ₱8,000" },
    { name: "Braces Installation", price: "₱35,000 – ₱60,000" },
    { name: "Retainers (Post-Braces)", price: "₱3,000 – ₱6,000" },
    { name: "Root Canal Treatment", price: "₱5,000 – ₱12,000" },
    { name: "Dental Crowns", price: "₱8,000 – ₱18,000 per tooth" },
    { name: "Dentures (Per Arch)", price: "₱6,000 – ₱25,000" },
    { name: "Veneers (Composite/Ceramic)", price: "₱4,000 – ₱20,000 per tooth" },
    { name: "Fluoride Treatment", price: "₱500 – ₱1,000" },
    { name: "Panoramic X-Ray", price: "₱1,200 – ₱1,800" },
    { name: "Consultation Fee", price: "₱300 – ₱500" },
];

const DentalPrices = () => {
    return (
        <WebWrapper >
            <section className="price-section">
                <h2 className="section-title">Dental Service Pricing</h2>
                <div className="price-grid">
                    {services.map((service, index) => (
                        <div className="price-card" key={index}>
                            <h3>{service.name}</h3>
                            <p>{service.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </WebWrapper>
    )
}

export default DentalPrices