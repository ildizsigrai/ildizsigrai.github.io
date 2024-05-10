import HeaderComponent from "./header/header";
import FooterComponent from "./footer/footer";
import HeroComponent from "@/app/hero/hero";
import RolunkComponent from "./rolunk/rolunk";
import BemutatkozasComponent from "./bemutatkozas/bemutatkozas";
import SzolgaltatasComponent from "./szolgaltatasok/szolgaltatasok";
import PalyazatokComponent from "./palyazatok/palyazatok";
import CardComponent from "./szolgaltatasok/cards/card";
import './globals.css';

export default function Home() {
  return (
    <>
      <body>
        <HeaderComponent/>
        <div>
          <HeroComponent/>
        </div>
        <h1>card</h1>
        <CardComponent/>
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
          <PalyazatokComponent/>
        </div>
        <div>
          <FooterComponent/>
        </div>
      </body>
    </>
  );
}
