import React, { useState, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Login = lazy(() => import('./components/BlogAdministration/Login'))
const CreatePost = lazy(() =>
  import('./components/BlogAdministration/CreatePost')
)
const UpdatePost = lazy(() =>
  import('./components/BlogAdministration/UpdatePost')
)

const About = lazy(() => import('./components/About'))
const Blog = lazy(() => import('./components/Blog'))
const Footer = lazy(() => import('./components/Footer'))
const Main = lazy(() => import('./components/Main'))
const Navbar = lazy(() => import('./components/Navbar'))
const Post = lazy(() => import('./components/Post'))
const Talks = lazy(() => import('./components/Talks'))

import './index.css'
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config'

export default function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('"isAuth"'))

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = '/login'
    })
  }

  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <div className="px-10 py-5 md:px-40 md:pt-20">
          <Link
            to="/#main"
            className="absolute -mt-40 focus:-mt-6"
            tabIndex="0"
          >
            Salta la navigazione e vai al contentuto principale
          </Link>
          <nav className="text-black flex flex-col md:flex-row justify-between items-center">
            <div>
              <Link to="/">
                {/* <h1 aria-label="Diana Bernabei">🏳️‍🌈{` <D/> `}🏳️‍🌈</h1> */}
                <h1 aria-label="Diana Bernabei">{` <D/> `}</h1>
              </Link>
            </div>
            <Navbar />
          </nav>
          <div className="text-black flex flex-col md:flex-row justify-end gap-10 items-center py-2 px-6">
            {!isAuth ? null : (
              <>
                <span>Ciao! 👩‍💻 → </span>
                <Link to="/createpost" className="font-bold">
                  🌱 crea blogpost
                </Link>
                <button onClick={signUserOut} className="font-bold">
                  🛑 log out
                </button>
              </>
            )}
          </div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blog isAuth={isAuth} />} />
            <Route path="/blog/:id/:slug" element={<Post isAuth={isAuth} />} />
            <Route path="/chisono" element={<About />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            <Route
              path="/createpost"
              element={<CreatePost isAuth={isAuth} />}
            />
            <Route
              path="/updatepost/:id"
              element={<UpdatePost isAuth={isAuth} />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Suspense>
  )
}
