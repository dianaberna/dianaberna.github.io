import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet, HelmetData } from 'react-helmet-async'
import { addDoc, collection, getDoc, doc, deleteDoc } from 'firebase/firestore'
import { db, auth } from '../../firebase-config'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const helmetData = new HelmetData({})

const Post = ({ isAuth }) => {
  let { id } = useParams()
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [content, setContent] = useState('')
  let navigate = useNavigate()
  const retrievePost = async () => {
    const querySnapshot = await getDoc(doc(db, 'posts', id))
    setTitle(querySnapshot.data().title)
    setTag(querySnapshot.data().tag)
    setContent(querySnapshot.data().content)
  }
  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)
    navigate('/')
  }
  useEffect(() => {
    retrievePost()
  })
  return (
    <div className="pt-20">
      <Link to={`/blog`} className="font-bold py-2 block">
        /blog
      </Link>
      {isAuth ? (
        <>
          <button
            onClick={() => deletePost(id)}
            className="underline font-bold pr-2"
          >
            🗑️ elimina
          </button>
          <Link to={`/updatepost/${id}`} className="underline font-bold">
            ✍️ aggiorna
          </Link>
        </>
      ) : null}
      <h1 className="mt-10">{title}</h1>
      <p className="text-base font-bold py-2">
        {tag == '' ? null : '#'}
        {tag}
      </p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default Post

Post.propTypes = {
  isAuth: PropTypes.bool,
}
