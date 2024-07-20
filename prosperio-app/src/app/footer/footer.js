
import React from 'react';
import './footer.css';

function FooterComponent() {
  return (
    <div className="footer-container">
      <footer
        className="bg-mediumBlue text-center text-white dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">

        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- TW Elements section --> */}
            <div className="">
              <h6
                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-4 w-4">
                  <path
                    d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
                Prosperio Kft.
              </h6>

              <li>Minőség és szakértelem</li>
              <li>Ügyfélközpontú, agilis szemlélet</li>
              <li>Személyreszabott megoldások</li>
              <li>Gyors reagálás, rugalmasság</li>
            </div>
            {/* <!-- Products section --> */}
            <div className="">
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Szolgáltatások
              </h6>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200"
                >Pályázatírás</a>
              </p>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200"
                >Projektmenedzsment</a>
              </p>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200"
                >Hitelügyintézés</a>
              </p>
              <p>
                <a className="text-white dark:text-neutral-200"
                >Tőkebevonási tanácsadás</a>
              </p>
            </div>
            {/* <!-- Useful links section --> */}
            <div className="">
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Hasznos linkek
              </h6>
              <p className="mb-4">
              <a href="#rolunk" className="text-white dark:text-neutral-200">
                Rólunk
              </a>
              </p>
              <p className="mb-4">
              <a href="#szolgaltatasok" className="text-white dark:text-neutral-200">
                Szolgáltatások
              </a>
              </p>
            <p className="mb-4">
              <a href="#palyazatok" className="text-white dark:text-neutral-200">
                Aktuális pályázatok
              </a>
            </p>
            <p>
              <a href="#kapcsolat" className="text-white dark:text-neutral-200">
                Kapcsolat
              </a>
            </p>
          </div>
            {/* <!-- Contact section --> */}
            <div>
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Kapcsolat
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <a className="link" href="https://www.google.com/maps?q=47.47222990525714,19.072858580889047" target="_blank" rel="noopener noreferrer">
                  1095 Budapest, Soroksári út 48. 18. ép. 1. em.
                </a>
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a className="link" href="mailto:info@prosperio.hu">info@prosperio.hu</a>
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd" />
                </svg>
                <a className="link" href="tel:+36300982652">+36 30 098 2652</a>
              </p>
            </div>
          </div>
        </div>
        {/* <!--Separator Line--> */}
        <div className="border-t-2 border-neutral-200 dark:border-neutral-500"></div>

        {/* <!--Copyright section--> */}
        <div className="bg-mediumBlue p-6 text-center dark:bg-neutral-700">
          <span>
            © 2024 Copyright:
            A Prosperio Kft honlapja kizárólag tájékoztatási célokat szolgál. 
            A honlap az azt látogatók és az iroda között nem hoz létre megbízási jogviszonyt.
            Ezt a honlapot a XXXX nyilvántartási számon bejegyzett 
            Prosperio Kft tartja fenn az XXXX szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással
            együtt a www.XXX.hu, valamint a www.XXXX.hu honlapon találhatóak.
          </span>
          <p
            className="font-semibold text-white dark:text-neutral-400"
          >COPYRIGHT Prosperio Kft. MINDEN JOG FENNTARTVA.</p>
        </div>
      </footer>
    </div>
  );
}
export default FooterComponent;