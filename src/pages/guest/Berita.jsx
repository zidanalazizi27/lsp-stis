
// import React, { useState, useEffect } from 'react';
// import GuestLayout from '../layout/GuestLayout';
// import BreadCrumbs from '../../components/Breadcrumbs';
// import TitlePage from '../../components/TitlePage';
// import { ChevronLeft, ChevronRight } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import beritaList from '../../utils/data/berita';

// function Berita() {
//   const links = [
//     { label: 'Beranda', href: '/' },
//     { label: 'Berita', href: null },
//   ];

//   const years = [2024, 2023, 2022]; 
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
//   const [sortBy, setSortBy] = useState('popular'); // Default sorting by popularity
//   const [filteredBeritaList, setFilteredBeritaList] = useState(beritaList);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading delay
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   // Function to handle search input change
//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   // Function to handle year dropdown change
//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   // Function to handle sorting dropdown change
//   const handleSortByChange = (event) => {
//     setSortBy(event.target.value);
//   };

//   // Function to apply filters and sorting
//   const handleApplyFilters = () => {
//     const filteredList = beritaList
//       .filter((berita) => {
//         const matchesSearchTerm = berita.title.toLowerCase().includes(searchTerm.toLowerCase());
//         const matchesYear = selectedYear ? berita.date.includes(selectedYear) : true;
//         return matchesSearchTerm && matchesYear;
//       })
//       .sort((a, b) => {
//         if (sortBy === 'latest') {
//           return new Date(b.date) - new Date(a.date);
//         }
//         // Implement other sorting logic if needed (e.g., by popularity)
//         return 0;
//       });

//     setFilteredBeritaList(filteredList);
//     setCurrentPage(1); // Reset to the first page when filters are applied
//   };

//   // Calculate the displayed berita based on current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentBeritaList = filteredBeritaList.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const totalPages = Math.ceil(filteredBeritaList.length / itemsPerPage);
//   return (
//     <GuestLayout>
//       <BreadCrumbs links={links} />

//       <TitlePage title={'Berita dan Informasi Kegiata'} desc={'Selamat datang di halaman Berita dan Informasi Kegiatan dari Lembaga Sertifikasi Profesi Politeknik Statistika STIS (LSP Polstat STIS). Di sini, Anda dapat menemukan informasi terbaru tentang berita dan kegiatan yang dilakukan oleh LSP Polstat STIS, termasuk pengumuman, acara, dan berbagai informasi penting lainnya.'} />

//       <div className='my-5 max-w-7xl px-5 mx-auto flex'>
//         {/* Filter */}
//         <div className='bg-white h-min text-ternaryBlue font-normal border-2 border-gray-200 rounded-lg shadow-sm p-5 mr-5 flex flex-col space-y-3' style={{ flexBasis: '25%' }}>
//           <h2 className='text-xl font-bold text-primaryOrange text-center mb-2'>Filter Berita</h2>

//           <div id='keywordContainer' className=''>
//             <label className='text-ternaryBlue' htmlFor="keyword">Kata Kunci</label>
//             <input type='text' id='keyword' placeholder='Masukkan kata kunci..' className='block w-full border-gray-300 rounded-md shadow-sm p-2' value={searchTerm} onChange={handleSearchChange} />
//           </div>

//           <div>
//             <label className='text-ternaryBlue' id='tahunContainer' htmlFor="tahun">Tahun</label>
//             <select id='tahun' value={selectedYear} onChange={handleYearChange} className='block w-full border-gray-300 rounded-md shadow-sm p-2'>
//               <option value=''>Pilih Tahun</option>
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label htmlFor="sort">Urutkan Berdasarkan</label>
//             <select id="sort" value={sortBy} onChange={handleSortByChange} className='block w-full border-gray-300 rounded-md shadow-sm mb-5 p-2'>
//               <option value='popular'>Populer</option>
//               <option value='latest'>Terbaru</option>
//             </select>
//           </div>

//           <button
//             className="grid bg-primaryBlue text-white px-4 py-2 rounded-md hover:bg-ternaryBlue transition-colors duration-300 ease-in-out transform transition-transform duration-300 ease-in-out hover:-translate-y-1"
//             type="button"
//             onClick={handleApplyFilters}
//           >
//             Tampilkan
//           </button>

//         </div>

//         {/* List view of Berita */}
//         <div className='pl-5' style={{ flexBasis: '75%' }}>
//           <div className='w-full'>
//             {loading ? (
//               // Skeleton loading
//               <>
//                 {[...Array(5)].map((_, index) => (
//                   <div key={index} className='animate-pulse flex flex-col items-center bg-white border-2 border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl mb-5 h-[15em]'>
//                     <div className='object-cover w-full rounded-t-lg h-48 md:w-48 md:rounded-none md:rounded-s-lg p-6 bg-gray-200' />
//                     <div className='flex flex-col justify-between p-4 leading-normal w-full'>
//                       <div className='h-3 w-1/2 bg-gray-200 rounded mb-2' />
//                       <div className='h-3 w-full bg-gray-200 rounded mb-2' />
//                       <div className='h-3 w-full bg-gray-200 rounded mb-2' />
//                       <div className='flex items-center'>
//                         <div className='h-3 w-24 bg-gray-200 rounded' />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </>
//             ) : (
//               // Render actual Berita items
//               currentBeritaList.map((berita) => (
//                 <Link
//                   key={berita.id}
//                   to={`/berita/detail/${encodeURIComponent(berita.title)}`}
//                   className='flex flex-col items-center bg-white border-2 border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 mb-5 h-[15em]'
//                 >
//                   <img
//                     src={berita.image}
//                     alt={berita.title}
//                     className='object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg p-6'
//                   />
//                   <div className='flex flex-col justify-between p-4 leading-normal'>
//                     <p className='text-primaryOrange text-[12px]'>{berita.date}</p>
//                     <h5 className='my-2 text-2xl font-bold tracking-tight text-ternaryBlue'>{berita.title}</h5>
//                     <p className='mb-3 font-normal text-ternaryBlue text-md'>{berita.description}</p>
//                     <div className='flex items-center'>
//                       <Link to={`/berita/detail/${encodeURIComponent(berita.title)}`} className='text-primaryBlue text-[12px] hover:text-ternaryBlue'>Selengkapnya</Link>
//                     </div>
//                   </div>
//                 </Link>
//               ))
//             )}
//           </div>
          
//           {currentBeritaList.length !== 0 &&
//           <div className='flex justify-end'>
//             <nav aria-label="Page navigation example">
//               <ul className="inline-flex -space-x-px text-sm">
//                 <li>
//                   <button
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-ternaryBlue bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//                   >
//                     <ChevronLeft fontSize='medium' />
//                   </button>
//                 </li>
//                 {[...Array(totalPages)].map((_, index) => (
//                   <li key={index}>
//                     <button
//                       onClick={() => handlePageChange(index + 1)}
//                       className={`flex items-center justify-center px-3 h-8 leading-tight text-ternaryBlue border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === index + 1 ? 'bg-blue-500 bg-opacity-20' : ''}`}
//                     >
//                       {index + 1}
//                     </button>
//                   </li>
//                 ))}
//                 <li>
//                   <button
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className={`flex items-center justify-center px-3 h-8 leading-tight text-ternaryBlue bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
//                   >
//                     <ChevronRight />
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           }
//         </div>

//       </div>
//     </GuestLayout>
//   );

        
// }

// export default Berita;

import React, { useState, useEffect } from 'react';
import GuestLayout from '../layout/GuestLayout';
import BreadCrumbs from '../../components/Breadcrumbs';
import TitlePage from '../../components/TitlePage';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import beritaList from '../../utils/data/berita';
import Chart from 'react-apexcharts';

function Berita() {
  const links = [
    { label: 'Beranda', href: '/' },
    { label: 'Berita', href: null },
  ];

  const years = [2024, 2023, 2022]; // Example years for the dropdown

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // Default sorting by popularity
  const [filteredBeritaList, setFilteredBeritaList] = useState(beritaList);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle year dropdown change
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Function to handle sorting dropdown change
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  // Function to apply filters and sorting
  const handleApplyFilters = () => {
    const filteredList = beritaList
      .filter((berita) => {
        const matchesSearchTerm = berita.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesYear = selectedYear ? berita.date.includes(selectedYear) : true;
        return matchesSearchTerm && matchesYear;
      })
      .sort((a, b) => {
        if (sortBy === 'latest') {
          return new Date(b.date) - new Date(a.date);
        }
        // Implement other sorting logic if needed (e.g., by popularity)
        return 0;
      });

    setFilteredBeritaList(filteredList);
    setCurrentPage(1); // Reset to the first page when filters are applied
  };

  // Calculate the displayed berita based on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBeritaList = filteredBeritaList.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredBeritaList.length / itemsPerPage);

  const chartData = {
    series: [4, 5, 4], 
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Pengumuman', 'Kegiatan', 'Prestasi'],
      dataLabels: {
        enabled: true,
        style: {
          fontSize: 'small',
          colors: ['#333'], 
        },
        background: {
          enabled: true,
          foreColor: '#fff',
          padding: 4,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#fff',
          opacity: 0.9,
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
          }
        },

      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        position: 'bottom',
      },
    },
  };
  


  return (
    <GuestLayout>
      <BreadCrumbs links={links} />

      <TitlePage title={'Berita dan Informasi Kegiata'} desc={'Selamat datang di halaman Berita dan Informasi Kegiatan dari Lembaga Sertifikasi Profesi Politeknik Statistika STIS (LSP Polstat STIS). Di sini, Anda dapat menemukan informasi terbaru tentang berita dan kegiatan yang dilakukan oleh LSP Polstat STIS, termasuk pengumuman, acara, dan berbagai informasi penting lainnya.'} />

      <div className='my-5 max-w-7xl px-5 mx-auto flex'>
        {/* Left Side (Filter + Chart) */}
        <div className='w-1/4'>
          {/* Filter */}
          <div className='bg-white h-min text-ternaryBlue font-normal border-2 border-gray-200 rounded-lg shadow-sm p-5 mb-5 flex flex-col space-y-3'>
            <h2 className='text-xl font-bold text-primaryOrange text-center mb-2'>Filter Berita</h2>

            <div id='keywordContainer' className=''>
              <label className='text-ternaryBlue' htmlFor="keyword">Kata Kunci</label>
              <input type='text' id='keyword' placeholder='Masukkan kata kunci..' className='block w-full border-gray-300 rounded-md shadow-sm p-2' value={searchTerm} onChange={handleSearchChange} />
            </div>

            <div>
              <label className='text-ternaryBlue' id='tahunContainer' htmlFor="tahun">Tahun</label>
              <select id='tahun' value={selectedYear} onChange={handleYearChange} className='block w-full border-gray-300 rounded-md shadow-sm p-2'>
                <option value=''>Pilih Tahun</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="sort">Urutkan Berdasarkan</label>
              <select id="sort" value={sortBy} onChange={handleSortByChange} className='block w-full border-gray-300 rounded-md shadow-sm mb-5 p-2'>
                <option value='popular'>Populer</option>
                <option value='latest'>Terbaru</option>
              </select>
            </div>

            <button
              className="grid bg-primaryBlue text-white px-4 py-2 rounded-md hover:bg-ternaryBlue transition-colors duration-300 ease-in-out transform transition-transform duration-300 ease-in-out hover:-translate-y-1"
              type="button"
              onClick={handleApplyFilters}
            >
              Tampilkan
          </button>
          </div>

          {/* Chart Card */}
          <div className='bg-white text-ternaryBlue font-normal border-2 border-gray-200 rounded-lg shadow-sm p-5'>
            <h2 className='text-xl font-bold text-primaryOrange text-center mb-2'>Kategori Berita</h2>
            {/* Placeholder for chart */}
            <div className='flex items-center justify-center'>
              <Chart
                options={chartData.options}
                series={chartData.series}
                type="donut"
               
              />
            </div>
          </div>
        </div>

        {/* Right Side (List view of Berita) */}
        <div className='pl-5 ml-5 w-3/4'>
          <div className='w-full'>
            {loading ? (
              // Skeleton loading
              <>
                {[...Array(5)].map((_, index) => (
                  <div key={index} className='animate-pulse flex flex-col items-center bg-white border-2 border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl mb-5 h-[15em]'>
                    <div className='object-cover w-full rounded-t-lg h-48 md:w-48 md:rounded-none md:rounded-s-lg p-6 bg-gray-200' />
                    <div className='flex flex-col justify-between p-4 leading-normal w-full'>
                      <div className='h-3 w-1/2 bg-gray-200 rounded mb-2' />
                      <div className='h-3 w-full bg-gray-200 rounded mb-2' />
                      <div className='h-3 w-full bg-gray-200 rounded mb-2' />
                      <div className='flex items-center'>
                        <div className='h-3 w-24 bg-gray-200 rounded' />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : currentBeritaList.length === 0 ? (
              <div className='bg-white flex flex-col space-y-5 mx-auto justify-center items-center h-[18em] mb-5'>
                <img src="/image/not-found.svg" alt="Tidak Ditemukan" width={100} />
                <h1 className='text-center text-2xl text-ternaryBlue'>Berita tidak ditemukan</h1>
              </div>
            ) : (
              // Render actual Berita items
              currentBeritaList.map((berita) => (
                <Link
                  key={berita.id}
                  to={`/berita/detail/${encodeURIComponent(berita.title)}`}
                  className='flex flex-col items-center bg-white border-2 border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 mb-5 h-[15em]'
                >
                  <img
                    src={berita.image}
                    alt={berita.title}
                    className='object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg p-6'
                  />
                  <div className='flex flex-col justify-between p-4 leading-normal'>
                    <p className='text-primaryOrange text-[12px]'>{berita.date}</p>
                    <h5 className='my-2 text-2xl font-bold tracking-tight text-ternaryBlue'>{berita.title}</h5>
                    <p className='mb-3 font-normal text-ternaryBlue text-md'>{berita.description}</p>
                    <div className='flex items-center'>
                      <Link to={`/berita/detail/${encodeURIComponent(berita.title)}`} className='text-primaryBlue text-[12px] hover:text-ternaryBlue'>Selengkapnya</Link>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          
          {currentBeritaList.length !== 0 &&
          <div className='flex justify-end'>
            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px text-sm">
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-ternaryBlue bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <ChevronLeft fontSize='medium' />
                  </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`flex items-center justify-center px-3 h-8 leading-tight text-ternaryBlue border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === index + 1 ? 'bg-blue-500 bg-opacity-20' : ''}`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center justify-center px-3 h-8 leading-tight text-ternaryBlue bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <ChevronRight />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          }
        </div>

      </div>
    </GuestLayout>
  );

}

export default Berita;
