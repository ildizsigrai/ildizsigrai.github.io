'use client';

import { Navbar } from 'flowbite-react';

export default function HeaderComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Prosperio </span>
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
