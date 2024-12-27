import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import the CSS module
import Contact from '../navbar/Contact/Contact';
import SignUpForm from '../SiginIn/SigninForm/SignUpForm';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUPOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  


  // Handle scroll event to apply scrolled class
  useEffect(() => {
    const header = document.getElementById('header');
    const navbarList = document.getElementById('navbar-list');
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add(styles.scrolled);
        navbarList.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
        navbarList.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`${styles.header}`} id="header">
      <Contact/>
        <div className={styles.container}>
          <a href="/" className={styles.logos}>
            <h3>DevCave</h3>
          </a>

          <nav
            id="navbar"
            className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}
          >
            <ul id="navbar-list" className={styles['navbar-list']}>
              <li>
                <Link to="/" className={styles['navbar-link']}>Home</Link>
              </li>
              <li>
              <a href="#" className={styles['navbar-link']}>Property</a>
              </li>
              <li>
              <a href="#" className={styles['navbar-link']}>Loan</a>
              </li>
              <li>
                <a href="#" className={styles['navbar-link']}>Leasing</a>
              </li>
              <li>
                <Link to="/aboutus" className={styles['navbar-link']}>About Us</Link>
              </li>
              <li>
                 <Link to='/Contact' className={styles['navbar-link']}>Contact</Link>
              </li>
            </ul>
            <a href="#" className={`${styles.signUp} ${styles.btn}`}>
              <button onClick={()=>{setIsSignUPOpen(true)}} > SignUp </button>
            </a>
          </nav>
          <button
            className={`${styles['nav-toggle-btn']} ${isMenuOpen ? styles.active : ''}`}
            aria-label="Toggle menu"
            onClick={handleToggleMenu}
          >
            <ion-icon
              name="menu-outline"
              aria-hidden="true"
              className={`${styles['menu-icon']} ${isMenuOpen ? 'hidden' : ''}`}
            ></ion-icon>
          </button>

        </div>
      </header>
      { isSignUpOpen && 
                <div className={styles.signupform}>
                     <SignUpForm onclose={()=>setIsSignUPOpen(false)} />
        </div>
      }
    </div>
  );
};

export default Navbar;
