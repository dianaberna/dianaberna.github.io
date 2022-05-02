import {
  getFirestore,
  collection,
  query,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore'
import { db, auth } from '../firebase-config'

export async function read(id) {
  const firestore = getFirestore()
  const docRef = doc(db, 'posts', id)
  const docSnap = await getDoc(docRef)

  const data = docSnap.exists() ? docSnap.data() : null

  if (data === null || data === undefined) return null

  return { id, ...data }
}
