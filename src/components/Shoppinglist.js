import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import "../listpage.css";


const Shoppinglist = ({Shoppinglist, toggleComplete, deleteList}) => {
  return (
    <li className={Shoppinglist.completed ? 'listDone' : 'listStyle'}>
        <div className='row'>
            <input onChange={() => toggleComplete(Shoppinglist)} className="check" type="checkbox" checked={Shoppinglist.completed ? 'checked' : ''}  />
            <p onClick={() => toggleComplete(Shoppinglist)} className={Shoppinglist.completed ? 'textListComplete' : 'textList'}>{Shoppinglist.text}</p>
        </div>
        <button onClick={() => deleteList(Shoppinglist.id)}><FontAwesomeIcon icon={faTrash} /></button>
    </li>
  )
}

export default Shoppinglist