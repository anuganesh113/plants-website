// useScrollReveal.js
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.your-element-class', {
      // ScrollReveal options
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });

    // Add cleanup logic if necessary
    return () => {
      sr.destroy();
    };
  }, []); // Empty dependency array ensures it runs once after component is mounted

  return null; // You can also return JSX here if needed
};

export default useScrollReveal;
