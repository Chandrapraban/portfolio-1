import { useState, useEffect, useRef } from 'react'
import { Play, Pause, Music2 } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const TRACKS = [
  { title: 'Fix You', subtitle: 'Coldplay — Cover', url: 'https://soundcloud.com/chandrapraban-u/fix-you-cover' },
  { title: 'Zara Zara', subtitle: 'RHTDM — Cover', url: 'https://soundcloud.com/chandrapraban-u/zara-zara-cover' },
  { title: 'Vennilave', subtitle: 'Minsara Kanavu — Cover', url: 'https://soundcloud.com/chandrapraban-u/vennilave-cover' },
]

function MusicPlayer() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [ready, setReady] = useState(false)
  const iframeRef = useRef(null)
  const widgetRef = useRef(null)

  useEffect(() => {
    const init = () => {
      if (!iframeRef.current || !window.SC) return
      const widget = window.SC.Widget(iframeRef.current)
      widgetRef.current = widget

      widget.bind(window.SC.Widget.Events.READY, () => {
        setReady(true)
        widget.getDuration((d) => setDuration(d))
      })
      widget.bind(window.SC.Widget.Events.PLAY, () => setIsPlaying(true))
      widget.bind(window.SC.Widget.Events.PAUSE, () => setIsPlaying(false))
      widget.bind(window.SC.Widget.Events.FINISH, () => {
        setIsPlaying(false)
        setProgress(0)
        setCurrentTime(0)
      })
      widget.bind(window.SC.Widget.Events.PLAY_PROGRESS, (e) => {
        setCurrentTime(e.currentPosition)
        setProgress(e.relativePosition * 100)
      })
    }

    if (window.SC) {
      init()
    } else {
      const script = document.createElement('script')
      script.src = 'https://w.soundcloud.com/player/api.js'
      script.onload = init
      document.body.appendChild(script)
    }
  }, [])

  const loadTrack = (idx) => {
    if (!widgetRef.current) return
    setCurrentIdx(idx)
    setProgress(0)
    setCurrentTime(0)
    setDuration(0)
    setReady(false)
    widgetRef.current.load(TRACKS[idx].url, { auto_play: true })
  }

  const togglePlay = () => widgetRef.current?.toggle()

  const handleSeek = (e) => {
    if (!widgetRef.current || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    widgetRef.current.seekTo(pct * duration)
    setProgress(pct * 100)
  }

  const fmt = (ms) => {
    const s = Math.floor(ms / 1000)
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
      {/* Hidden SoundCloud iframe — needs real dimensions to load in browser */}
      <iframe
        ref={iframeRef}
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(TRACKS[0].url)}&auto_play=false&color=%23ffffff`}
        style={{ position: 'fixed', left: '-9999px', top: 0, width: '300px', height: '166px', border: 'none', pointerEvents: 'none' }}
        allow="autoplay"
        title="sc-player"
      />

      {/* Now playing */}
      <div className="px-6 pt-6 pb-5 border-b border-zinc-800">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
            <Music2 size={20} className={`transition-colors duration-200 ${isPlaying ? 'text-white' : 'text-zinc-500'}`} />
          </div>
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-widest font-mono mb-0.5">
              {isPlaying ? 'Now Playing' : ready ? 'Paused' : 'Loading…'}
            </p>
            <p className="text-base font-semibold text-white leading-tight">{TRACKS[currentIdx].title}</p>
            <p className="text-sm text-zinc-500">{TRACKS[currentIdx].subtitle}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div
          className="h-1 bg-zinc-700 rounded-full cursor-pointer mb-2"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-white rounded-full transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-zinc-600 mb-5">
          <span>{fmt(currentTime)}</span>
          <span>{fmt(duration)}</span>
        </div>

        {/* Play / Pause */}
        <div className="flex justify-center">
          <button
            onClick={togglePlay}
            disabled={!ready}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-zinc-200 active:scale-95 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {isPlaying
              ? <Pause size={18} className="text-black" />
              : <Play size={18} className="text-black ml-0.5" />
            }
          </button>
        </div>
      </div>

      {/* Track list */}
      <div className="divide-y divide-zinc-800/60">
        {TRACKS.map((track, i) => (
          <button
            key={track.title}
            onClick={() => i === currentIdx ? togglePlay() : loadTrack(i)}
            className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-colors duration-200 hover:bg-zinc-800/40 ${
              i === currentIdx ? 'bg-zinc-800/20' : ''
            }`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
              i === currentIdx ? 'bg-white' : 'bg-zinc-800 border border-zinc-700'
            }`}>
              {i === currentIdx && isPlaying
                ? <Pause size={11} className="text-black" />
                : <Play size={11} className={i === currentIdx ? 'text-black ml-0.5' : 'text-zinc-500 ml-0.5'} />
              }
            </div>
            <div className="flex-grow min-w-0">
              <p className={`text-sm font-medium truncate transition-colors duration-200 ${i === currentIdx ? 'text-white' : 'text-zinc-400'}`}>
                {track.title}
              </p>
              <p className="text-xs text-zinc-600 truncate">{track.subtitle}</p>
            </div>
            {i === currentIdx && (
              <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Creative() {
  return (
    <section id="creative" className="py-24 sm:py-32 relative bg-black">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-zinc-600 font-mono text-sm font-medium tracking-widest uppercase mb-3">
              Beyond the Resume
            </p>
            <h2 className="section-heading">Creative Work</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Music I've recorded outside of work. This is what I do when I'm not shipping products.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <MusicPlayer />
        </ScrollReveal>
      </div>
    </section>
  )
}
