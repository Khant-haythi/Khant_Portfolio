import portrait from './assets/haythi-portrait.jpg'
import hoteShinDashboard from './assets/hote-shin-dashboard.jpg'
import hoteShinLogin from './assets/hote-shin-login.jpg'
import hoteShinWelcome from './assets/hote-shin-welcome.jpg'

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
