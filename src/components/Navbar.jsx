import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#about" className={styles.logo}>RB<span>.</span></a>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} className={styles.link}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className={styles.cta}>Hire me</a>
    </nav>
  )
}
