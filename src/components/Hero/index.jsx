import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import PrimaryButton from '../Button/PrimaryButton';
import Typed from 'typed.js';


const HeroSection = () => {

  const el = React.useRef(null);
  const [backgroundPositionY, setBackgroundPositionY] = useState(0);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Lembaga Sertifikasi Profesi', 'LSP Politeknik Statistika STIS'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setBackgroundPositionY(scrollPosition * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="hero relative bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/image/gedung.jpg')",
        backgroundPositionY,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: 'calc(100vh + 100px)'
      }}
      id="hero"
    >
      <div className="absolute inset-0"></div>

      <div className="absolute inset-0 flex items-center bg-gradient-hero opacity-90 justify-center">
        <div
          className="flex flex-col items-center space-y-8 text-center text-white cta"
          style={{ marginTop: '' }}
        >
          <div className="flex flex-col items-center">
            <div className='flex flex-col justify-between space-y-2 mb-10'>
              <h1 className="text-4xl md:text-[72px] font-bold">   <span ref={el} /></h1>
            </div>
            <p className="text-lg md:text-[1.5em] w-3/4 mb-20">
              Lembaga Sertifikasi Politeknik (LSP) Politeknik Statistika STIS adalah lembaga sertifikasi profesi pihak kesatu lembaga pendidikan dan pelatihan untuk melaksanakan sertifikasi kompetensi di bidang ilmu statistika dan sains data.
            </p>
            <PrimaryButton text={'Selengkapnya'} cta={true} link='/sertifikasi'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
