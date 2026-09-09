'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, ChevronRight, Menu, X } from 'lucide-react'

const navItems = [
  ['about', 'About'], ['story', 'Story'], ['results', 'Results'], ['gallery', 'Gallery'], ['calendar', 'Calendar'], ['contact', 'Contact'],
]

const timeline = [
  { year: '2019', title: 'First lights, no shortcuts.', copy: 'A regional karting title became a blueprint: learn the data, respect the craft, repeat the lap.', result: '01 / 04 — debut season', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85' },
  { year: '2021', title: 'The pace became a language.', copy: 'A move into GT4 racing sharpened every decision. The team found speed in the details others left behind.', result: '06 podiums — GT4 Europe', image: 'https://images.unsplash.com/photo-1547744152-14d985cb937f?auto=format&fit=crop&w=1200&q=85' },
  { year: '2023', title: 'Pressure made precise.', copy: 'Night races, wet starts, and a first endurance win. Momentum is not a feeling; it is a system.', result: '01 win — 24H endurance', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=85' },
  { year: '2026', title: 'The next lap is already moving.', copy: 'A new chapter in GT3. The mission stays simple: arrive prepared, leave a little better.', result: 'P01 target — every weekend', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85' },
]

const gallery = [
  ['Apex study', 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1300&q=85'],
  ['Pit lane / 05:42', 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85'],
  ['Brake temperature', 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=85'],
  ['Under the lights', 'https://images.unsplash.com/photo-1547744152-14d985cb937f?auto=format&fit=crop&w=1000&q=85'],
  ['The line', 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=85'],
]

const races = [
  ['01', 'Circuit de Spa', 'BE', 'APR 18—19', 'GT3 / PRO', 'UP NEXT'],
  ['02', 'Imola Autodromo', 'IT', 'MAY 09—10', 'GT3 / PRO', 'UP NEXT'],
  ['03', 'Circuit Zandvoort', 'NL', 'JUN 20—21', 'GT3 / PRO', 'UP NEXT'],
  ['04', 'Monza National', 'IT', 'MAR 28—29', 'GT3 / PRO', 'P04 FINISH'],
]

function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => setProgress(Math.min(100, Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)))
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return progress
}

function MenuOverlay({ open, close }: { open: boolean; close: () => void }) {
  useEffect(() => { if (!open) return; const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close(); document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) } }, [open, close])
  if (!open) return null
  return <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Site menu">
    <div className="menu-top"><span>APEX//NINE</span><button className="menu-button menu-button-dark" onClick={close} aria-label="Close menu"><X size={22} /></button></div>
    <nav className="menu-links">{navItems.map(([id, label], i) => <a key={id} href={`#${id}`} onClick={close}><span>0{i + 1}</span>{label}<ArrowUpRight size={32} /></a>)}</nav>
    <div className="menu-foot"><span>Independent racing / Est. 2019</span><span>NL—BE—DE</span></div>
  </div>
}

function Header({ openMenu }: { openMenu: () => void }) {
  const progress = useScrollProgress()
  return <header className="site-header"><a href="#top" className="wordmark" aria-label="Apex Nine home"><b>APEX</b><i>//</i><b>NINE</b><small>RACING</small></a><div className="header-progress"><span>{String(progress).padStart(2, '0')}</span><div><i style={{ width: `${progress}%` }} /></div></div><button className="menu-button" onClick={openMenu} aria-label="Open menu"><Menu size={22} /><span>MENU</span></button></header>
}

function Hero() {
  return <section id="top" className="hero scene-dark"><div className="hero-media" /><div className="hero-shade" /><div className="hero-content"><p className="eyebrow">APEX//NINE — GT DRIVER</p><h1>BUILT FOR<br /><em>THE NEXT</em> LAP</h1><div className="hero-meta"><span>LOUIS VAN AERT</span><span>GT3 / 2026</span><span>52° 05′ N / 4° 18′ E</span></div><a className="yellow-button" href="#about">EXPLORE THE STORY <ArrowDownRight size={18} /></a></div><div className="hero-bottom"><span>SCROLL TO ENTER</span><span className="scroll-line" /></div></section>
}

function Intro() {
  return <section id="about" className="intro-section technical-grid"><div className="intro-sticky"><div className="side-photo photo-one"><img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=700&q=85" alt="Black performance car on track" /></div><div className="side-photo photo-two"><img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=700&q=85" alt="Close detail of a racing motorcycle" /></div><p className="eyebrow dark-eyebrow">01 / THE APPROACH</p><h2>EVERY LAP<br />IS <mark>DATA.</mark><br />EVERY LIMIT<br />IS A <mark>STARTING<br />POINT.</mark></h2><div className="profile-card"><div className="profile-image"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85" alt="Portrait of fictional racing driver Louis van Aert" /></div><div><p className="eyebrow dark-eyebrow">DRIVER / 09</p><h3>LOUIS<br />VAN AERT</h3><p className="profile-copy">Dutch driver. GT3 class. Obsessive about the one percent between good and great.</p><span className="profile-location">ROTTERDAM, NL — 1997</span></div></div></div></section>
}

function Stats() {
  return <section className="stats-section technical-grid"><div className="section-label">02 / THE NUMBERS</div><div className="stats-intro"><p className="eyebrow dark-eyebrow">MEASURED IN MOMENTS</p><p className="stats-lead">Speed is visible. Preparation is everything that happens before it.</p></div><div className="stats-grid">{[['09', 'CAR NUMBER'], ['24', 'PODIUMS'], ['18', 'CIRCUITS'], ['12+', 'YEARS RACING'], ['01', 'MISSION']].map(([n, label]) => <div className="stat" key={label}><strong>{n}</strong><span>{label}</span></div>)}</div></section>
}

function Countdown() {
  const target = useMemo(() => new Date('2026-09-18T09:00:00Z').getTime(), [])
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })
  useEffect(() => { const tick = () => { const d = Math.max(0, target - Date.now()); setTime({ days: Math.floor(d / 86400000), hours: Math.floor(d / 3600000) % 24, mins: Math.floor(d / 60000) % 60, secs: Math.floor(d / 1000) % 60 }) }; tick(); const id = setInterval(tick, 1000); return () => clearInterval(id) }, [target])
  return <div className="countdown" aria-label="Countdown to next race"><div><strong>{String(time.days).padStart(2, '0')}</strong><span>DAYS</span></div><i>:</i><div><strong>{String(time.hours).padStart(2, '0')}</strong><span>HRS</span></div><i>:</i><div><strong>{String(time.mins).padStart(2, '0')}</strong><span>MIN</span></div><i>:</i><div><strong>{String(time.secs).padStart(2, '0')}</strong><span>SEC</span></div></div>
}

function RaceWeekend() {
  return <section className="race-section scene-dark"><div className="race-image" /><div className="race-overlay" /><div className="race-content"><p className="eyebrow">03 / NEXT ON THE GRID</p><div className="race-title-row"><div><span className="event-number">R.01</span><h2>SPA<br /><em>FRANCORCHAMPS</em></h2></div><div className="race-date"><span>18—19</span><small>SEPTEMBER<br />2026</small></div></div><div className="race-bottom"><div><p className="eyebrow">LIGHTS OUT IN</p><Countdown /></div><div className="timing-line"><span /><i /></div><span className="race-location">STAVELOT, BE<br />50° 26′ N / 5° 58′ E</span></div></div></section>
}

function Story() {
  const [active, setActive] = useState(0)
  return <section id="story" className="story-section technical-grid"><div className="section-label">04 / THE STORY</div><div className="story-layout"><div className="story-rail"><p className="eyebrow dark-eyebrow">A MOVING TARGET</p><div className="year-list">{timeline.map((item, i) => <button key={item.year} className={active === i ? 'active' : ''} onClick={() => setActive(i)}>{item.year}</button>)}</div><div className="rail-line"><i style={{ height: `${(active + 1) * 25}%` }} /></div></div><article className="story-panel"><div className="story-copy"><p className="eyebrow dark-eyebrow">{timeline[active].year} / MILESTONE</p><h2>{timeline[active].title}</h2><p>{timeline[active].copy}</p><strong>{timeline[active].result}</strong><a href="#contact" className="text-link">READ FULL STORY <ChevronRight size={16} /></a></div><div className="story-image"><img src={timeline[active].image} alt={`${timeline[active].year} racing milestone`} /></div></article></div></section>
}

function Gallery() {
  return <section id="gallery" className="gallery-section scene-dark"><div className="section-label light-label">05 / THE ARCHIVE</div><div className="gallery-head"><p className="eyebrow">SELECTED FRAMES</p><h2>THE WORK<br /><em>IN MOTION.</em></h2><span>05 / 05</span></div><div className="gallery-track">{gallery.map(([caption, src], i) => <figure className={i === 0 ? 'feature' : ''} key={src}><img src={src} alt={caption} loading="lazy" /><figcaption><span>{caption}</span><span>0{i + 1} / 05</span></figcaption></figure>)}</div></section>
}

function Calendar() {
  return <section id="calendar" className="calendar-section technical-grid"><div className="section-label">06 / THE CALENDAR</div><div className="calendar-heading"><p className="eyebrow dark-eyebrow">2026 SEASON</p><h2>MARK<br /><em>THE DATES.</em></h2></div><div className="race-table">{races.map((race) => <div className="race-row" key={race[0]}><span className="round">{race[0]}</span><strong>{race[1]}</strong><span>{race[2]}</span><span>{race[3]}</span><span>{race[4]}</span><b>{race[5]}</b><ArrowUpRight size={18} /></div>)}</div></section>
}

function Contact() {
  const [sent, setSent] = useState(false)
  return <section id="contact" className="contact-section scene-dark"><div className="contact-copy"><p className="eyebrow">07 / PARTNERSHIPS</p><h2>PUT YOUR<br />BRAND ON<br /><em>THE NEXT LAP.</em></h2><p>We work with partners who understand that meaningful performance is built, tested, and earned. Let&apos;s make the next chapter count.</p><a className="text-link light-link" href="mailto:hello@apexnine.racing">hello@apexnine.racing <ArrowUpRight size={16} /></a></div><form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>{sent ? <div className="form-success"><span>MESSAGE RECEIVED</span><h3>We&apos;ll be in the garage.</h3><p>Thanks for reaching out. Our team will reply shortly.</p></div> : <><div className="form-row"><label>FIRST NAME<input required name="firstName" /></label><label>LAST NAME<input required name="lastName" /></label></div><label>EMAIL<input required type="email" name="email" /></label><label>COMPANY<input name="company" /></label><label>MESSAGE<textarea required name="message" rows={4} /></label><button className="yellow-button" type="submit">BECOME A PARTNER <ArrowUpRight size={18} /></button></>}</form></section>
}

function Footer() { return <footer className="footer"><a href="#top" className="wordmark footer-mark"><b>APEX</b><i>//</i><b>NINE</b><small>RACING</small></a><div className="footer-nav">{navItems.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><div className="socials"><a href="#contact" aria-label="Instagram">IG</a><a href="#contact" aria-label="YouTube">YT</a><a href="#contact" aria-label="LinkedIn">IN</a></div><div className="footer-bottom"><span>© 2026 APEX//NINE RACING</span><span>INDEPENDENTLY DRIVEN</span><span>BUILT WITH INTENT</span></div></footer> }

export default function Page() { const [menuOpen, setMenuOpen] = useState(false); return <><a className="skip-link" href="#main">Skip to content</a><Header openMenu={() => setMenuOpen(true)} /><MenuOverlay open={menuOpen} close={() => setMenuOpen(false)} /><main id="main"><Hero /><Intro /><Stats /><RaceWeekend /><Story /><Gallery /><Calendar /><Contact /></main><Footer /></> }
