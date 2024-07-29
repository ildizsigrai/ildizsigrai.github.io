import React from 'react';
import './szolgaltatasok.css';

function SzolgaltatasComponent() {
  return (
    <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">Szolgáltatásaink</h1>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: '0 auto', height: '35px' }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{ fill: 'transparent', strokeWidth: '2', strokeMiterlimit: '10' }}
            />
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: '2', strokeMiterlimit: '10' }}
            />
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: '2', strokeMiterlimit: '10' }}
            />
          </svg>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            A PROSPERIO-nál a projektötlettől kezdve végigkísérjük az egész folyamatot. Szolgáltatásaink
            célja, hogy a lehető legnagyobb értéket teremtsük ügyfeleink számára, melyet már a projekt
            kezdeti szakaszában megalapozzuk. Minél korábban kapcsolódunk be egy projekt
            fejlesztésébe, annál átfogóbb és testreszabottabb szolgáltatást tudunk nyújtani ügyfeleink
            számára. Legyen szó a szakmai tartalom kidolgozásáról, a lehetséges megvalósítási
            helyszínek felkutatásáról, vagy tanácsadásról a legmegfelelőbb tervezők, kivitelezők és
            beszállítók kiválasztásában, minden részletre kiemelt figyelmet fordítunk. Ezáltal biztosítjuk,
            hogy minden projektünk átfogóan kezelve, magas színvonalon és ügyfeleink elvárásainak
            maximálisan megfelelően valósuljon meg.
          </p>
        </header>

        <div className="flex flex-wrap flex-row -mx-4 text-center">
          <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
            <div className="flex-col justify-between min-h-[250px] py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="lightBlue"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">PÁLYÁZATFIGYELÉS</h3>
              <p className="text-gray-500">
                A vállalkozás egyedi céljaihoz igazított pályázati lehetőségek keresése.
              </p>
            </div>
          </div>
          <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
            <div className="flex-col justify-between min-h-[250px] h-fullpy-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              
              <div className="inline-block text-gray-900 mb-4 pt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="lightBlue"
                  className="bi bi-chat-square-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">PÁLYÁZATÍRÁS</h3>
              <p className="text-gray-500">
                Ötlettől a támogatói döntésig.
              </p>
            </div>
          </div>
          <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
            <div className="flex-col justify-between min-h-[250px] py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 card">
              <div className="inline-block text-gray-900 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="lightBlue" class="bi bi-card-checklist" viewBox="0 0 16 16">
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">PROJEKTMENEDZSMENT</h3>
              <p className="text-gray-500">
                Az első megrendeléstől a fenntartási időszak sikeres zárásáig.
              </p>
            </div>
          </div>
          <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="lightBlue" className="bi bi-wallet2" viewBox="0 0 16 16">
                  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">HITELÜGYINTÉZÉS</h3>
              <p className="text-gray-500">Projektfinanszírozás államilag támogatott, kedvező kamatozású hitellel.</p>
            </div>
          </div>
          <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="lightBlue" class="bi bi-funnel" viewBox="0 0 16 16">
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">TŐKEBEVONÁSI TANÁCSADÁS</h3>
              <p className="text-gray-500">Tőkebevonás adminisztrációja és tárgyalások vezetése.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SzolgaltatasComponent;
