import React from 'react'
import Calendar from '../Calendar'
import Community from '../Community'
import Header from '../Header'
import Services from '../Services'

const Main = () => {
  return (
    <main>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row">
        <Header />
        <div className="w-1/5"></div>
        {/* <Calendar /> */}
      </div>
      <Services />
      <Community />
    </main>
  )
}

export default Main
