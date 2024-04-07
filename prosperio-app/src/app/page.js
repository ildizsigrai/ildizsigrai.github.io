import FooterComponent from "./footer/footer";
import HeaderComponent from "./header/header";
import HeroComponent from "@/hero/hero";
import RolunkComponent from "./rolunk/rolunk";
import BemutatkozasComponent from "./bemutatkozas/bemutatkozas";
 
import './globals.css';
import { Button } from 'flowbite-react';

export default function Home() {
  return (
    <>
      <body>
        <div>
          <HeaderComponent/>
        </div>
        <div>
          <HeroComponent/>
        </div>
        <div>
          <RolunkComponent/>
        </div>
        <div>
          {/* bemutatkozo */}
          <BemutatkozasComponent/>
        </div>
        <div>
          <FooterComponent/>
        </div>
      </body>
    </>
  );
}
