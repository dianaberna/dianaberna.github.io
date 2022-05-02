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
                  <Link to={`/blog/${post.id}`}>
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

/* export const LastPosts = () => {
  const [Posts, setPosts] = useState([])

  function retrieveBlogDatatable() {
    fetch(
      `https://notion-api.splitbee.io/v1/table/${process.env.REACT_APP_NOTION_BLOG_ID}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then((post) => {
        setPosts(post)
      })
      .catch((error) => {
        console.error('error tetching data: ', error)
      })
  }

  useEffect(() => {
    retrieveBlogDatatable()
  }, [])

  return (
    <div className="mt-20 px-10 py-10 md:px-20 md:py-14 border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0)] bg-white">
      <h2 className="">Ultimi articoli</h2>
      <div>
        {Posts.slice(-3)
          .reverse()
          .map((post, index) => (
            <div className="w-full flex flex-row justify-between" key={index}>
              <div className="w-full mt-6">
                <p className="flex items-center">
                  {post.tag.map((e, tIndex) => (
                    <span
                      key={tIndex}
                      className="border border-black rounded px-1 py-1 mr-1 text-sm font-medium"
                    >
                      {e}
                    </span>
                  ))}
                </p>
                <p className="text-xl font-bold mt-2">
                  {index === 0 ? <span aria-hidden={true}>🆕 </span> : null}
                  {post.title}
                </p>
                <p className="">{post.intro}</p>
                <Link to={`/blog/${post.id}/${post.slug}`}>
                  <span className="underline text-sm font-bold">
                    Leggi l'articolo "{post.title}"
                  </span>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

 */
