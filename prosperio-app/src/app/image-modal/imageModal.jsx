import React from 'react';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="relative aspect-w-16 aspect-h-9">
          <img src={imageUrl} alt="Modal" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
