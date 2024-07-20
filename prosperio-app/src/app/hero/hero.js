'use client';

import { useState } from 'react';

export default function HeroComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Navbar */}
        {/* Mobile Menu */}
      {/* Hero Content */}
      <div className="absolute inset-x-0 top-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #3e8cb8, #c7e6f6)' }}>
        <div className="flex flex-col justify-center items-center h-full max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              PROSPERIO
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              A PROSPERIO a hazai üzleti tanácsadó szektor friss szereplője. Szakértőink tíz éves
              szakmai tapasztalattal rendelkeznek a vissza nem térítendő támogatásból megvalósult
              beruházások menedzsmentjében az élelmiszeripar, kutatás-fejlesztés, külpiaci növekedés és
              egyéb kiemelt konstrukciók területén.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-mediumBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Tudjon meg rólunk többet!!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
