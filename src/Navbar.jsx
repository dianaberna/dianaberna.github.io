import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export const Navbar = () => {
  return (
    <div className="flex flex-row flex-wrap mt-6 md:mt-0">
      <div className="py-2 px-6 font-medium text-lg hover:underline hover:decoration-2">
        <HashLink to="/#servizi">servizi</HashLink>
      </div>
      <div className="py-2 px-6 font-medium text-lg hover:underline hover:decoration-2">
        <Link to="/blog">blog</Link>
      </div>
      <div className="py-2 px-6 font-medium text-lg hover:underline hover:decoration-2">
        <Link to="/chisono">chi sono</Link>
      </div>
      <div className="py-2 px-6 font-medium text-lg hover:underline hover:decoration-2">
        <HashLink to="/#community">community</HashLink>
      </div>
    </div>
  )
}
