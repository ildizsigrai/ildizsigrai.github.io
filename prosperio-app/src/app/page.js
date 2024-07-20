import React from 'react';
import HeaderComponent from './header/header';
import FooterComponent from './footer/footer';
import HeroComponent from '@/app/hero/hero';
import RolunkComponent from './rolunk/rolunk';
import BemutatkozasComponent from './bemutatkozas/bemutatkozas';
import SzolgaltatasComponent from './szolgaltatasok/szolgaltatasok';
import PalyazatokComponent from './palyazatok/palyazatok';
import CardComponent from './szolgaltatasok/cards/card';
import ContactComponent from './contact/contact';

import './globals.css';

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <div id="hero">
        <HeroComponent />
      </div>
      <div id="rolunk">
        <RolunkComponent />
      </div>
      <div id="bemutatkozas">
        <BemutatkozasComponent />
      </div>
      <div id="szolgaltatasok">
        <SzolgaltatasComponent />
      </div>
      <div id="palyazatok">
        <PalyazatokComponent />
      </div>
      <div id="cards">
        <CardComponent />
      </div>
      <div id="kapcsolat">
        <ContactComponent />
      </div>
      <div id="">
        <FooterComponent />
      </div>
    </>
  );
}
