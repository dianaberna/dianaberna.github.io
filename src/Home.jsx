import React from 'react'
/* import { LastPosts } from './Blog' */
import { Servizi } from './Servizi'
import { Community } from './Community'
import { Contatti } from './Contatti'
import { Social, SocialLite } from './Social'

const Home = () => {
  return (
    <main>
      <Header />
      <Servizi />
      {/* <LastPosts /> */}
      <Community />
    </main>
  )
}

export default Home

const Header = () => {
  return (
    <header className="mt-14 md:mt-52">
      <p className="text-2xl font-normal md:flex md:text-4xl md:my-2 leading-relaxed">
        Ciao! Sono Diana
      </p>
      <p className="md:flex text-xl md:text-3xl font-light mb-10 leading-relaxed">
        Sviluppatrice web freelance e consulente di accessibilità
      </p>
      <div className="flex flex-row items-center mt-4 justify-start">
        <svg
          aria-hidden={true}
          className="hidden md:flex mr-4 -mt-8"
          width="44"
          height="51"
          viewBox="0 0 44 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.50002 1.5C2.62336 3.93168 0.545707 16.5 4.72315 25.929C6.08586 29.0049 7.94463 32.1275 10.316 34.5374C15.0544 39.3526 21.5953 38.9766 27.8394 38.9766"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M27.1823 32.1426C30.5195 33.5331 33.6207 35.0598 37.2436 35.6326C38.8466 35.8861 43.7 36.2168 42.0771 36.2168C41.4303 36.2168 40.8186 36.4543 40.2518 36.7498C38.0548 37.895 35.9021 39.5296 34.1551 41.2766C32.7152 42.7166 31.5818 44.4661 30.7526 46.3219C30.4652 46.9652 29.9422 47.8389 29.9422 48.5707"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <div id="contatti">
          <Contatti />
        </div>
        <svg
          aria-hidden={true}
          className="hidden md:flex"
          width="56"
          height="49"
          viewBox="0 0 56 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19.6173C18.9626 15.6547 23.5006 12.5269 28.4642 10"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M16.9235 26.67H40.6461"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M16.4213 36.6403C21.7933 37.8066 27.1667 38.8357 32.5668 39.8465"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="my-20">
        <SocialLite color="black" />
      </div>
    </header>
  )
}
