'use client';
import { useState } from 'react';
import { RiArrowUpDoubleFill } from 'react-icons/ri';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  if (typeof window !== 'undefined') {
    // Your client-side code that uses window goes here
    const toggleVisible = () => {
      if (typeof window !== 'undefined') {
        // Client-side-only code
        return;
      }
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 250) {
        setVisible(true);
      } else if (scrolled <= 250) {
        setVisible(false);
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
      <button
        style={{ opacity: visible ? '1' : '0' }}
        className='fixed bottom-5 left-8 rounded-xl bg-secondary p-3 shadow-2xl transition-all duration-1000 ease-in-out hover:bg-primary'
        onClick={scrollToTop}
      >
        <div className='text-white'>
          <RiArrowUpDoubleFill size={30} />
        </div>
      </button>
    );
  }
};
/* const ScrollButton = () => {
  return (
    <button>
      <div className='text-white'>
        <RiArrowUpDoubleFill size={30} />
      </div>
    </button>
  );
}; */
export default ScrollButton;
