import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Talks = () => {
  return (
    <main className="mt-4 md:mt-20">
      <h1 className="mb-10 md:mb-20">Talks</h1>
      <h2>2022</h2>
      <ul className="list-disc ml-5">
        <li>( 11/2022 ) DevFest Pescara 2022</li>
        <li>( 10/2022 ) WPC Milano 2022</li>
        <li>( 06/2022 ) WebMarketingFestival 2022 (Rimini)</li>
        <li>( 06/2022 ) PyCon 2022 (Firenze)</li>
        <li>( 05/2022 ) Codemotion Workshop Fest (online)</li>
        <li>( 05/2022 ) Accessibility Days (Milano)</li>
        <li>
          ( 05/2022 ) Meetup "Accessibilità e tecnologia, da che parte{' '}
          cominciare?" MiaPlatform (Online)
        </li>
        <li>
          ( 04/2022 ) CSSDay 2022 (Faenza){' '}
          <a
            href="https://drive.google.com/file/d/12T0pWUNJS1UgPg91ZLkVus6-X4VQD87E/view?usp=sharing"
            className="underline text-sm font-bold"
            target="_blank"
            rel="noreferrer"
          >
            scarica le slide
          </a>
        </li>
        <li>
          ( 03/2022 ) Fuzzy Brains Speaks With: Accessibilità{' '}
          <a
            href="https://www.youtube.com/watch?v=axp41rWKFLo"
            className="underline text-sm font-bold"
            target="_blank"
            rel="noreferrer"
          >
            rivedi la live
          </a>
        </li>
        <li>
          ( 03/2022 ) Donne, vuvuvù - con Juna Salviati e Diana Bernabei{' '}
          <a
            href="https://podcasts.apple.com/gb/podcast/donne-vuvuv%C3%B9-con-juna-salviati-e-diana-bernabei/id1541007956?i=1000553411309"
            className="underline text-sm font-bold"
            target="_blank"
            rel="noreferrer"
          >
            ascolta il podcast
          </a>
        </li>
        <li>
          ( 02/2022 ) “Developer e accessibilità sono nemici per natura?”
          UGIdotNET{' '}
          <a
            className="underline text-sm font-bold"
            href="https://www.youtube.com/watch?v=ZZ4J7Zx6MK4"
            target="_blank"
            rel="noreferrer"
          >
            guarda il video
          </a>{' '}
          <a
            href="/"
            className="underline text-sm font-bold"
            target="_blank"
            rel="noreferrer"
          >
            scarica le slide
          </a>
        </li>
        <li>
          ( 01/2022 ) Accessibilità e PA con Diana Bernabei - Podcast Minotauro{' '}
          <a
            href="https://open.spotify.com/episode/0PvSedaBmoLrN8hiXkcwXN?si=6802da595ff347d7"
            className="underline text-sm font-bold"
            target="_blank"
            rel="noreferrer"
          >
            ascolta il podcast
          </a>
        </li>
      </ul>
      <h2>2021</h2>
      <ul className="list-disc ml-5">
        <li>
          ( 12/2021 ) “Vue.js e l'accessibilità: il Dom virtuale per affrontare
          un problema reale” GDG Cloud Torino{' '}
          <a
            href="https://docs.google.com/presentation/d/1XzwYDj8lUqfi12WHGVGKFEuhbi3SrjqmwiVpR5IDnig/edit?usp=sharing"
            className="underline text-sm font-bold"
            target="_blank"
            rel="noreferrer"
          >
            scarica le slide
          </a>
        </li>
        <li>
          ( 12/2021 ) The Red Code <b>INTERVISTA</b>{' '}
          <a
            href="https://www.theredcode.it/interviste/voglio-diventare-una-web-designer/"
            className="underline text-sm font-bold"
            target="_blank"
            rel="noreferrer"
          >
            leggi l'intervista
          </a>
        </li>
        <li>
          ( 11/2021 ) Codemotion 2021{' '}
          <a
            className="underline text-sm font-bold"
            href="https://talks.codemotion.com/tutte-le-strade-che-passano-dal-frontend"
            target="_blank"
            rel="noreferrer"
          >
            guarda il video dell'evento
          </a>
        </li>
        <li>
          ( 03/2021 ) FUZZY BRAINS SPEAKS WITH: DIANA BERNABEI <b>INTERVISTA</b>
          <a
            href="https://www.fuzzybrains.org/it/eventi/fuzzy-brains-speaks-with-diana-bernabei/"
            target="_blank"
            rel="noreferrer"
            className="underline text-sm font-bold pl-2"
          >
            rivedi l'intervista
          </a>
        </li>
        <li>
          ( 02/2021 ) PointerPodcast episodio 41 <b>INTERVISTA</b>
          <a
            href="https://pointerpodcast.it/p/pointer41-wtm-community-ed-ui-con-diana-bernabei/"
            target="_blank"
            rel="noreferrer"
            className="underline text-sm font-bold pl-2"
          >
            ascolta il podcast
          </a>
        </li>
        <li>
          ( 02/2021 ) PausaCaffè <b>INTERVISTA</b>
          <a
            href="https://pausacaffe.live/puntate/puntata-5-diana-bernabei-donne-stem/"
            target="_blank"
            rel="noreferrer"
            className="underline text-sm font-bold pl-2"
          >
            ascolta il podcast
          </a>
        </li>
      </ul>
      <h2>2019</h2>
      <ul>
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
      </ul>
      <h2>2018</h2>
      <ul>
        <li>( 2018 ) “Bootstrap: from Zero to Hero” GDG Genova</li>
      </ul>
    </main>
  )
}

Talks.propTypes = {
  isAuth: PropTypes.bool,
}

export default Talks
