import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import TopLoader from '../../components/TopLoader';
import KeyboardDoubleArrowUpTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowUpTwoTone';
import { motion, useScroll } from "framer-motion";

function GuestLayout({ children }) {
  const [progress, setProgress] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const { scrollYProgress } = useScroll();


  useEffect(() => {
    const fetchData = async () => {
      setProgress(20);
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setProgress(100);
      } catch (error) {
        setProgress(0);
      }
    };

    fetchData();

    const handleScroll = () => {
   
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };


    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='relative'>
      
      <TopLoader progress={progress} setProgress={setProgress} />
      <Navbar />
      <div className="content">
        {children}
      </div>

      {showScrollToTop && (
        <motion.div 
          className='fixed right-7 bottom-10 bg-primaryOrange rounded-full p-1 z-50 hover:cursor-pointer' 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ translateY: -8 }}
          onClick={scrollToTop}
        >
          <KeyboardDoubleArrowUpTwoToneIcon className='text-white' fontSize='large' />
        </motion.div>
      )}

      <Footer />
      
    </div>
  );
}

export default GuestLayout;
