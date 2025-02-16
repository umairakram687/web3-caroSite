import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  const handleScroll = () => {
    setIsVisible(window.scrollY > 700);
  };

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed z-50 p-3 transition-all duration-500 bg-orange rounded-full shadow-md bottom-[3%] right-[3%] lg:right-[2%] hover:scale-105 focus:outline-none"
          onClick={scrollToTop}
        >
          <img className='w-[30px]' src='/assets/images/scroll.png' alt='Scroll To Top' />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
