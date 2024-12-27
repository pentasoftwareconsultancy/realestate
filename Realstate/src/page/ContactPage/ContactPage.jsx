import React from 'react'
import styles from './ContactPage.module.css';
import Contact from '../../component/contact/Contact';
import Footer from '../footer/Footer';
import ContactHero from '../../component/contact/ContactHero/ContactHero';
import Map from '../../component/contact/Map/Map';
import ContactForm from '../../component/contact/FormContact/ContactForm';

function ContactPage() {
  return (
    <div className={styles.ContactPage}>
      <br/>
       <ContactHero/>
       <Map/>
       <ContactForm/>
       <Contact/>
      <Footer/>
    </div>
  )
}

export default ContactPage
