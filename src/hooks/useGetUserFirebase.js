import { useState } from 'react';
import { collection, getDocs, query } from "firebase/firestore";
import { db } from '../firebase/client'

const COLLECTION_FIREBASE = "test-001"

export default function useGetUserFirebase() { 
  const [users, setUsers ]= useState([])
  const [error, setError ]= useState('')
  const [loading, setLoading ]= useState(false)

  async function handlerDataFromFirebase() {
    setLoading(true)
    const userRef = collection(db, COLLECTION_FIREBASE)
    
    try {
      if (users?.length === 0) {
        const getCollection = query(userRef)
        const querySnapshot = await getDocs(getCollection);
        
        querySnapshot.forEach((doc) => {
          if(doc.id) {
            setUsers((prevState) => [...prevState, doc.data()])
          }
        });
      }

      setLoading(false)
    } catch (error) {
      console.log(error)
      setError('Tuvimos un problema en la carga de datos')
      setLoading(false)
    }
  }

  return {
    users,
    loading,
    error,
    handlerDataFromFirebase
  }
}