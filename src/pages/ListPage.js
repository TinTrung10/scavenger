import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "../listpage.css";
import Shoppinglist from "../components/Shoppinglist";
import {db} from "../firebase"
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'



export default function ListPage() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

//Create list
const createList = async (e) => {
    e.preventDefault(e)
    if (input === '') {
        alert('Indtast en gyldig vare')
        return
    }
    await addDoc(collection(db, 'lists'), {
        text: input, 
        completed: false,
    })
    setInput('');
};
//Read from firebase
useEffect(()=>{
const q = query(collection(db, 'lists'))
const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let listsArr = []
    querySnapshot.forEach((doc) => {
        listsArr.push({...doc.data(), id: doc.id})
    });
    setList(listsArr);

})
return () => unsubscribe();
}, [])
//Update list in firebase
const toggleComplete = async (Shoppinglist) => {
    await updateDoc(doc(db, 'lists', Shoppinglist.id), {
        completed: !Shoppinglist.completed
    })
}
//Delete list
const deleteList = async (id) => {
    await deleteDoc(doc(db, 'lists', id))
}

    return (
        <div className="bgList">
            <div className="container">
                <h3 className="heading"> Min Indkøbsliste</h3>
                <form onSubmit={createList} className="form">
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="input" type="text" placeholder="Tilføj vare..."/>
                    <button className="btnList"><FontAwesomeIcon icon={faPlus} size={'xl'} /></button>
                </form>
                <ul>
                    {list.map((shoplist, index)=> (
                       <Shoppinglist key={index} Shoppinglist={shoplist} toggleComplete={toggleComplete} deleteList={deleteList} /> 
                    ))}
                </ul>

                {list.length < 1 ? null : <p className="count">{`Du har tilføjet ${list.length} varer`}</p> }
                <div>
                    <p>Din pris:</p>
                    <hr></hr>
                    <p><strong>82 kr.</strong></p>
                </div>
            </div>
        </div>
    );
    
    
    
}