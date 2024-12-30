import React,{useState} from 'react'
import styles from './hero.module.css';

function hero() {
  const [activeButton, setActiveButton] = useState('buy'); // Default is 'buy'

  return (
    <div className={styles.PropertyHero}>
      <div className={styles.Property_Banner}>

      </div>
      <div className={styles.content}>
      <h1>Find Your Dream Home Today</h1>
      <p>Discover a wide range of properties tailored to your needs, from cozy apartments to luxurious villas. Start your journey to a better living experience with us.</p>
       <div className={styles.buttons}>
         <button  className={`${styles.button} ${
          activeButton === 'buy' ? styles.active : ''
        }`}
        onClick={() => setActiveButton('buy')} >Buy</button>
         <button   className={`${styles.button} ${
          activeButton === 'sell' ? styles.active : ''
        }`}
        onClick={() => setActiveButton('sell')} >Sell</button>
       </div>
      </div>
       </div>
  )
}

export default hero
