import { useDispatch, useSelector } from 'react-redux'
import { ADD_NOTE, CHANGE_NOTE, RESET_NOTE } from '../actions/actionTypes.js'
import { v4 as uuidv4 } from 'uuid';
export default function NoteAdd() {
  const dispatch = useDispatch()
  const { note, price, changed } = useSelector((state) => state.note)
 
  const addNote = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    formJson.id = uuidv4()
    dispatch({
      type: ADD_NOTE,
      payload: formJson
    })

    dispatch({
      type: RESET_NOTE,
    })

  }
  
  const onChange = (e) => {
    const {name, value} = e.target
    dispatch({
      type: CHANGE_NOTE,
      payload: { [name]: value }
    })
  }

  return (
    <>
      <form onSubmit={addNote}>
        <input type="text" name="note" value={note} onChange={onChange}/>
        <input type="number" name="price" value={price} onChange={onChange}/>
        <button type="submit">Save</button>
        {changed ?  <button type="button" onClick={() => dispatch({type: RESET_NOTE})}>Cancel</button> : <></>}
      </form>
    </>

  )
}
