import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, CheckCircle2, ChevronDown, ExternalLink, HardHat, Mail, MapPin, Menu, Phone, ShieldCheck, Sparkles, X } from 'lucide-react'
import './styles.css'

const siteSkills = ['Site supervision', 'Construction monitoring', 'Work progress tracking', 'Material inspection', 'Quality checking', 'Safety monitoring', 'Site coordination']
const peopleSkills = ['Communication', 'Teamwork', 'Leadership', 'Time management', 'Problem solving', 'Quick learning', 'Adaptability']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className="topbar">
      <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark">GV</span><span>G. Varshini</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-cta" href="mailto:varshini4008@gmail.com">Let&apos;s connect <ArrowUpRight size={16}/></a>
      </nav>
    </header>
    <main id="top">
      <section className="hero section-pad">
        <div className="hero-copy"><div className="eyebrow"><span className="pulse-dot"/> Available for opportunities</div><h1>Building with <em>precision.</em><br/>Leading with purpose.</h1><p className="hero-intro">I&apos;m Varshini, a Site Supervisor Engineer focused on safe, efficient, and high-quality construction operations.</p><div className="hero-actions"><a className="button button-primary" href="mailto:varshini4008@gmail.com">Start a conversation <ArrowUpRight size={17}/></a><a className="button button-quiet" href="#experience">Explore my work <ChevronDown size={17}/></a></div><div className="hero-meta"><span><MapPin size={16}/> Trichy, India</span><span className="meta-divider"/><span><ShieldCheck size={16}/> 2 years on site</span></div></div>
        <div className="hero-visual"><div className="portrait-frame">{!imageFailed ? <img src="/profile-image.png" alt="G. Varshini" onError={() => setImageFailed(true)}/> : <div className="portrait-fallback"><span>GV</span><small>Profile image</small></div>}<div className="portrait-caption"><span>G. Varshini</span><span>Site Supervisor Engineer</span></div></div><div className="floating-note note-top"><Sparkles size={17}/><span>Detail-oriented<br/><strong>by nature</strong></span></div><div className="floating-note note-bottom"><span className="note-number">02</span><span>Years of<br/><strong>experience</strong></span></div></div>
      </section>
      <section className="ticker"><div><span>01</span> Site coordination</div><div><span>02</span> Quality & safety</div><div><span>03</span> Progress tracking</div><div><span>04</span> Team leadership</div></section>
      <section className="about section-pad" id="about"><div className="section-kicker">01 / About me</div><div className="about-grid"><h2>Turning plans<br/><span>into progress.</span></h2><div className="about-body"><p className="lead">I bring structure, care, and clear communication to every stage of a construction project.</p><p>With experience supervising site activities and coordinating with workers, engineers, and other site personnel, I help projects move forward safely and on schedule. I believe strong site work begins with attention to the small details.</p><div className="stats-row"><div><strong>8.1</strong><span>Current CGPA</span></div><div><strong>2029</strong><span>Expected graduation</span></div><div><strong>3</strong><span>Core strengths</span></div></div></div></div></section>
      <section className="experience section-pad" id="experience"><div className="section-kicker">02 / Experience</div><div className="experience-heading"><h2>On site,<br/><span>in action.</span></h2><p>Practical experience grounded in coordination, quality, and getting the work done right.</p></div><article className="experience-card"><div className="experience-top"><div><span className="role-label">Professional experience</span><h3>Construction Supervision</h3></div><span className="experience-period">2 years</span></div><div className="experience-content"><div className="experience-icon"><HardHat size={28}/></div><div className="experience-description"><p>Supervised and monitored construction activities on site, coordinating daily work across teams while keeping quality and safety at the center.</p><ul><li>Coordinated with workers, engineers, and site personnel.</li><li>Monitored daily progress and supported timely completion.</li><li>Checked materials and work quality against site requirements.</li><li>Maintained basic site records and progress information.</li><li>Assisted in identifying and resolving site-related issues.</li></ul></div></div></article></section>
      <section className="skills section-pad" id="skills"><div className="section-kicker">03 / Capabilities</div><div className="skills-grid"><div><h2>What I bring<br/><span>to the site.</span></h2><p className="lead">A practical mix of construction knowledge, organization, and people skills.</p></div><div className="skill-list"><h3>Construction & site</h3>{siteSkills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span><strong>{skill}</strong><CheckCircle2 size={16}/></div>)}</div><div className="skill-list secondary-skills"><h3>Professional strengths</h3>{peopleSkills.map(skill => <div className="soft-skill" key={skill}><span/>{skill}</div>)}</div></div></section>
      <section className="education section-pad"><div className="education-card"><div><div className="section-kicker">04 / Education</div><h2>Learning the<br/><span>full picture.</span></h2></div><div className="education-detail"><div className="degree-year">2029</div><div><h3>Bachelor of Engineering</h3><p>K. Ramakrishnani College of Technology</p><span className="grade">8.1 CGPA</span></div></div><div className="education-note">Construction knowledge that connects classroom thinking with real-world execution.</div></div></section>
      <section className="contact section-pad" id="contact"><div className="contact-inner"><div className="section-kicker">05 / Contact</div><h2>Let&apos;s build something<br/><em>solid.</em></h2><p>Have a project, opportunity, or conversation in mind? I&apos;d love to hear from you.</p><a className="button button-light" href="mailto:varshini4008@gmail.com">varshini4008@gmail.com <ArrowUpRight size={17}/></a></div><div className="contact-details"><a href="tel:6380394131"><Phone size={18}/> 6380394131</a><a href="mailto:varshini4008@gmail.com"><Mail size={18}/> varshini4008@gmail.com</a><a href="#top"><ExternalLink size={18}/> Back to top</a></div></section>
    </main><footer><span>© 2026 G. Varshini</span><span>Built with care & intention</span><a href="#top" aria-label="Back to top"><ChevronDown size={16} className="rotate-up"/></a></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
