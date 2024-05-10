import React from 'react';
import './szolgaltatasok.css';

function SzolgaltatasComponent() {
  return (
    <div className="sz-container" style={{ backgroundImage: 'radial-gradient(circle, #3e8cb8, #c7e6f6)' }}>
      <div>
        <h4 className="sz-header">
          Szolgáltatásaink
        </h4>
        <p className="sz-heading">
        Számunkra az Ön projektje nem csupán egy megoldandó feladat, hanem a közös siker felé
        vezető út fontos mérföldköve! A PROSPERIO-val való együttműködés eredményeként Ön
        egy olyan csapatra talál, amely nem csak a projektet, hanem az üzleti sikerét is szívügyének
        tekinti.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">PÁLYÁZATÍRÁS</h5>
        <p className="description">
          A pályázatírási szolgáltatásunk a projektötlettől a támogatói döntésig tart. Első lépésként
          felmérjük ügyfeleink fejlesztési igényeit, melyek lehetnek akár beruházások, külpiacra jutás,
          kutatás-fejlesztés és megkeressük az ezekhez illeszkedő elérhető pályázati lehetőségeket.
          Kiemelt figyelmet fordítunk arra, hogy megfelelően előkészített, valós piaci igényeken
          alapuló, az adott pályázati felhíváshoz teljes mértékben illeszkedő projektötletek kerüljenek
          benyújtásra. A pályázati forrásból megvalósuló fejlesztések esetében a támogatás
          odaítélése csak az első lépcsőfok. Ahhoz, hogy a megítélt támogatást teljes mértékben le
          lehessen hívni, már a pályázatírási szakaszban gondolni kell arra, hogy fogjuk teljesíteni a
          projekthez kapcsolódó kötelező vállalásokat.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">PROJEKTMENEDZSMENT</h5>
        <p className="description">
          A pozitív támogatói döntések után, annak érdekében, hogy a megítélt támogatást teljes
          mértékben, szabályszerűen le lehessen hívni, projektmenedzsment szolgáltatásunkkal állunk
          ügyfeleink rendelkezésére. Ennek keretén belül szakértőink végig kísérik a projektek
          megvalósítását és szakmai támogatást nyújtanak a támogatás szabályszerű
          elszámolásában, az esetleges műszaki-szakmai tartalom változások bejelentésében,
          valamint részt vesznek a helyszíni ellenőrzéseken is. Hiszünk a folyamatos
          kapcsolattartásban, velünk nem csak a kifizetési kérelmek benyújtása előtt fog egyeztetni.
          Szolgáltatásunk végigkíséri a teljes megvalósítást az első megrendeléstől a fenntartási
          időszak zárásáig.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">HITELÜGYINTÉZÉS</h5>
        <p className="description">
          A vissza nem térítendő támogatások mellett segíteni tudunk egyéb kamattámogatott hitelek
          ügyintézésében is. A konkrét pályázati kiírás után teljeskörű tájékoztatást tudunk adni
          ügyfeleinknek abban, hogy az adott pályázat mellé milyen egyéb források bevonása
          lehetséges a saját forráson kívül úgy, hogy a projektek az elérhető legmagasabb támogatási
          intenzitással rendelkezzenek.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">TŐKEBEVONÁSI TANÁCSADÁS</h5>
        <p className="description">
          A pályázati források nem minden esetben az elérhető legjobb konstrukciók a vállalatok
          növekedésének támogatására. Tanácsadói tevékenységünk keretén belül segíteni tudjuk az
          olyan nagy növekedési potenciállal rendelkező induló vállalkozások tőkebevonását,
          amelyeknek életszakaszukból adódóan fejlesztéseik megvalósításához jobban illeszkedik
          egy tőkebefektető. Ebben az esetben vállaljuk a tőkebevonás teljeskörű menedzsmentjét az
          üzleti-pénzügyi terv elkészítésétől az ügyletek lezárásáig.
        </p>
      </div>
    </div>
  );
}

export default SzolgaltatasComponent;
