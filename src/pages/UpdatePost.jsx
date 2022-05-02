import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { collection, updateDoc, getDoc, doc, setDoc } from 'firebase/firestore'
import { db, auth } from '../firebase-config'
import { useNavigate, useParams } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Editor from 'ckeditor5-custom-build/build/ckeditor'

function UpdatePost({ isAuth }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tag, setTag] = useState('')
  const [date, setData] = useState('')
  const [draft, setDraft] = useState(true)
  let id = useParams().id
  const retrievePost = async () => {
    const querySnapshot = await getDoc(doc(db, 'posts', id))
    setTitle(querySnapshot.data().title)
    setContent(querySnapshot.data().content)
    setTag(querySnapshot.data().tag)
    setData(querySnapshot.data().date)
    setDraft(querySnapshot.data().draft)
  }
  let navigate = useNavigate()
  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
    retrievePost()
  }, [])
  const updatePost = async () => {
    const docRef = doc(db, 'posts', id)
    await updateDoc(docRef, {
      title: title,
      tag: tag,
      content: content,
      date: date,
      draft: draft,
    })
    setDoc(docRef, { isDismissed: true }, { merge: true })
    navigate('/blog')
  }
  return (
    <div>
      <h1 className="my-10">Aggiorna Blogpost</h1>
      <div className="flex flex-col gap-4">
        <div className="">
          <label htmlFor="title" className="text-xl">
            Titolo:
          </label>
          <input
            type="text"
            id="title"
            className="border border-black w-full p-2"
            placeholder="title..."
            onChange={(event) => {
              setTitle(event.target.value)
            }}
            value={title}
          />
        </div>
        <div className="">
          <label htmlFor="tag" className="text-xl">
            Tag:
          </label>
          <input
            type="text"
            id="tag"
            className="border border-black w-full p-2"
            placeholder="tag..."
            onChange={(event) => {
              setTag(event.target.value)
            }}
            value={tag}
          />
        </div>
        <div className="">
          <label htmlFor="date" className="text-xl">
            Data:
          </label>
          <input
            id="date"
            type="date"
            className="border border-black w-full p-2"
            value={date}
            onChange={(event) => {
              setData(event.target.value)
            }}
          />
        </div>
        <div className="">
          <label htmlFor="date" className="text-xl mr-2">
            Bozza:
          </label>
          <input
            id="date"
            type="checkbox"
            className="border border-black p-2"
            onChange={(event) => {
              setDraft(event.target.checked)
            }}
            checked={draft}
          />
        </div>
        <div className="">
          <CKEditor
            editor={Editor}
            data={content}
            onChange={(event, editor) => {
              const data = editor.getData()
              setContent(data)
            }}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="w-1/6 border border-black bg-black text-white"
            onClick={updatePost}
          >
            Aggiorna post
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdatePost

UpdatePost.propTypes = {
  isAuth: PropTypes.bool,
}
