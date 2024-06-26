// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import CountUp from 'react-countup';

// function StatisticCard() {
//   const [showCard, setShowCard] = useState(false);
//   const controls = useAnimation();
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShowCard(true);
//       } else {
//         setShowCard(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (showCard) {
//       controls.start({ opacity: 1, y: 0 });
//     } else {
//       controls.start({ opacity: 0, y: 100 });
//     }
//   }, [showCard, controls]);

//   return (
//     <div className="absolute w-full z-40 -mt-[6em]" ref={cardRef}>
//       <motion.div
//         className="bg-white max-w-5xl p-5 flex items-center justify-evenly mx-auto rounded-2xl shadow-md"
//         initial={{ opacity: 0, y: -100 }}
//         animate={controls}
//         transition={{ duration: 0.5 }}
//       >
//         <div className='flex flex-col items-center justify-center space-y-3 '>
//           <motion.img
//                 className='hover:cursor-pointer'
//                 src="/image/skema_sertif.png"
//                 alt="Skema Sertifikat LSP STIS"
//                 whileHover={{ translateY: -5 }}
//                 srcSet=""
//                 width={100}
//           />
//           {showCard && <h5 className='text-center text-4xl text-ternaryBlue font-bold'>
//             <CountUp end={2} duration={2}/>
//           </h5>}
//           <p className='text-center text-xl text-ternaryBlue'>Skema Sertifikat</p>
//         </div>

//         <div className='flex flex-col items-center justify-center space-y-3 '>
//           <motion.img
//                   className='hover:cursor-pointer'
//                   src="/image/asesor.png"
//                   alt="asesor sertif lsp stis"
//                   whileHover={{ translateY: -5 }}
//                   srcSet=""
//                   width={100}
//             />
//           {/* <img src="/image/asesor.png" width={100} alt="asesor sertif lsp stis" /> */}
//           {showCard && <h5 className='text-center text-4xl text-ternaryBlue font-bold'>
//             <CountUp end={20} duration={2}/>
//           </h5>}
//           <p className='text-center text-xl text-ternaryBlue'>Assessor Kompetensi</p>
//         </div>

//         <div className='flex flex-col items-center justify-center space-y-3 '>
//           <motion.img
//                   className='hover:cursor-pointer'
//                   src="/image/pemegang_sertif.png"
//                   alt="pemegang sertif lsp stis"
//                   whileHover={{ translateY: -5 }}
//                   srcSet=""
//                   width={100}
//             />
//           {/* <img src="/image/pemegang_sertif.png" width={100} alt="skema sertif lsp stis" /> */}
//           {showCard && <h5 className='text-center text-4xl text-ternaryBlue font-bold'>
//             <CountUp end={0} duration={2}/>
//           </h5>}
//           <p className='text-center text-xl text-ternaryBlue'>Pemegang Sertifikat</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default StatisticCard;

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CountUp from 'react-countup';

function StatisticCard() {
  const [showCard, setShowCard] = useState(false);
  const controls = useAnimation();
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowCard(true);
      } else {
        setShowCard(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showCard) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [showCard, controls]);

  return (
    <div className="absolute hidden md:block w-full z-40 mt-8 md:-mt-24" ref={cardRef}>
      <motion.div
        className="bg-white w-11/12 max-w-5xl p-5 flex flex-col md:flex-row items-center justify-around mx-auto rounded-2xl shadow-md space-y-6 md:space-y-0"
        initial={{ opacity: 0, y: -100 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center space-y-3">
          <motion.img
            className="hover:cursor-pointer"
            src="/image/skema_sertif.png"
            alt="Skema Sertifikat LSP STIS"
            whileHover={{ translateY: -5 }}
            srcSet=""
            width={100}
          />
          {showCard && (
            <h5 className="text-center text-4xl text-ternaryBlue font-bold">
              <CountUp end={2} duration={2} />
            </h5>
          )}
          <p className="text-center text-xl text-ternaryBlue">Skema Sertifikat</p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-3">
          <motion.img
            className="hover:cursor-pointer"
            src="/image/asesor.png"
            alt="Asesor Sertifikat LSP STIS"
            whileHover={{ translateY: -5 }}
            srcSet=""
            width={100}
          />
          {showCard && (
            <h5 className="text-center text-4xl text-ternaryBlue font-bold">
              <CountUp end={20} duration={2} />
            </h5>
          )}
          <p className="text-center text-xl text-ternaryBlue">Assessor Kompetensi</p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-3">
          <motion.img
            className="hover:cursor-pointer"
            src="/image/pemegang_sertif.png"
            alt="Pemegang Sertifikat LSP STIS"
            whileHover={{ translateY: -5 }}
            srcSet=""
            width={100}
          />
          {showCard && (
            <h5 className="text-center text-4xl text-ternaryBlue font-bold">
              <CountUp end={0} duration={2} />
            </h5>
          )}
          <p className="text-center text-xl text-ternaryBlue">Pemegang Sertifikat</p>
        </div>
      </motion.div>
    </div>
  );
}

export default StatisticCard;
