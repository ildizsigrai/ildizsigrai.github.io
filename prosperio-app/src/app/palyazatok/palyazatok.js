import React from 'react';
import "./palyazatok.css"

function PalyazatokComponent() {
  return (
    <div id="palyazatok" className="container">
      <div className="p-heading">
        <h1>Aktuális pályázatok</h1>
      </div>
      <div className="desc-container">
        <p className="b-description">
          A 2024-es év számos lehetőséget kínál az innovatív vállalkozások számára, hogy vissza nem
          térítendő támogatást szerezzenek innovációs projektjeik megvalósításához. A GINOP PLUSZ
          operatív programban 180, az NKFI Hivatal programtratégiájában pedig 85 milliárd forint
          forrás áll rendelkezésre.
        </p>
        <p className="b-description">
          A támogatások a jelentős szellemi hozzáadott értékkel és újdonságtartalommal rendelkező,
          piacilag is hasznosítható termékek, technológiák, és szolgáltatások előállítására
          irányulnak. A pályázatok a 2023-ban elfogadott Neumann János Tervben meghatározott
          fókuszterületeken megvalósuló fejlesztéseket helyezik előtérbe, melyek az alábbiak:
        </p>
        <ul className="list text-mediumBlue">
          <li>
            Az egészséges élet megőrzését szolgáló megelőző, gyógyító és ellátó rendszerek
            támogatása.
          </li>
          <li>
            A gazdaság zöld átmenetének és a körforgásos gazdaság kialakításának támogatása.
          </li>
          <li>
            A gazdaság és társadalom digitális átmenetének támogatása.
          </li>
        </ul>
        <p className="b-description">
          A várhatóan már az első félévben meghirdetésre kerülő pályázatokon KKV-k és
          nagyvállalatok is indulhatnak, az igényelhető támogatás pedig akár a 800 millió forintot is
          elérheti 40-60% közötti támogatási intenzitás mellett az ország egész területén.
        </p>
      </div>
      <div className="p-heading">
        <h1>Miért válasszon minket?</h1>
      </div>
      <div className="desc-container">
        <p className="b-description">
          A kutatás-fejlesztési projektek a beruházási projektekkel ellentétben működési költségek
          (bér-, anyag-, szolgáltatási költségek) elszámolását is lehetővé teszik, azonban ezen
          tevékenységek elszámolhatóságának alátmasztása jelentősen eltér egy eszközbeszerzéstől,
          vagy kivitelezéstől. Ezen pályázatok esetében már a projekt eredményének
          meghatározásánál is alapos körültekintéssel kell eljárni, mivel sok esetben olyan célokat
          tűznek ki a vállalkozások, amelyek nem férnek bele a rendelkezésre álló megvalósítási
          időszakba.
        </p>
        <p className="b-description">
          PROSPERIO szakemberei nagy tapasztalattal rendelkeznek hazai és uniós forrásból
          támogatott kutatás-fejlesztési projektek megvalósításában a KKV, illetve a nagyvállalati
          szektorban is. Számos egyetemmel, kutatóintézettel kapcsolatban állunk, segíteni tudunk a
          kapcsolatépítésben, legyen szó akár konzorciumi együttműködésről vagy csak egy
          szolgáltatás igénybevételéről. Számunkra az Ön projektje nem csupán egy megoldandó
          feladat, hanem a közös siker felé vezető út fontos mérföldköve!
        </p>
      </div>
    </div>
  );
}

export default PalyazatokComponent;