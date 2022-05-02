import React from 'react'

export const About = () => {
  return (
    <main className="mt-20">
      <div className="text-base md:text-lg text-black mt-2">
        <div className="my-10">
          <h1>Chi sono</h1>
          <p>
            Sono una frontend developer freelance, UI/UX designer e community
            manager. Nel tempo libero mi piace creare contenuti e fare
            streaming. Grazie alle community ho scoperto la mia passione per il
            networking e l'accessibilità.{' '}
          </p>
          <p>
            La curiosità, la creativa e la tenacia sono le mie armi vincenti.{' '}
          </p>
        </div>
        <h2>La mia storia</h2>
        <div>
          <img
            className="w-1/3 float-right m-2 border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0)]"
            src="./assets/foto.png"
            alt=""
          />
          <p>
            Ho iniziato a sviluppare a 13 anni da autodidatta con il linguaggio
            FORTRAN.
          </p>
          <p>
            Ho iniziato ad approfondire questi argomenti frequentando il corso
            di informatica dell'ITIS Montani dove ho avuto modo di studiare{' '}
            <span className="underline decoration-pink-500 decoration-4">
              C/C++, PHP, COBOL, PASCAL, SQL, Assembly e HTML/CSS
            </span>
            . E' da questo momento che scopro la passione per il design e il
            frontend, infatti mi avvicino alla grafica con{' '}
            <span className="underline decoration-sky-500 decoration-4">
              Photoshop/Illustrator
            </span>{' '}
            e al{' '}
            <span className="underline decoration-sky-500 decoration-4">
              web design
            </span>
            .
          </p>
          <p>
            Nel percorso universitario ho studiato linguaggi come{' '}
            <span className="underline decoration-pink-500 decoration-4">
              C/C++, Javascript, Assembly
            </span>
            .
          </p>
          <p>
            Sempre negli anni dell'università ho approfondito la{' '}
            <span className="underline decoration-sky-500 decoration-4">
              teoria UI/UX
            </span>
            , ho studiato i preprocessori{' '}
            <span className="underline decoration-pink-500 decoration-4">
              SASS/SCSS
            </span>
            , mi sono aggiornata a Javascript ES6 e mi sono innamorata del
            JAMStack. Negli anni successiva ho iniziato ad approfondire i
            framework Js trovando in{' '}
            <span className="underline decoration-pink-500 decoration-4">
              React
            </span>{' '}
            un ottimo alleato.
          </p>
          <p>
            Oltre alle hard skills ho iniziato a coltivare in modo attivo le mie
            soft skills, infatti grazie alla{' '}
            <span className="underline decoration-green-500 decoration-4">
              gestione della community
            </span>{' '}
            GDG Pisa ho imparato cosa vuol dire gestire un team e rispettare le
            scadenza prestabilite in "fase di progettazione". Nell'arco degli
            anni ho migliorato le mie doti di{' '}
            <span className="underline decoration-green-500 decoration-4">
              public speaking
            </span>
            , e tutt'ora ci sto lavorando, portando talk a diversi eventi in
            giro per l'Italia.
          </p>
          <p>
            Dal 2021 ho iniziato a parlare correttamente davanti ad uno schermo
            senza sentirmi in imbarazzo e a saper{' '}
            <span className="underline decoration-green-500 decoration-4">
              gestire eventi in streaming
            </span>
            .
          </p>
          <p>
            Negli anni mi sono avvicinata anche al design di interfacce e all’
            <span className="underline decoration-sky-500 decoration-4">
              accessibilità web
            </span>
            , in quanto parte della riuscita di un buon sito sono anche elementi
            come la UI e la UX, in particolare di quanto sia inlcusiva e
            accessibile l’esperienza utente.
          </p>
          <p>
            Mi piace poter essere d’ispirazione alle ragazze che si avvicinano
            al mondo STEM e per questo sono{' '}
            <span className="underline decoration-green-500 decoration-4">
              WomenTechmakers
            </span>{' '}
            Ambassador dal 2017.{' '}
          </p>
        </div>
      </div>
      <div className="text-base md:text-lg text-black mt-2">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-primary text-black">
          Interviste
        </h3>
      </div>
      <div className="text-base md:text-lg text-black mt-2">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-primary text-black">
          Esperienze lavorative
        </h3>
        <ul className="list-disc ml-5">
          <li>
            ( 2021 - in corso ) <b>TomorrowDevs</b> - Community Manager
          </li>
          <li>
            ( 2020 - in corso ) <b>Freelance</b> - Web developer, UI designer
            (Collaborazioni con: Kepler Informatica, Moncler, MadProduction)
          </li>
          <li>
            ( 2020 ) <b>Zerynth</b> sede Pisa (PI) - Technical Marketing,
            Content marketing, Copywriting
          </li>
          <li>
            ( 2018 - 2019 ) <b>Libraccio</b> sede Pisa - Commessa
          </li>
          <li>
            ( 2012 - 2018 ) <b>Ecopoint S.r.l.</b> sede Fermo (FM) - Sviluppo
            sito web vetrina, Sviluppo e-commerce da analisi di mercato dei
            competitor del settore VMC e mancanza di negozi online di filtri per
            tali macchine, Ottimizzazione SEO, Grafiche per volantini, carta
            intestata, blocchi appunti, bigliettini da visita
          </li>
        </ul>
      </div>
      <div className="text-base md:text-lg text-black mt-2">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-primary text-black">
          Esperienze di community
        </h3>
        <ul className="list-disc ml-5">
          <li>
            ( 2022 ) MC Devcast Serie Frontend di Codemotion{' '}
            <a href="/">"Frontend, al di là di JavaScript"</a>
          </li>
          <li>
            ( 2021 ) MC Devcast Serie Frontend di Codemotion{' '}
            <a href="https://live.codemotion.com/devcast/la-compagnia-del-frontend">
              "La compagnia del frontend"
            </a>
          </li>
          <li>
            ( 2021 ) <b>dianacodes</b> - Community Manager
          </li>
          <li>
            ( 2017 - in corso ){' '}
            <a
              href="https://www.womentechmakers.com/"
              target="_blank"
              className="font-bold"
              rel="noreferrer"
            >
              <b>WomenTechmakers</b>
            </a>{' '}
            - Ambassador
          </li>
          <li>
            ( 2016 - 2020 ){' '}
            <a
              href="https://gdgpisa.it/"
              target="_blank"
              className="font-bold"
              rel="noreferrer"
            >
              <b>GDG Pisa</b>
            </a>{' '}
            - Community Manager
          </li>
          <li>
            ( 2019 ){' '}
            <a
              href="https://2019.devfest.gdgpisa.it/"
              target="_blank"
              className="font-bold"
              rel="noreferrer"
            >
              DevFest Pisa 2019
            </a>{' '}
            Organizer
          </li>
          <li>
            ( 2018 ){' '}
            <a
              href="https://2018.devfest.gdgpisa.it/"
              target="_blank"
              className="font-bold"
              rel="noreferrer"
            >
              DevFest Pisa 0.1
            </a>{' '}
            Organizer
          </li>
        </ul>
      </div>
      <div className="text-base md:text-lg text-black mt-2">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-primary text-black">
          Talks
        </h3>
        <ul className="list-disc ml-5">
          <li>
            ( 02/2022 ) “Developer e accessibilità sono nemici per natura?”
            UGIdotNET{' '}
            <a
              className="underline text-sm font-bold"
              href="https://www.youtube.com/watch?v=ZZ4J7Zx6MK4"
            >
              guarda il video
            </a>{' '}
            <a href="/" className="underline text-sm font-bold">
              scarica le slide
            </a>
          </li>
          <li>
            ( 12/2021 ) “Vue.js e l'accessibilità: il Dom virtuale per
            affrontare un problema reale” GDG Cloud Torino
          </li>
          <li>
            Codemotion 2021
            <a href="https://talks.codemotion.com/tutte-le-strade-che-passano-dal-frontend">
              Guarda il video dell'evento
            </a>
          </li>
          <li>( 12/2019 ) “Come tenere un talk (con workshop) v4” GDG Pisa</li>
          <li>( 11/2019 ) “Come tenere un talk v3” DevFest Urbino</li>
          <li>( 11/2019 ) “Come tenere un talk v2” DevFest Pescara</li>
          <li>( 11/2019 ) “L’importanza della community” Linux Day Pisa</li>
          <li>( 10/2019 ) “WebDev for Dummies” GDG Pisa</li>
          <li>
            ( 09/2019 ) “Autopromozione” WTM Pisa Meetup (con Chiara Corrado)
          </li>
          <li>( 05/2019 ) “Stories, advices and a pinch of bits” GDG Torino</li>
          <li>( 04/2019 ) “Come tenere un talk v1” DevFest Pisa 1.0</li>
          <li>( 2018 ) “Bootstrap: from Zero to Hero” GDG Genova</li>
        </ul>
      </div>
      <div className="text-base md:text-lg text-black mt-2">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-primary text-black">
          Educazione
        </h3>
        <ul className="list-disc ml-5">
          <li>
            ( 2021 ) Laurea triennale in{' '}
            <span className="font-bold">INFORMATICA</span> presso l'
            <span className="font-bold">Università di Camerino</span>{' '}
          </li>
          <li>
            ( 2018 - 2021 ) Laurea triennale in{' '}
            <span className="font-bold">INFORMATICA</span> (non conclusa) presso
            l'<span className="font-bold">Università di Pisa</span> (Esami:
            Ricerca operativa, Architettura degli elaboratori, Logica per la
            programmazione, Progettazione grafica, Algortimica, Progettazione di
            interfacce, Sistemi operativi)
          </li>
          <li>
            ( 2013 - 2018 ) Laurea triennale in{' '}
            <span className="font-bold">INGEGNERIA INFORMATICA</span> (non
            conclusa) presso l'
            <span className="font-bold">Università di Pisa</span> (Esami:
            Analisi 1, Analisi 2, Algebra, Calcolo Numerico, Fisica, Fondamenti
            di Informatica 1, Progettazione Web, Ingegneria del software,
            Elettrotecnica, Basi di dati, Fondamenti di automatica)
          </li>
          <li>
            ( 2009 - 2013 ) Diploma scuola superiore specializzazione{' '}
            <span className="font-bold">INFORMATICA</span> presso{' '}
            <span className="font-bold">ITIS “G. e M. Montani”</span> di Fermo -
            Voto 100/100 - Linguaggi: Assembly, C, COBOL, Javascript, PASCAL,
            PHP, SQL
          </li>
        </ul>
      </div>
    </main>
  )
}
