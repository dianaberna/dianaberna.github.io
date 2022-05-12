import React from 'react'

import Calendar from './Calendar'
import { Community } from './Community'
import Header from './Header'
import { Servizi } from './Servizi'

const Home = () => {
  return (
    <main>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row">
        <Header />
        <div className="w-1/5"></div>
        <Calendar />
      </div>
      <Servizi />
      <Community />
    </main>
  )
}

export default Home
