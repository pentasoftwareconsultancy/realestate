import React from 'react'
import styles from './Filter.module.css'

function Filter(setPropertyList,properties) {


  const filterProperties = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = properties.filter(
      (p) =>
        p.price.toLowerCase().includes(searchTerm)
    );
    setPropertyList(filtered);
  };


  const handleCityFilter = (event) => {
    const selectedCity = event.target.value.toLowerCase();

    if (selectedCity === "all") {
      // Show all properties if "All" is selected
      setPropertyList(properties);
    } else {
      const filtered = properties.filter(
        (p) => p.location.toLowerCase() === selectedCity
      );
      setPropertyList(filtered);
    }
  };

  return (
    <div className={styles.Filter}>
      <div className={styles.sidebar}>
      <div className={styles.section}>
        <label className={styles.toggle}>
        <h2>Apply Filters</h2>
          
        </label>
       
      </div>

      <div className={styles.section}>
        <h4>Budget</h4>
        <div className={styles.slider}>
          <input type="range" min="0" max="100" />
          <div className={styles.budgetRange}>
            <input type="text" placeholder="Min Budget" onChange={filterProperties} />
            <input type="text" placeholder="Max Budget" onChange={filterProperties} />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Type of property</h4>
        <div className={styles.options}>
          <button className={styles.option}>Residential Apartment</button>
          <button className={styles.option}>Residential Land</button>
          <button className={styles.option}>Independent House/Villa</button>
          <button className={styles.option}>Independent/Builder Floor</button>
          <button className={styles.option}>1 RK/Studio Apartment</button>
        </div>
      </div>

      <div className={styles.section}>
        <h4>No. of Bedrooms</h4>
        <div className={styles.options}>
          <button className={styles.option}>1 BHK</button>
          <button className={styles.option}>2 BHK</button>
          <button className={styles.option}>3 BHK</button>
          <button className={styles.option}>4 BHK</button>
          <button className={styles.option}>5 BHK</button>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Construction Status</h4>
        <div className={styles.options}>
          <button className={styles.option}>New Launch</button>
          <button className={styles.option}>Under Construction</button>
          <button className={styles.option}>Ready to move</button>
        </div>
      </div>
    


      <div className={styles.section}>
      <h4>Localities</h4>
      <label htmlFor="city-filter">Filter by City:</label>
      <select id="city-filter" onChange={handleCityFilter}>
        <option value="all">All Cities</option>
        <option value="pune">Pune</option>
        <option value="mumbai">Mumbai</option>
        <option value="thane">Thane</option>
        <option value="bangalore">Bangalore</option>
        <option value="beed">Beed</option>
      </select>
        <ul className={styles.checkboxList}>
        
        </ul>
      </div>

      <div className={styles.section}>
        <h4>New Projects / Societies</h4>
        {/* Add dropdown or other logic here */}
      </div>

      <div className={styles.section}>
        <h4>Purchase type</h4>
        {/* Add dropdown or other logic here */}
      </div>

      <div className={styles.section}>
        <h4>Amenities</h4>
        <button className={styles.clearButton}>Clear</button>
        <div className={styles.options}>
          {["Parking", "Lift", "Power Backup", "Park", "Swimming Pool"].map(
            (amenity) => (
              <button key={amenity} className={styles.option}>
                {amenity}
              </button>
            )
          )}
        </div>
        <button className={styles.moreButton}>+4 more</button>
      </div>

    

      <div className={styles.section}>
        <h4>Furnishing status</h4>
        <button className={styles.option}>unfurnished</button>
        <br />
        <button className={styles.option}>Semifurnished</button>         
     </div>
      <div className={styles.section}>
        <h4>RERA Approved</h4>
        <button className={styles.option}>RERE Approved properties</button>
        <br />
        <button className={styles.option}>RERE Regected Details</button>

      </div>
      </div>
    </div>
  )
}

export default Filter
