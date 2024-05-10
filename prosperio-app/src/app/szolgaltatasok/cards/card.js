import React from 'react'; // Make sure 'React' is capitalized

function CardComponent() {
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-auto overflow-hidden rounded-lg">
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-1.svg" className="w-full" alt="Item 1"/>
            <div className="p-4 bg-white">
              <p>Text or description for item 1.</p>
            </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-2.svg" className="w-full" alt="Item 2"/>
            <div className="p-4 bg-white">
              <p>Text or description for item 2.</p>
            </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-3.svg" className="w-full" alt="Item 3"/>
            <div className="p-4 bg-white">
              <p>Text or description for item 3.</p>
            </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-4.svg" className="w-full" alt="Item 4"/>
            <div className="p-4 bg-white">
              <p>Text or description for item 4.</p>
            </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-5.svg" className="w-full" alt="Item 5"/>
            <div className="p-4 bg-white">
              <p>Text or description for item 5.</p>
            </div>
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>
    </div>
  );
}

export default CardComponent;
