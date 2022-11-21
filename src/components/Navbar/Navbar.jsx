import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div className="flex flex-row flex-wrap mt-6 md:mt-0">
      <div className="py-2 px-6 font-medium text-lg ">
        <HashLink to="/#servizi">servizi</HashLink>
      </div>
      <div className="py-2 px-6 font-medium text-lg ">
        <Link to="/blog">blog</Link>
      </div>
      <div className="py-2 px-6 font-medium text-lg ">
        <Link to="/talks">talks</Link>
      </div>
      <div className="py-2 px-6 font-medium text-lg ">
        <Link to="/chisono">chi sono</Link>
      </div>
      <div className="py-2 px-6 font-medium text-lg ">
        <HashLink to="/#community">community</HashLink>
      </div>
    </div>
  )
}

export default Navbar
