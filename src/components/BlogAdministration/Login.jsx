import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { auth, provider } from '../../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

function Login({ setIsAuth }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      sessionStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/createpost')
    })
  }
  return (
    <div className="mt-20">
      <h1>Login (only for admin)</h1>
      <p className="mt-10">
        <label htmlFor="email" className="block">
          Email:
        </label>
        <input
          id="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="border border-black"
        />
      </p>
      <p className="mt-4">
        <label htmlFor="password" className="block">
          Password:
        </label>
        <input
          id="passoword"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="border border-black"
        />
      </p>
      <button
        onClick={() => signInWithGoogle()}
        className="w-1/6 border border-black bg-black text-white mt-10"
      >
        Login
      </button>
    </div>
  )
}

export default Login

Login.propTypes = {
  setIsAuth: PropTypes.func,
}
