import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Editor from 'ckeditor5-custom-build/build/ckeditor'
/* import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor' */
/* import ClassicEditor from './public/plugins/ckeditor/ckeditor.js' */
function CreatePost({ isAuth }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tag, setTag] = useState('')
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [draft, setDraft] = useState(true)
  const [value, setValue] = React.useState('**Hello world!!!**')
  const postsCollectionRef = collection(db, 'posts')
  let navigate = useNavigate()
  const createPost = async () => {
    try {
      await addDoc(postsCollectionRef, {
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
        title: title,
        content: content,
        tag: tag,
        date: date,
        draft: draft,
      })
    } catch (err) {
      alert(err)
    }
    navigate('/')
  }
  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [])
  return (
    <div>
      <h1 className="my-10">Crea Blogpost</h1>
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
          />
        </div>
        <div className="">
          <label htmlFor="date" className="block text-xl">
            Data:
          </label>
          <input
            id="date"
            type="date"
            className="border border-black p-2"
            onChange={(event) => {
              setDate(event.target.value)
            }}
            value={date}
          />
        </div>
        <div className="">
          <label htmlFor="date" className="text-xl pr-2">
            Bozza:
          </label>
          <input
            id="date"
            type="checkbox"
            className="border border-black p-2"
            onChange={(event) => {
              setDraft(event.target.value)
            }}
            value={date}
          />
        </div>
        <div className="">
          <CKEditor
            editor={Editor}
            data="<p>Ciao! Scrivi qui il tuo articolo</p>"
            onChange={(event, editor) => {
              const data = editor.getData()
              setContent(data)
            }}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="w-1/6 border border-black bg-black text-white"
            onClick={createPost}
          >
            Carica Blogpost
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost

CreatePost.propTypes = {
  isAuth: PropTypes.bool,
}
