import './App.css';
import {useState, useEffect} from'react'
import axios from 'axios'
import Fuse from 'fuse.js'
import Edit from './components/Edit'
import NavBar from './components/NavBar'
import Delete from './components/Delete'

function App() {
   const [pianos, setPianos] = useState([])
   const [query, setQuery] = useState('')
   const [showPianos, setShowPianos] = useState(true)
   const [showPiano, setShowPiano] = useState(false)


   const APIBaseURL = 'http://localhost:8000/api/pianos'

   {/* ============================= SEARCH BAR ============================= */}

    const fuse = new Fuse(pianos, {
      keys: [
        'name'
      ],
      includeScore: true
  })

  const results = fuse.search(query)
  const pianoResults = query ? results.map(result => result.item) : pianos

  function handleOnSearch({ currentTarget = {} })  {
    const { value } = currentTarget;
    setQuery(value)
  }
    {/* ========================== HANDLES CHANGES =========================== */}

    const getPianos = () => {
    axios
        .get(APIBaseURL)
        .then(response => setPianos(response.data),
        (err)=> console.error(err)
        )
        .catch((error)=> console.error(error))

  }

  const handleCreate = (addPiano) => {
    axios
      .post(APIBaseURL, addPiano)
      .then((response) => {
        // takes the existing state and spreads it, adds new object to the end
        setPianos([...pianos, response.data])
        // pulls all data and loads on the page
        // getPianos()
      })
  }

  const handleUpdate =(editPiano) => {
  axios
  // id updates ID in DB, editAnimal brings the info from that function
    .put(APIBaseURL + '/' + editPiano.id, editPiano)
    .then((response) => {
      setPianos(pianos.map((piano) => {
        return piano.id !== response.data.id ? piano : response.data
      }))
      // getPianos()
    })
  }

  const handleDelete = (deletedPiano) => {
  axios
    .delete(APIBaseURL + '/' + deletedPiano.id)
    .then((response) => {
      setShowPiano(false)
      setShowPianos(true)
      // setPianos(pianos.filter(piano => piano.id !== deletedPiano.id))
      getPianos()
  })
}

return (
  <>
    <h1 className="title">Piano Store</h1>
  </>
  )
}

export default App;
