import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, RESET_NOTE, CHANGE_NOTE } from './actionTypes.js'

let initialState = {
  note: '',
  price: 0,
  changed: false,
  id: 0,
  list: [],
}

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      if (state.id !== 0) {
        const list = state.list.map(item => {
          if (item.id === state.id) {
            return {
              ...item,
              note: action.payload.note,
              price: action.payload.price
            }
          }
          return item
        })

        return {
          ...state,
          list: list,
          id: 0,
          changed: false,
        }
      }

      return {...state,  list: [...state.list, action.payload]}

    case CHANGE_NOTE:
      if (action.payload.price !== undefined) {
        return {
          ...state,
          price: Number(action.payload.price),
        }
    
      }
      return {
        ...state,
        note: action.payload.note,
      }

    case DELETE_NOTE:
      const index = state.list.findIndex((note) => note.id === action.payload)
      const newList = state.list.slice(0, index)
      return {
        ...state,
        list: [...newList, ...state.list.slice(index + 1)],
      }

    case RESET_NOTE:
     return {
       ...state,
       note: '',
       price: 0,
       changed: false,
     }

    case EDIT_NOTE:
      return {
        ...state,
        note: action.payload.note,
        price: action.payload.price,
        changed: true,
        id: action.payload.id
      } 

    default:
      return state
  }
}
