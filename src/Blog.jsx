import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
  updateDoc,
} from 'firebase/firestore'
import { db, auth } from './firebase-config'
import { useNavigate } from 'react-router-dom'

export const Blog = ({ isAuth }) => {
  const [postLists, setPostList] = useState([])
  const [Loader, setLoader] = useState(false)
  const postsCollectionRef = collection(db, 'posts')
  let navigate = useNavigate()
  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)
    navigate('/')
  }
  const getPosts = async () => {
    setTimeout(() => setLoader(false), 500)
    const data = await getDocs(postsCollectionRef)
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  useEffect(() => {
    setLoader(true)
    setTimeout(() => getPosts(), 500)
  }, [])

  return (
    <main className="mt-4 md:mt-20">
      <h1 className="mb-10 md:mb-20">Blog</h1>
      {Loader ? (
        <div>
          <div className="w-60 h-24 rounded mt-20">
            <div className="flex animate-pulse flex-row items-center h-full">
              <div className="flex flex-col space-y-3">
                <div className="w-36 bg-gray-300 h-3 rounded "></div>
                <div className="w-24 bg-gray-300 h-3 rounded "></div>
                <div className="w-52 bg-gray-300 h-3 rounded "></div>
                <div className="w-24 bg-gray-300 h-3 rounded "></div>
              </div>
            </div>
          </div>
          <div className="w-60 h-24 rounded mt-20">
            <div className="flex animate-pulse flex-row items-center h-full">
              <div className="flex flex-col space-y-3">
                <div className="w-36 bg-gray-300 h-3 rounded "></div>
                <div className="w-24 bg-gray-300 h-3 rounded "></div>
                <div className="w-52 bg-gray-300 h-3 rounded "></div>
                <div className="w-24 bg-gray-300 h-3 rounded "></div>
              </div>
            </div>
          </div>
          <div className="w-60 h-24 rounded mt-20">
            <div className="flex animate-pulse flex-row items-center h-full">
              <div className="flex flex-col space-y-3">
                <div className="w-36 bg-gray-300 h-3 rounded "></div>
                <div className="w-24 bg-gray-300 h-3 rounded "></div>
                <div className="w-52 bg-gray-300 h-3 rounded "></div>
                <div className="w-24 bg-gray-300 h-3 rounded "></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        postLists
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((post, index) =>
            isAuth || post.draft === false ? (
              <div
                className="flex flex-row justify-between mb-4 p-4 border-2 border-black"
                key={index}
              >
                <div className="my-2 w-full">
                  {isAuth ? (
                    <>
                      <Link
                        to={`/updatepost/${post.id}`}
                        className="underline font-bold"
                      >
                        ✍️ aggiorna
                      </Link>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="underline font-bold float-right"
                      >
                        🗑️ elimina
                      </button>
                    </>
                  ) : null}
                  <h2 className="mt-2">
                    {post.title}
                    {post.draft == true ? '♻️' : null}
                  </h2>
                  <p className="text-base">{post.date}</p>
                  <p className="text-base font-bold">
                    {post.tag == '' ? null : '#'}
                    {post.tag}
                  </p>

                  {isAuth ? <p className="text-sm">{post.date}</p> : null}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.content.substring(0, 300),
                    }}
                    className="pb-2"
                  />
                  <Link to={`/blog/${post.id}/${post.slug}`}>
                    <span className="underline text-sm font-bold">
                      Continua a leggere l'articolo "{post.title}"
                    </span>
                  </Link>
                </div>
              </div>
            ) : null
          )
      )}
    </main>
  )
}

Blog.propTypes = {
  isAuth: PropTypes.bool,
}
