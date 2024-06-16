"use client";

import React, { useRef } from 'react';
import 'tailwindcss/tailwind.css';
import './card.scss';

const CardComponent = () => {
  const scrollContainerRef = useRef(null);

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1692632477775-8a8f4410d425?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'FELDOLGOZÓ ÜZEMEK FEJLESZTESEINEK TÁMOGATASA',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    link: 'https://github.com/ildizsigrai/prosperio-project/raw/main/KAP%20E%CC%81LIP%20osszefoglalo%20(NAGY)%20TD.jpg'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1626106459594-49b7f4030314?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'FELDOLGOZÓ ÜZEMEK FEJLESZTESEINEK KOMPLEX TÁMOGATASA',
    description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
    link: 'https://github.com/ildizsigrai/prosperio-project/raw/main/KAP%20E%CC%81LIP%20osszefoglalo%20(NAGY)%20TD.jpg'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'ÁLLATTARTÓ TELEPEK FEJLESZTÉSÉNEK TÁMOGATÁSA',
    description: 'Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.',
    link: 'https://github.com/ildizsigrai/prosperio-project/raw/main/KAP%20A%CC%81TK%20o%CC%88sszefoglalo%CC%81%20(NAGY)%20GSZ.jpg'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1516501312919-d0cb0b7b60b8?q=80&w=2804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'MUNKÁSSZÁLLÁSOK A VERSENYSZFERABAN',
    description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
    link: 'https://github.com/ildizsigrai/prosperio-project/raw/main/Munka%CC%81ssza%CC%81lla%CC%81sok%20a%20versenyszfe%CC%81ra%CC%81ban.jpg'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1634117622592-114e3024ff27?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'KKV Technológia Plusz Hitelprogram',
    description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
    link: 'https://github.com/ildizsigrai/prosperio-project/raw/main/KKV_HITEL.jpg'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'KERTÉSZETI ÜVEGHÁZAK, HÚTÓHÁZAK, POST-HARVEST FEJLESZTÉSEK TÁMOGATÁSA',
    description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
    link: 'https://github.com/ildizsigrai/prosperio-project/raw/main/Kerte%CC%81szet%20osszefoglalo%20GSZ.jpg'
  }
];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center relative">
      <button onClick={scrollLeft} className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg">
        &lt;
      </button>
      <div ref={scrollContainerRef} className="flex overflow-x-scroll space-x-4 p-4">
        {slides.map(slide => (
          <div id="card-container" key={slide.id} className="flex-none w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center">
              <img className="rounded-t-lg" src={slide.image} alt={slide.title} />
            </div>
            <div className="p-5">
              <a href={slide.link} target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{slide.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{slide.description}</p>
              <a href={slide.link} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
    </div>
  );
};

export default CardComponent;
