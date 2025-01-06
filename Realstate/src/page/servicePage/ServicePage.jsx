import React from "react";
import './servicePage.css';
import Footer from "../../component/footer/Footer";

const ServicePage = () => {
 
  const services = [
    { title: 'Buy Property', description: 'Find your dream home with our extensive property listings.', icon: '🏡' },
    { title: 'Sell Property', description: 'List your property and connect with verified buyers.', icon: '📢' },
    { title: 'Rent Property', description: 'Explore rental options for short and long-term stays.', icon: '🏘️' },
    { title: 'Mortgage Assistance', description: 'Get help with loan approvals and financial planning.', icon: '💰' },
    { title: 'Virtual Property Tours', description: 'Experience properties through 3D walkthroughs.', icon: '🎥' },
    { title: 'Legal Support', description: 'Complete property transactions with ease and accuracy.', icon: '⚖️' },
    { title: 'Property Management', description: 'End-to-end management of rental properties.', icon: '🏠' },
    { title: 'Interior Design', description: 'Transform your space with professional design services.', icon: '🛋️' },
    { title: 'Neighborhood Insights', description: 'Learn about schools, amenities, and more.', icon: '📍' },
  ];

  return (
    <>
     
      <div className="service-banner1">
        <div className="service-banner1-text">
          <h2>Services</h2>
        </div>
      </div>

      <div className="service-detail">
        <h3>Services</h3>
        <ul>
          <li>1. Primary (mid markets and luxury)</li>
          <li>2. Corporate divestments</li>
          <li>3. Leasing</li>
          <li>4. Resale (luxury)</li>
          <li>5. Mandates</li>
          <li>6. Property Buying Assistance</li>
          <li>7. Property Selling Services</li>
        </ul>
        <p><em>Hand-holding clients through the entire journey</em></p>
      </div>

      
      <div className="service-details">
        <h3>Everything you Need at One Place</h3>
        <h4>In-House Services</h4>
        
        <div className="service-grid">
  
          <div className="service-card">
            <img src="https://www.squareyards.com/assets/images/new-dotcom-services-icons/home-loan.png" alt="Home Loan" />
            <p>Home Loan</p>
          </div>
          <div className="service-card">
            <img src="https://www.squareyards.com/assets/images/new-dotcom-services-icons/home-interior.png" alt="Home Interior" />
            <p>Home Interior</p>
          </div>
          <div className="service-card">
            <img src="https://www.squareyards.com/assets/images/new-dotcom-services-icons/propery-legal-services.png" alt="Property Legal Services" />
            <p>Property Legal Services</p>
          </div>
          <div className="service-card">
            <img src="https://www.squareyards.com/assets/images/new-dotcom-services-icons/property-management.png" alt="Property Management" />
            <p>Property Management</p>
          </div>
          <div className="service-card">
            <img src="https://www.squareyards.com/assets/images/new-dotcom-services-icons/escrow-services.png" alt="Escrow Services" />
            <p>Escrow Services</p>
          </div>
          <div className="service-card">
            <img src="https://www.squareyards.com/assets/images/new-dotcom-services-icons/online-rent-agreement.png" alt="Online Rent Agreement" />
            <p>Online Rent Agreement</p>
          </div>
          <div className="service-card">
            <img src="https://www.squareyards.com/assets/images/new-dotcom-services-icons/online-rent-receipt-generator.png" alt="Rent Receipt Generator" />
            <p>Rent Receipt Generator</p>
          </div>
          <div className="service-card">
            <img src="https://www.squareyards.com/assets/images/new-dotcom-services-icons/sell-or-rent-property.png" alt="Sell or Rent Property" />
            <p>Sell or Rent Property</p>
          </div>
          <div className="service-card">
            <img src="https://www.squareyards.com/assets/images/new-dotcom-services-icons/title-search.png" alt="Title Search" />
            <p>Title Search</p>
          </div>
          <div className="service-card">
            <img src="https://www.squareyards.com/assets/images/new-dotcom-services-icons/litigation.png" alt="Litigation" />
            <p>Litigation</p>
          </div>
          <div className="service-card">
            <img src="https://www.squareyards.com/assets/images/new-dotcom-services-icons/valuation.png" alt="Valuation" />
            <p>Valuation</p>
          </div>
          <div className="service-card">
            <img src="https://www.squareyards.com/assets/images/new-dotcom-services-icons/property-registration.png" alt="Property Registration" />
            <p>Property Registration</p>
          </div>
        </div>

        <div className="services-section0">
      <h2>Our Services</h2>
      <div className="services-container7">
        {services.map((service, index) => (
          <div key={index} className="service-card1">
            <span className="service-icon1">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>

        <div className="service-image">
          <img src="https://cdn.corporatefinanceinstitute.com/assets/multiple-listing-service-mls.jpeg" alt="Buying Process" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
