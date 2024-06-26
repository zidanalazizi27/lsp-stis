import React from 'react'
import AdminLayout from '../layout/AdminLayout'
import FloatingNavbar from '../../components/FloatingNavbar/Index';
import HistorySertifikasi from '../../components/HistorySertifikasi';
import CardInformationSertif from '../../components/CardInformationSertif';

function DetailSertifikasi() {

  const breadcrumbs = [
    { href: '/admin/sertifikasi', label: "Sertifikasi Saya" },
    { href: null, label: "Detail Sertifikasi" },

  ];

  return (
    <AdminLayout>
      <FloatingNavbar breadcrumbs={breadcrumbs}/>

      
     <div className="p-10 mt-[5em] mx-auto flex  space-x-5">
        <div className='w-2/3'>
          <CardInformationSertif />
        </div>
        <div className='w-1/3'>
          <HistorySertifikasi />
        </div>
      
      </div>
    </AdminLayout>
  )
}

export default DetailSertifikasi