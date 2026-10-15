import portrait from './assets/haythi-portrait.jpg'

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
  return (
    <section className="hero" id="home">
      <section className="hero-copy" aria-labelledby="hero-title">
        <p className="eyebrow"><span /> Hello, I&apos;m Khant Hay Thi Tun</p>
        <h1 id="hero-title">I build mobile experiences<em>that feel effortless.</em></h1>
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

export default function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <Skills />
      </main>
    </div>
  )
}
