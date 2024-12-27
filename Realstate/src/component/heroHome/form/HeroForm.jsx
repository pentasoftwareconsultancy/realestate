import React from 'react';
import styles from './HeroForm.module.css'; // Import modular CSS
import { useNavigate } from "react-router-dom";


function HeroForm() {  
  const navigate = useNavigate();

  const serchHandlar=()=>{
       navigate("/property");

  }
  return (
    <div className={styles.heroFormWrapper}>
      <div className={styles.formTab}>
        <button className={styles.tabBtn} data-tab-btn>Buy</button>
        <button className={styles.tabBtn} data-tab-btn>Sell</button>
        <button className={styles.tabBtn} data-tab-btn>Rent</button>
      </div>

      <form action="" className={styles.heroForm}>
        <div className={styles.inputWrapper}>
          <label htmlFor="search" className={styles.inputLabel}>Search :*</label>
          <div className={styles.searchBox}>
            <input 
              type="search" 
              name="search" 
              id="search" 
              placeholder="   Search your home" 
              required 
              className={styles.inputField} 
            />
            <ion-icon name="search-outline" className={styles.searchIcon}></ion-icon>
          </div>
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="category" className={styles.inputLabel}>Select Categories:</label>
          <select name="category" id="category" className={styles.dropdownList}>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="offices">Offices</option>
            <option value="townhome">Townhome</option>
          </select>
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="min-price" className={styles.inputLabel}>Min Price :</label>
          <select name="min-price" id="min-price" className={styles.dropdownList}>
            <option value="min price">Min Price</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
            <option value="5000">5000</option>
            <option value="6000">6000</option>
          </select>
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="max-price" className={styles.inputLabel}>Max Price :</label>
          <select name="max-price" id="max-price" className={styles.dropdownList}>
            <option value="max price">Max Price</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
            <option value="5000">5000</option>
            <option value="6000">6000</option>
          </select>
        </div>

        <button type="submit" onClick={serchHandlar} className={`${styles.btn} ${styles.btnPrimary}`}>Search now</button>
      </form>
    </div>
  );
}

export default HeroForm;
