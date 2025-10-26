import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Sobre from './components/Section_Sobre/Sobre'
import Shows from './components/Section_Shows/Shows'
import Integrantes from './components/Integrantes/Integrantes'
import Interludio from './components/Interludio/Interludio'
import Interludio02 from './components/Interludio02/Interludio02'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Interludio />
      <Sobre />
      <Interludio02 />
      <Shows />
      <Integrantes />
    </>
  )
}

export default App
