import React from 'react';
import './BemutatkozasComponent.css';

function BemutatkozasComponent() {
  return (
    <div className="container">
      <div className="heading">
        <h1>RÓLUNK</h1>
      </div>
      <div className="desc-container">
        <p className="b-description">
          A PROSPERIO a hazai üzleti tanácsadó szektor friss szereplője. Szakértőink tíz éves
          szakmai tapasztalattal rendelkeznek a vissza nem térítendő támogatásból megvalósult
          beruházások menedzsmentjében az élelmiszeripar, kutatás-fejlesztés, külpiaci növekedés és
          egyéb kiemelt konstrukciók területén.
        </p>
        <p className="b-description">
          Célunk hosszú távú üzleti együttműködések létrehozása, valódi, értékteremtő beruházások
          megvalósulásának menedzsmentje, ügyfélközpontú, agilis szemlélet biztosítása partnereink
          számára.
        </p>
        <p className="b-description">
          Közös munkánk a projekt ötlettől indul, amit a konkrét pályázati felhívások megjelenése előtt
          is el tudunk kezdeni. Minél hamarabb be tudunk kapcsolódni egy projekt fejlesztési
          folyamatba, annál teljeskörűbb szolgáltatást tudunk nyújtani leendő ügyfeleink részére,
          legyen szó a szakmai tartalom kidolgozásáról, lehetséges megvalósítási helyszínek
          felkutatásáról, vagy tanácsadásról a megfelelő tervező, kivitelező vagy beszállítók
          kiválasztásában.
        </p>
        <p className="b-description">
          Számunkra az Ön projektje nem csupán egy megoldandó feladat, hanem a közös siker felé
          vezető út fontos mérföldköve! A PROSPERIO-val való együttműködés eredményeként Ön
          egy olyan csapatra talál, amely nem csak a projektet, hanem az üzleti sikerét is szívügyének
          tekinti.
        </p>
      </div>
    </div>
  );
}

export default BemutatkozasComponent;
