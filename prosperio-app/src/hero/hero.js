// HeroComponent.js

'use client';
// HeroComponent.js

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


export default function HeroComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Navbar */}
        {/* Mobile Menu */}
      {/* Hero Content */}
      <div className="absolute inset-x-0 top-0 w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
        <div className="flex flex-col justify-center items-center h-full max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              PROSPERIO PROSPERIO PROSPERIO
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius ante suscipit nibh faucibus consequat. Integer vel varius risus. Ut eget nisi ullamcorper, convallis lectus at, ornare eros. Fusce augue ipsum, placerat a leo et, pretium accumsan mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec a arcu quis turpis mattis semper id eget orci. Nullam mattis sem volutpat eros cursus, a feugiat nulla sagittis. Suspendisse porttitor at libero luctus convallis. Fusce ac nisi viverra quam blandit lacinia ac ut massa. Cras euismod odio eget magna dignissim vestibulum. Sed semper luctus tellus. Vivamus interdum vestibulum aliquam. Nulla ullamcorper a purus ac aliquam. Duis eu enim tortor.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Tudjon meg rólunk többet!
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
