import { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import TechCarousel from './components/TechCarousel'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export type Language = 'es' | 'en'

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return 'es'
    }

    const savedLanguage = window.localStorage.getItem('language')
    return savedLanguage === 'en' ? 'en' : 'es'
  })

  useEffect(() => {
    window.localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(currentLanguage => (currentLanguage === 'es' ? 'en' : 'es'))
  }

  return (
    <>
      <div className="bg-neutral-950 text-neutral-300 min-h-screen">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Header language={language} onToggleLanguage={toggleLanguage} />
        <main className="px-4 md:px-10 lg:px-20">
          <About language={language} />
          <TechCarousel language={language} />
          <Projects language={language} />
          <Contact language={language} />
        </main>
        <Footer language={language} />
      </div>
    </>
  )
}

export default App;