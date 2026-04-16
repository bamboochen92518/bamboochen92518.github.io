import { useState, useEffect } from 'react'
import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loading from './components/Loading'

function App() {
  const [fontsReady, setFontsReady] = useState(false)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    document.fonts.ready.then(() => {
      setHiding(true)
      setTimeout(() => setFontsReady(true), 300)
    })
  }, [])

  return (
    <>
      {!fontsReady && <Loading hiding={hiding} />}
      <Header />
      <main style={{ padding: '40px 20px' }}>
        <Education />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
