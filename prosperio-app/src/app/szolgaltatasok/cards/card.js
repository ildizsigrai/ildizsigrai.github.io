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
      <div className="relative flex items-center justify-center">
        <button onClick={scrollLeft} className="arrow-button left-arrow">
          &lt;
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 p-4 card-container w-screen overflow-hidden"
          style={{ scrollSnapType: 'x mandatory', maxWidth: '100vw' }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-96 flex-shrink-0 bg-white rounded-lg">
              <img className="card-image rounded-t-lg w-full h-64" src={slide.image} alt="" />
              <div className="py-4 px-8">
                <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight card-title">
                  {slide.title}
                </h1>
                <p className="hover:cursor-pointer py-3 text-gray-600 leading-6 card-description">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="arrow-button right-arrow">
          &gt;
        </button>
      </div>
  );
};

export default CardComponent;