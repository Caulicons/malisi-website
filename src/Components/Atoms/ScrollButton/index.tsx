'use client';
import { useEffect, useState } from 'react';
import { RiArrowUpDoubleFill } from 'react-icons/ri';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      scrolled > 250 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      style={{ opacity: visible ? '1' : '0' }}
      className='fixed bottom-3 left-3 z-10 rounded-xl bg-green-800 p-3 text-white shadow-2xl transition-all duration-1000 ease-in-out  hover:bg-green-900 tablet:bottom-4 tablet:left-5 desktop:left-8'
      onClick={scrollToTop}
      aria-label='Scroll para o topo da página.'
    >
      <RiArrowUpDoubleFill size={30} />
    </button>
  );
};

export default ScrollButton;
