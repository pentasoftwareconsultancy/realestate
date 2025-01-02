import React from "react";
import './servicePage.css';

const ServicePage = () => {
  return (
    <>
      <div className="service-banner1">
        <div className="service-banner1-text">
          <h2>Services</h2>
        </div>
      </div>
      <div className="service-details">
        <h3>Services</h3>
        <ul>
          <li>1. Primary (mid markets and luxury)</li>
          <li>2. Corporate divestments</li>
          <li>3. Leasing</li>
          <li>4. Resale (luxury)</li>
          <li>5. Mandates</li>
        </ul>
        <p><em>Hand-holding clients through the entire journey</em></p>
        <div className="service-image">
          <img src="https://cdn.corporatefinanceinstitute.com/assets/multiple-listing-service-mls.jpeg" alt="Buying Process" />
        </div>
        <div className="service-image">
          <img src="https://jll-global-gdim-res.cloudinary.com/image/u…9/olmwebcontents/ip/prod/nbscploemdaf1pz5fsgv.jpg" />
        </div>
      </div>
    </>
  );
}

export default ServicePage;
