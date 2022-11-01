import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import "../listpage.css";

//Lavet af Martin Holme Elsborg

//List item created with css classed determined if the list is completed
//Change from standard css class to completed css class if item is completed
//Delete item if clicking on the trash icon
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