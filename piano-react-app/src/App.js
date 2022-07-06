import './App.css';
import {useState, useEffect} from'react'
import axios from 'axios'
import Fuse from 'fuse.js'

function App() {
   const [pianos, setPianos] = useState([])


   const APIBaseURL = 'http://localhost:8000/api/pianos'
}

export default App;
