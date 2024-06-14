"use client";

import React, { useRef } from 'react';
import 'tailwindcss/tailwind.css';
import './card.scss';

const CardComponent = () => {
  const scrollContainerRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1628788835388-415ee2fa9576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1628191139360-4083564d03fd?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80',
      title: 'Scelerisque eleifend donec pretium vulputate sapien.',
      description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1628718120482-07e03fe361dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80',
      title: 'Consectetur purus ut faucibus pulvinar elementum.',
      description: 'Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1628191139360-4083564d03fd?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80',
      title: 'Scelerisque eleifend donec pretium vulputate sapien.',
      description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1628191139360-4083564d03fd?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80',
      title: 'Scelerisque eleifend donec pretium vulputate sapien.',
      description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1628191139360-4083564d03fd?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80',
      title: 'Scelerisque eleifend donec pretium vulputate sapien.',
      description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
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
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{slide.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{slide.description}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
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
