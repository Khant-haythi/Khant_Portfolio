import { useEffect, useRef, useState } from 'react'
import portrait from './assets/haythi-portrait.jpg'
import hoteShinDashboard from './assets/hote-shin-dashboard.jpg'
import hoteShinLogin from './assets/hote-shin-login.jpg'
import hoteShinWelcome from './assets/hote-shin-welcome.jpg'
import weatherCurrent from './assets/weather-current.png'
import weatherForecast from './assets/weather-forecast.png'
import weatherSearch from './assets/weather-search.png'
import weatherSnowy from './assets/weather-snowy.png'

const skills = ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Python', 'Django']

const skillGroups = [
  {
    className: 'mobile-skill-card',
    number: '01',
    icon: 'M',
    title: 'Mobile Development',
    description: 'Building scalable Flutter applications with reusable interfaces, predictable state management, clean architecture, and thoughtful user experiences.',
    tags: ['Flutter', 'Dart', 'Riverpod', 'Clean Architecture', 'Localization', 'Unit Testing'],
  },
  {
    className: 'backend-skill-card',
    number: '02',
    icon: 'API',
    title: 'APIs & Backend',
    description: 'Connecting applications to real-time data, authentication, and reliable backend services.',
    tags: ['REST API', 'Dio', 'Firebase', 'Firestore', 'Django'],
  },
  {
    className: 'web-skill-card',
    number: '03',
    icon: 'W',
    title: 'Web Development',
    description: 'Creating responsive web experiences and backend functionality with modern technologies.',
    tags: ['Python', 'Django', 'JavaScript', 'HTML & CSS', 'Tailwind'],
    learning: 'Currently learning React',
  },
  {
    className: 'tools-skill-card',
    number: '04',
    icon: '⌘',
    title: 'Tools & Collaboration',
    description: 'Collaborating with designers, backend developers, and engineering teams throughout development, testing, and delivery.',
    tags: ['Git & GitHub', 'GitLab', 'Android Studio', 'VS Code', 'Figma', 'Agile', 'CI/CD Collaboration'],
  },
]

function ArrowUpRight() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" /></svg>
}

function DownloadIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v10m0 0 4-4m-4 4L6 9M4 16h12" /></svg>
}

function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Khant Hay Thi Tun home">
        <span className="brand-mark">K</span><span>Khant.</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#work">Work</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#experience">Experience</a>
      </nav>
      <a className="talk-link" href="mailto:khanthaythi@gmail.com">Let&apos;s talk</a>
    </header>
  )
}

function Portrait() {
  return (
    <div className="portrait-stage" aria-label="Portrait of Khant Hay Thi Tun">
      <div className="portrait-glow" aria-hidden="true" />
      <div className="floating-label flutter-label"><span>✦</span> Flutter Developer</div>
      <figure className="portrait-frame"><img src={portrait} alt="Khant Hay Thi Tun" /></figure>
      <div className="floating-label care-label"><span>♥</span> Built with care</div>
    </div>
  )
}

function Hero() {
  const heroRef = useRef(null)
  const [nameIsVisible, setNameIsVisible] = useState(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setNameIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => setNameIsVisible(entry.isIntersecting),
      { threshold: 0.22 },
    )

    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`hero${nameIsVisible ? ' is-visible' : ''}`} id="home" ref={heroRef}>
      <section className="hero-copy" aria-labelledby="hero-title">
        <p className="eyebrow"><span /> Flutter Developer · Mobile Engineer</p>
        <h1 id="hero-title" className="hero-title">
          <span className="hero-name" aria-label="Khant Hay Thi Tun">
            <span className="name-line name-line-single">
              <span><span className="name-first">Khant</span> <span className="name-accent">Hay Thi</span> <span className="name-first">Tun.</span></span>
            </span>
          </span>
          <span className="hero-promise">I build mobile experiences</span>
          <em>that feel effortless.</em>
        </h1>
        <p className="hero-intro">
          I&apos;m a mobile developer specializing in <strong>Flutter</strong>, building polished and maintainable
          applications that solve real-world problems. My experience with <strong>Python, Django, and modern web
          technologies</strong> gives me a broader full-stack perspective.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore My Work <ArrowUpRight /></a>
          <a className="button button-secondary" href="#resume">Download Résumé <DownloadIcon /></a>
        </div>
        <ul className="skill-list" aria-label="Core technologies">
          {skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </section>
      <Portrait />
    </section>
  )
}

function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <header className="skills-heading">
        <div>
          <p className="section-kicker">Skills &amp; expertise</p>
          <h2 id="skills-title">The tools behind <em>my work.</em></h2>
        </div>
        <p className="skills-lead">
          My primary focus is <strong>Flutter development</strong>, supported by backend and web experience that
          helps me understand the complete product—from interface to API.
        </p>
      </header>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className={`skill-card ${group.className}`} key={group.title}>
            <div className="skill-icon" aria-hidden="true">{group.icon}</div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="skill-tags" aria-label={`${group.title} technologies`}>
              {group.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            {group.learning && <span className="learning-label">{group.learning}</span>}
            <span className="skill-number" aria-hidden="true">{group.number}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

const hoteShinScreens = [
  {
    className: 'welcome-project-phone',
    image: hoteShinWelcome,
    alt: 'HoteShin welcome screen',
    label: 'Welcome',
  },
  {
    className: 'dashboard-project-phone',
    image: hoteShinDashboard,
    alt: 'HoteShin real-time dashboard',
    label: 'Real-time dashboard',
  },
  {
    className: 'login-project-phone',
    image: hoteShinLogin,
    alt: 'HoteShin fingerprint login screen',
    label: 'Secure login',
  },
]

const weatherScreens = [
  { image: weatherCurrent, label: 'Weather display', alt: 'Sky Cast cloudy weather screen for Yangon' },
  { image: weatherForecast, label: '5-day forecast', alt: 'Sky Cast detailed five-day forecast screen' },
  { image: weatherSearch, label: 'Search with geolocation', alt: 'Sky Cast city search screen' },
  { image: weatherSnowy, label: 'Weather display', alt: 'Sky Cast snowy weather screen for Berlin' },
]

function WeatherPhone() {
  const [activeScreen, setActiveScreen] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) return undefined

    const interval = window.setInterval(() => {
      setActiveScreen((screen) => (screen + 1) % weatherScreens.length)
    }, 3800)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="weather-stage">
      <div className="weather-orbit" aria-hidden="true" />
      <div className="weather-phone" aria-label="Sky Cast application screens">
        <div className="weather-phone-screen">
          {weatherScreens.map((screen, index) => (
            <img
              className={`weather-slide weather-slide-${index + 1}${index === activeScreen ? ' is-active' : ''}`}
              src={screen.image}
              alt={index === activeScreen ? screen.alt : ''}
              aria-hidden={index !== activeScreen}
              key={screen.label}
            />
          ))}
        </div>
      </div>
      <span className="screen-live-label weather-live-label" aria-live="polite">
        <span key={activeScreen}>{weatherScreens[activeScreen].label}</span>
      </span>
    </div>
  )
}

const inTrackScreenLabels = ['Attendance dashboard', 'Attendance history', 'Leave request']

function InTrackPhone() {
  const [activeScreen, setActiveScreen] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) return undefined

    const interval = window.setInterval(() => {
      setActiveScreen((screen) => (screen + 1) % inTrackScreenLabels.length)
    }, 3800)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="secondary-phone-stage intrack-stage">
      <div className="concept-phone" aria-label="Original portfolio illustrations of iNTrack attendance features">
        <div className="concept-phone-screen">
          <div className={`intrack-concept-slide dashboard-concept${activeScreen === 0 ? ' is-active' : ''}`} aria-hidden={activeScreen !== 0}>
            <div className="intrack-status"><span>9:41</span><i /></div>
            <div className="intrack-blue-head"><span>☰</span><b>●</b><strong>9:41 AM</strong><small>Friday, August 29</small></div>
            <div className="intrack-check-state"><i>✓</i><span>Checked in</span><time>09:02</time></div>
            <div className="intrack-swipe"><b>↗</b><span>Slide to check out</span><i>››</i></div>
            <strong className="intrack-section-title">Attendance History</strong>
            <div className="intrack-stats"><span><b>22</b>Present</span><span><b>2</b>Late</span><span><b>1</b>Leave</span></div>
            <div className="intrack-record"><b>August 29, Friday</b><span>Check-in 09:02 · On time</span></div>
          </div>

          <div className={`intrack-concept-slide history-concept${activeScreen === 1 ? ' is-active' : ''}`} aria-hidden={activeScreen !== 1}>
            <div className="intrack-status light"><span>9:42</span><i /></div>
            <div className="history-head"><span>☰</span><b>Attendance History</b><i>●</i></div>
            <div className="history-filters"><span>August⌄</span><span>2025⌄</span><span>All⌄</span></div>
            <div className="history-week"><b>S</b><b>M</b><b>T</b><b>W</b><b>T</b><b>F</b><b>S</b></div>
            <div className="history-days">{['27','28','29','30','31','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'].map((day, index) => <span className={index === 33 ? 'selected' : index === 11 ? 'leave' : index % 6 === 0 ? 'late' : ''} key={`${day}-${index}`}>{day}</span>)}</div>
            <div className="history-legend"><span>■ Present</span><span>■ Leave</span><span>■ Late</span></div>
            <div className="history-card"><b>August 29, Friday</b><span>Check-in 09:02 · Late</span></div>
          </div>

          <div className={`intrack-concept-slide leave-concept${activeScreen === 2 ? ' is-active' : ''}`} aria-hidden={activeScreen !== 2}>
            <div className="intrack-status light"><span>9:43</span><i /></div>
            <div className="leave-head"><span>☰</span><i>●</i></div>
            <div className="leave-sheet">
              <div className="leave-tabs"><b>Leave Request</b><span>Attendance Request</span></div>
              <label>Leave duration</label><div className="leave-options"><span>◉ Single day</span><span>○ Multiple days</span></div>
              <label>Leave type</label><div className="leave-field">Select type <b>⌄</b></div>
              <label>Leave date</label><div className="leave-field">Select date <b>▣</b></div>
              <label>Leave time</label><div className="leave-options"><span>○ AM</span><span>○ PM</span><span>○ Full day</span></div>
              <label>Reason of leave</label><div className="leave-reason">Write your reason...</div>
            </div>
          </div>
        </div>
      </div>
      <span className="screen-live-label concept-note" aria-live="polite">
        <span key={activeScreen}>Original illustration · {inTrackScreenLabels[activeScreen]}</span>
      </span>
    </div>
  )
}

function Projects() {
  return (
    <section className="projects-section" id="work" aria-labelledby="projects-title">
      <header className="projects-heading">
        <div>
          <p className="section-kicker">Selected Flutter work</p>
          <h2 id="projects-title">Mobile products with <em>purpose.</em></h2>
        </div>
        <p className="projects-lead">
          A selection of <strong>real-world Flutter applications</strong> shaped by thoughtful architecture,
          reliable integrations, and interfaces designed for everyday use.
        </p>
      </header>

      <article className="featured-project">
        <div className="project-copy">
          <span className="project-index">Featured project · 01</span>
          <h3>HoteShin<br />Pawn Shop</h3>
          <p>
            A Flutter application created to digitize loan management, renewals, redemptions, record lookup,
            and overdue reminders for a local business.
          </p>
          <ul className="project-points">
            <li>Real-time records with Cloud Firestore</li>
            <li>QR scanning and biometric authentication</li>
            <li>English and Myanmar localization</li>
          </ul>
          <ul className="project-tags" aria-label="HoteShin technologies">
            {['Flutter', 'Riverpod', 'Firebase', 'Unit Testing'].map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>

        <div className="project-stage" aria-label="HoteShin application screens">
          <div className="project-orbit" aria-hidden="true" />
          <div className="project-floating-label project-ui-label"><span>✦</span> Real application UI</div>
          <div className="project-phones">
            {hoteShinScreens.map((screen) => (
              <figure className={`project-phone ${screen.className}`} key={screen.label}>
                <div className="project-phone-screen">
                  <img src={screen.image} alt={screen.alt} />
                  <figcaption>{screen.label}</figcaption>
                </div>
              </figure>
            ))}
          </div>
          <div className="project-floating-label project-reliable-label"><span>♥</span> Secure &amp; reliable</div>
        </div>
      </article>

      <div className="secondary-projects">
        <article className="secondary-project-card intrack-project-card">
          <div className="secondary-project-copy">
            <span className="project-index">Project · 02</span>
            <span className="project-role">Sole Flutter Developer · Internship Project</span>
            <h3>iNTrack</h3>
            <p>Employee attendance, check-in, leave requests, and profile management in one focused mobile experience.</p>
            <ul className="project-feature-pills" aria-label="iNTrack features">
              {['Attendance', 'Leave Requests', 'Profile'].map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <span className="tech-stack-label">Tech stack</span>
            <ul className="project-tags" aria-label="iNTrack technologies">
              {['Flutter', 'Riverpod', 'REST API'].map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
          <InTrackPhone />
        </article>

        <article className="secondary-project-card weather-project-card">
          <div className="secondary-project-copy">
            <span className="project-index">Project · 03</span>
            <span className="project-role project-role-placeholder" aria-hidden="true">Sole Flutter Developer · Internship Project</span>
            <h3>Sky Cast</h3>
            <p>City search, current conditions, and detailed forecasts presented in a colorful Flutter weather experience.</p>
            <ul className="project-feature-pills" aria-label="Sky Cast features">
              {['Geolocation Search', 'Weather Display', '5-Day Forecast'].map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <span className="tech-stack-label">Tech stack</span>
            <ul className="project-tags" aria-label="Sky Cast technologies">
              {['Flutter', 'Dart', 'Riverpod', 'Dio', 'REST API', 'Clean Architecture', 'Performance', 'State Management'].map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
          <WeatherPhone />
        </article>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}
