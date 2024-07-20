'use client';

import { Navbar } from 'flowbite-react';
import Logo from '../../assets/logo.svg';

export default function HeaderComponent() {
  return (
    <Navbar fluid rounded className="sticky top-0 z-50 bg-white">
      <Navbar.Brand>
        <div className="flex items-center space-x-2">
          <Logo className="h-10 w-15 text-blue-500" />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Főoldal
        </Navbar.Link>
        <Navbar.Link>
          <a href="#rolunk">Rólunk</a>
        </Navbar.Link>
        <Navbar.Link>
          <a href="#szolgaltatasok">Szolgáltatások</a>
        </Navbar.Link>
        <Navbar.Link>
          <a href="#palyazatok">Aktuális pályázatok</a>
        </Navbar.Link>
        <Navbar.Link>
          <a href="#kapcsolat">Kapcsolat</a>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
