import React, { useState } from 'react'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import { Blog } from './Blog'
import { About } from './About'
import Home from './Home'
import Post from './blog/post'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './index.css'
import CookieConsent from 'react-cookie-consent'
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
    <Router>
      <div className="px-10 py-5 md:px-40 md:pt-20">
        <nav className="text-black flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link to="/">
              <h1 aria-label="Diana Bernabei">{`<D/>`}</h1>
            </Link>
          </div>
          <CookieConsent
            /* debug={true} */
            location="bottom"
            cookieName="CookieConsent"
            style={{ background: '#000', padding: '0.2rem 2rem' }}
            expires={150}
            hideOnAccept={true}
            buttonText="Accetto che utilizzi i cookie!"
            buttonStyle={{
              background: '#fff',
              color: '#000',
              fontSize: '1rem',
            }}
            ariaAcceptLabel="Accetto che utilizzi i cookie!"
            enableDeclineButton={true}
            declineButtonText="hmm no!"
            ariaDeclineLabel="Hmm no!"
            declineCookieValue={false}
            declineButtonStyle={{
              background: '#000',
              color: '#fff',
              textDecoration: 'underline',
              fontSize: '1rem',
            }}
          >
            <div className="flex flex-row gap-4 items-center ">
              <svg
                aria-hidden={true}
                width="1rem"
                height="1rem"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#fff"
              >
                <path d="M494.6 255.9c-65.63-.8203-118.6-54.14-118.6-119.9c-65.74 0-119.1-52.97-119.8-118.6c-25.66-3.867-51.8 .2346-74.77 12.07L116.7 62.41C93.35 74.36 74.36 93.35 62.41 116.7L29.6 181.2c-11.95 23.44-16.17 49.92-12.07 75.94l11.37 71.48c4.102 25.9 16.29 49.8 34.81 68.32l51.36 51.39C133.6 466.9 157.3 479 183.2 483.1l71.84 11.37c25.9 4.101 52.27-.1172 75.59-11.95l64.81-33.05c23.32-11.84 42.31-30.82 54.14-54.14l32.93-64.57C494.3 307.7 498.5 281.4 494.6 255.9zM176 367.1c-17.62 0-32-14.37-32-31.1s14.38-31.1 32-31.1s32 14.37 32 31.1S193.6 367.1 176 367.1zM208 208c-17.62 0-32-14.37-32-31.1s14.38-31.1 32-31.1s32 14.37 32 31.1S225.6 208 208 208zM368 335.1c-17.62 0-32-14.37-32-31.1s14.38-31.1 32-31.1s32 14.37 32 31.1S385.6 335.1 368 335.1z" />
              </svg>
              Vorrei utilizzare i biscottini per rendere questo sito migliore,
              posso?
            </div>
          </CookieConsent>
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
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog isAuth={isAuth} />} />
          <Route path="/blog/:id" element={<Post isAuth={isAuth} />} />
          <Route path="/chisono" element={<About />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route
            path="/updatepost/:id"
            element={<UpdatePost isAuth={isAuth} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
