'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
// import Logo from '../../assets/logo.svg'

export default function HeaderComponent() {
    return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        {/* <img src={Logo} alt="Prosperio Logo" className="logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Prosperio </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          Rólunk
        </Navbar.Link>
        <Navbar.Link href="#">Szolgáltatások</Navbar.Link>
        <Navbar.Link href="#">Aktuális pályázatok</Navbar.Link>
        <Navbar.Link href="#">Kapcsolat</Navbar.Link>
      </Navbar.Collapse>
      </Navbar>
  );
}