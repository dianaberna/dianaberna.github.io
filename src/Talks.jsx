import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const Talks = () => {
  return (
    <main className="mt-4 md:mt-20">
      <h1 className="mb-10 md:mb-20">Talks</h1>
      <h2>2022</h2>
      <ul>
        <li></li>
      </ul>
      <h2>2021</h2>
      <ul></ul>
    </main>
  )
}

Talks.propTypes = {
  isAuth: PropTypes.bool,
}
