import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Sobre from './components/Section_Sobre/Sobre'
import Shows from './components/Section_Shows/Shows'
import Integrantes from './components/Integrantes/Integrantes'
import Interludio from './components/Interludio/Interludio'
import Interludio02 from './components/Interludio02/Interludio02'
import Footer from './components/Footer/Footer'
import AccessibilityWidget from './components/Acessibilidade_API/Acessibilidade_API'

function App() {

  return (
    <>
      <AccessibilityWidget />
      <Header />
      <Hero />
      <Interludio />
      <Sobre />
      <Interludio02 />
      <Shows />
      <Integrantes />
      <Footer />
    </>
  )
}

export default App
