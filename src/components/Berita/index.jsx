import React from 'react'
import Heading from '../Heading/Index'
import BeritaCard from './Card'
import PrimaryButton from '../Button/PrimaryButton';


const beritaData = [
  {
    image: 'image/berita1.png',
    title: 'Kompetensi di Bidang Data Science',
    description: 'Sebelas dosen bersertifikasi data science dan 16 dosen bersertifikasi associate data science dari  Politeknik Statistika STIS berhasil meraih sertifikasi kompetensi di bidang data science dari Badan Nasional Sertifikasi Profesi (BNSP).',
    link: '#'
  },
  {
    image: 'image/berita1.png',
    title: 'Kompetensi di Bidang Data Science',
    description: 'Sebelas dosen bersertifikasi data science dan 16 dosen bersertifikasi associate data science dari  Politeknik Statistika STIS berhasil meraih sertifikasi kompetensi di bidang data science dari Badan Nasional Sertifikasi Profesi (BNSP).',
    link: '#'
  },
  {
    image: 'image/berita1.png',
    title: 'Kompetensi di Bidang Data Science',
    description: 'Sebelas dosen bersertifikasi data science dan 16 dosen bersertifikasi associate data science dari  Politeknik Statistika STIS berhasil meraih sertifikasi kompetensi di bidang data science dari Badan Nasional Sertifikasi Profesi (BNSP).',
    link: '#'
  },
  // Add more objects as needed
];

function BeritaResume() {
  return (
    <div className='my-[10em] max-w-5xl mx-auto'>
      <Heading text={'Berita'}/>

      <div className='flex md:flex-row justify-evenly mx-auto mt-16 space-x-8 md:space-y-0'>

        {beritaData.map((berita, index) => (
          <BeritaCard
            key={index}
            image={berita.image}
            title={berita.title}
            description={berita.description}
            link={berita.link}
          />
        ))}

      </div>
      
      <div className='flex mx-auto justify-center mt-10'>
        <PrimaryButton text={'Lihat semua'} cta={true} link='/berita'/>
      </div>

    </div>
  )
}

export default BeritaResume