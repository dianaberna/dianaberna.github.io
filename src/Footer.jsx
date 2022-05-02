import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Social } from './Social'

export const Footer = () => {
  return (
    <footer className="mt-28 md:mt-28 px-10 py-1 md:py-10 bg-white dark:bg-black text-2 text-gray-500 dark:text-white transition-colors duration-200">
      <div className="flex flex-col">
        <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full"></div>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
          <div className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
            <Navbar />
          </div>
          <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>
          <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
            <Social color="white" />
          </div>
          <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full "></div>
          <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
            <span className="text-sm">© {new Date().getFullYear()}</span>
            <span className="mt-7 md:mt-1 text-sm text-center md:text-left">
              Developed and Designed by Diana Bernabei
            </span>
            <span className="mt-7 md:mt-1 text-sm">P.IVA 02430130449</span>
            <span className="text-sm font-bold pt-4">
              <Link to="/login">Admin</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
