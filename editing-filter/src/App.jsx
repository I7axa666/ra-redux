import './App.css'
import NoteList from './components/NoteList'
import NoteAdd from './components/NoteAdd'
import { useSelector } from 'react-redux'


function App() {
  return (
    <>
      <NoteAdd />
      <NoteList />
    </>
  )
}

export default App
