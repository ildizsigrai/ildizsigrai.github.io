import React from 'react';
import './szolgaltatasok.css';

function SzolgaltatasComponent() {
  return (
    <div id="szolgaltatasok" className="sz-container" style={{ backgroundImage: 'radial-gradient(circle, #3e8cb8, #c7e6f6)' }}>
      <div>
        <h1 className="sz-header">
          Szolgáltatásaink
        </h1>
        <p className="sz-heading">
        Számunkra az Ön projektje nem csupán egy megoldandó feladat, hanem a közös siker felé
        vezető út fontos mérföldköve! A PROSPERIO-val való együttműködés eredményeként Ön
        egy olyan csapatra talál, amely nem csak a projektet, hanem az üzleti sikerét is szívügyének
        tekinti.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">PÁLYÁZATFIGYELÉS</h5>
        <p className="description">
          A vállalkozás egyedi céljaihoz igazított pályázati lehetőségek keresése.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">PÁLYÁZATÍRÁS</h5>
        <p className="description">
          Ötlettől a támogatói döntésig.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">PROJEKTMENEDZSMENT</h5>
        <p className="description">
          Az első megrendeléstől a fenntartási időszak sikeres zárásáig.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">HITELÜGYINTÉZÉS</h5>
        <p className="description">
          Projektfinanszírozás államilag támogatott, kedvező kamatozású hitellel.
        </p>
      </div>
      <div className="card-container">
        <h5 className="title">TŐKEBEVONÁSI TANÁCSADÁS</h5>
        <p className="description">
          Tőkebevonás adminisztrációja és tárgyalások vezetése.
        </p>
      </div>
    </div>
  );
}

export default SzolgaltatasComponent;
