'use client';

import React, { useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';
import './card.scss';

import KAP_ELIP from '../../../assets/pdf/KAP_ELIP.jpg';
import KAP_ELIP_k from '../../../assets/pdf/KAP_ELIP_k.jpg';
import KAP_ATK from '../../../assets/pdf/KAP_ATK.jpg';
import Munkasz from '../../../assets/pdf/Munkasz.jpg';
import KKV_HITEL from '../../../assets/pdf/KKV_HITEL.jpg';
import Kerteszet from '../../../assets/pdf/Kerteszet.jpg';

const CardComponent = () => {
  
  const scrollContainerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1692632477775-8a8f4410d425?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'FELDOLGOZÓ ÜZEMEK FEJLESZTESEINEK TÁMOGATASA',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      link: KAP_ELIP
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1626106459594-49b7f4030314?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'FELDOLGOZÓ ÜZEMEK FEJLESZTESEINEK KOMPLEX TÁMOGATASA',
      description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
      link: KAP_ELIP_k
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'ÁLLATTARTÓ TELEPEK FEJLESZTÉSÉNEK TÁMOGATÁSA',
      description: 'Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.',
      link: KAP_ATK
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1516501312919-d0cb0b7b60b8?q=80&w=2804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'MUNKÁSSZÁLLÁSOK A VERSENYSZFERABAN',
      description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
      link: Munkasz
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1634117622592-114e3024ff27?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'KKV Technológia Plusz Hitelprogram',
      description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
      link: KKV_HITEL
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'KERTÉSZETI ÜVEGHÁZAK, HÚTÓHÁZAK, POST-HARVEST FEJLESZTÉSEK TÁMOGATÁSA',
      description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
      link: Kerteszet
    }
  ];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const openImageModal = (image, e) => {
    e.preventDefault(); // Prevent the default behavior (following the link)
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex items-center relative">
      <button onClick={scrollLeft} className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg">
        &lt;
      </button>
      <div ref={scrollContainerRef} className="flex overflow-x-scroll space-x-4 p-4">
        {slides.map(slide => (
          <div id='card-container' key={slide.id} className="flex-none w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg cursor-pointer"
                src={slide.image}
                alt={slide.title}
              />
            </div>
            <div className="p-5">
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{slide.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{slide.description}</p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-mediumBlue rounded-lg hover:bg-mediumBlue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => openImageModal(slide.link.src, e)}
              >
                Tudjon meg többet!
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <button onClick={scrollRight} className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg">
        &gt;
      </button>

      {/* Modal */}
      {selectedImage && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="overflow-auto max-h-screen py-8 px-4">
            <img src={selectedImage} alt="Enlarged" className="max-w-full" />
          </div>
          <button onClick={closeImageModal} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
            <svg className="w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    )}
    </div>
    );
};

export default CardComponent;
