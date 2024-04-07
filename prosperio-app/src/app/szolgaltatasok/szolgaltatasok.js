import React from 'react';
import './szolgaltatasok.css'; // Import CSS file

function SzolgaltatasComponent() {
  return (
    <div className="sz-container">
      <div>
        <h4>
          Bemutatkozás
        </h4>
        <p className="heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">Célunk</h5>
        <p className="description">
          Célunk hosszú távú üzleti együttműködések létrehozása, valódi, értékteremtő beruházások
          megvalósulásának menedzsmentje, ügyfélközpontú, agilis szemlélet biztosítása partnereink
          számára.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">Teljeskörű Szolgáltatások Projektfejlesztéshez</h5>
        <p className="description">
          A PROSPERIO-val való együttműködés a projekt ötlettől indul, még a konkrét pályázati felhívások megjelenése előtt.
          Minél korábban kapcsolódunk be egy projekt fejlesztési folyamatába, annál teljeskörűbb szolgáltatást tudunk nyújtani.
          Szakértő csapatunk segíti a szakmai tartalom kidolgozását, lehetséges megvalósítási helyszínek felkutatását,
          valamint tanácsokkal látja el ügyfeleinket a megfelelő tervezők, kivitelezők vagy beszállítók kiválasztásában.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">Ügyfeleink Sikeréért Dolgozunk</h5>
        <p className="description">
          A PROSPERIO nem csak projektkezelő, hanem üzleti sikerpartnere is ügyfeleinek.
          Számunkra az Ön projektje nem csupán egy feladat, hanem a közös siker felé vezető út fontos állomása. 
          Együttműködésünk eredményeként Ön egy olyan csapatra talál, amely nem csupán a projektet, 
          hanem az üzleti sikerét is szívügyének tekinti.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">Szakértelem és Rugalmasság Összefonódása</h5>
        <p className="description">
        A PROSPERIO kiválóan ötvözi szakértelmét és rugalmasságát az ügyfelek igényeinek kielégítése érdekében. 
        Szakértő tanácsadóink felkészültek a legkülönfélébb projektek kezelésére, legyen szó élelmiszeripari beruházásokról, 
        kutatás-fejlesztésről vagy külpiaci növekedés támogatásáról. 
        Rugalmasságunk révén alkalmazkodunk az egyedi projektek sajátosságaihoz, biztosítva a hatékony és eredményes együttműködést.
        </p>
      </div>
    </div>
  );
}

export default SzolgaltatasComponent;
