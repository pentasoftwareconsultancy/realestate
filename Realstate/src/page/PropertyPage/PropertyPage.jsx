import React from 'react'
import styles from "./PropertyPage.module.css";
import Property from '../../component/Property/property/Property';
import HeroForm from '../../component/heroHome/form/HeroForm';
import Footer from '../../component/footer/Footer.jsx';

function PropertyPage() {
  return (
    <div className={styles.PropertyPage}>
        <div className={styles.heroform}>
        <HeroForm/>
        </div>
        <Property/>
        <br />
        <Footer/>
    </div>
  )
}

export default PropertyPage
