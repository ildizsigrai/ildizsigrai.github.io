'use client';

import { Navbar } from 'flowbite-react';
import Logo from '../../assets/logo.svg';
import logocopy from '../../../public/logo-copy.svg';

export default function HeaderComponent() {
  return (
    <Navbar fluid rounded className="sticky top-0 z-50 bg-white">
      <Navbar.Brand>
        <img src={logocopy} alt="Prosperio Logo" className="self-center h-8" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
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
