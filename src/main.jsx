import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PrimerComponente from './AppEjemplo'
import './index.css'
import Searchpokemon from './SearchPokemon'
import Home from './pages/pokemon'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Searchpokemon /> */}
    {/* <Home /> */}
    <App />
  </React.StrictMode>,
)
