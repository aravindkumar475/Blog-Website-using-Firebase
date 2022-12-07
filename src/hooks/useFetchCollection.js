import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from "../firebase/config";
import { useEffect } from 'react';
import { useState } from 'react';

export  const useFetchCollection = (fbcollection) => {
         
    const[documents,setDocuments]=useState(null)

    useEffect(()=>{
        let collectionRef=collection(db,fbcollection)

        let queryRef = query(collectionRef,orderBy("createdat","desc"));

        const unsub = onSnapshot(queryRef, (snapshot) => {
          let results = [];

          snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
          });

          setDocuments(results);
        });

    return () =>unsub()
   },[fbcollection])

    return {documents}
    

}



