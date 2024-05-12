import {useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { DELETE_NOTE, EDIT_NOTE } from '../actions/actionTypes.js'
export default function NoteList() {
  const notes = useSelector(state => state.note.list)
  const [filter, setFilter] = useState('');
  
  const dispatch = useDispatch()
  const handleEdit = (id, note, price) => {
    dispatch({
      type: EDIT_NOTE,
      payload: {
        id: id,
        note: note,
        price: price,
      }
    })
  }
  const handleDelete = (id) => {
    dispatch({
      type: DELETE_NOTE,
      payload: id
    })
  }


  const filteredNotes = notes.filter(note => {
    const { note: noteContent, price } = note;
    return (
      noteContent.toLowerCase().includes(filter.toLowerCase()) ||
      price.toString().includes(filter)
    );
  });

  return (
    <>
      <div>
        Filter
        <input type="text" name="filter" onChange={e => setFilter(e.target.value)}/>
      </div>
      {filteredNotes.length ?
        <ul>
          {filteredNotes.map((note, index) => (
            <li id={note.id} key={index}>
              <input type="text" value={note.note} readOnly/>
              <input type="number" value={note.price} readOnly/>
              <button type="button" onClick = {() => handleEdit(note.id, note.note, note.price)}>Edit</button>
              <button type="button" onClick={() => handleDelete(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      : 
        <p>No notes</p>
      }
    </>
   
  )
}