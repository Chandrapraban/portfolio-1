import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
