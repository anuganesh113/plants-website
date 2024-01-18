import './App.css';
import card1 from './img/card1.png'
import card2 from './img/card2.png'
import card3 from './img/card3.png';
import card4 from './img/card4.png'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { useState } from 'react';
import Home from './Home';
import About from './About';
import Questions from './Questions';
import Products from './Products';
import Steps from './Steps';
import Contact from './Contact';


function App() {
  // useScrollReveal();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <div className="App"> 
 {/* Header */}
 <Fade>
 <header className="header" id="header">
  <nav className="nav container">
    <a href="#" className="nav__logo">
      <i className="ri-leaf-line nav__logo-icon" /> Plantex
    </a>
    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#home" className="nav__link active-link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#products" className="nav__link">
            Products
          </a>
        </li>
        <li className="nav__item">
          <a href="#faqs" className="nav__link">
            FAQs
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            Contact Us
          </a>
        </li>
      </ul>
      <div className="nav__close" id="nav-close">
        <i className="ri-close-line" />
      </div>
    </div>
    <div className="nav__btns">
      {/* Theme change button */}
      <i className="ri-moon-line change-theme" id="theme-button" onClick={toggleDarkMode} />
      <div className="nav__toggle" id="nav-toggle">
        <i className="ri-menu-line" />
      </div>
    </div>
  </nav>
</header>
 </Fade>

{/* Main */}
<main className="main">
  {/*==================== HOME ====================*/}
  <Fade >
    <Home />
  </Fade>
  {/*==================== ABOUT ====================*/}
  <Slide up>
    <About />
  </Slide>
  {/*==================== STEPS ====================*/}
  <Slide up>
    <Steps />
  </Slide>
  {/*==================== PRODUCTS ====================*/}
  <Slide up>
    <Products />
  </Slide>
  {/*==================== QUESTIONS ====================*/}
  <Slide up>
    <Questions />
  </Slide>
  {/*==================== CONTACT ====================*/}
  <Slide up>
    <Contact />
  </Slide>
</main>

   {/* FOOTER */}
   <Fade>
   <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            <i className="ri-leaf-line footer__logo-icon" /> Plantex
          </a>
          <h3 className="footer__title">
            Subscribe to our newsletter <br /> to stay update
          </h3>
          <div className="footer__subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer__input"
            />
            <button className="button button--flex footer__button">
              Subsribe
              <i className="ri-arrow-right-up-line button__icon" />
            </button>
          </div>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Our Address</h3>
          <ul className="footer__data">
            <li className="footer__information">1234 - Peru</li>
            <li className="footer__information">La Libertad - 43210</li>
            <li className="footer__information">123-456-789</li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Contact Us</h3>
          <ul className="footer__data">
            <li className="footer__information">+999 888 777</li>
            <div className="footer__social">
              <a href="https://www.facebook.com/" className="footer__social-link">
                <i className="ri-facebook-fill" />
              </a>
              <a href="https://www.instagram.com/" className="footer__social-link">
                <i className="ri-instagram-line" />
              </a>
              <a href="https://twitter.com/" className="footer__social-link">
                <i className="ri-twitter-fill" />
              </a>
            </div>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">We accept all credit cards</h3>
          <div className="footer__cards">
            <img src={card1} alt="" className="footer__card" />
            <img src={card2} alt="" className="footer__card" />
            <img src={card3} alt="" className="footer__card" />
            <img src={card4} alt="" className="footer__card" />
          </div>
        </div>
      </div>
      <p className="footer__copy">© Bedimcode. All rigths reserved</p>
    </footer>
   </Fade>

    </div>
      </div>
  );
}

export default App;
