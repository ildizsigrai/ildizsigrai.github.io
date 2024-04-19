import HeaderComponent from "./header/header";
import FooterComponent from "./footer/footer";
import HeroComponent from "@/hero/hero";
import RolunkComponent from "./rolunk/rolunk";
import BemutatkozasComponent from "./bemutatkozas/bemutatkozas";
import SzolgaltatasComponent from "./szolgaltatasok/szolgaltatasok";
 
import './globals.css';

export default function Home() {
  return (
    <>
      <body>
        <HeaderComponent/>
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
          <SzolgaltatasComponent/>
        </div>
        <div>
          <FooterComponent/>
        </div>
      </body>
    </>
  );
}
