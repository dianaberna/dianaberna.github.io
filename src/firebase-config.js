import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBU6codS6FFmDLRZeRW1njSWWHP70BDrkE',
  authDomain: 'blog-dianabernabei.firebaseapp.com',
  databaseURL:
    'https://blog-dianabernabei-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'blog-dianabernabei',
  storageBucket: 'blog-dianabernabei.appspot.com',
  messagingSenderId: '250302561827',
  appId: '1:250302561827:web:fa7f8937410a2b4345fb96',
}
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
