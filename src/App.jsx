import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Principles from './components/Principles'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Creative from './components/Creative'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Principles />
        <Projects />
        <Education />
        <Experience />
        <Resume />
        <Creative />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
