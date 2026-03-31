import { meta } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© {new Date().getFullYear()} {meta.name}</span>
      <span className={styles.built}>Built with React + Vite</span>
    </footer>
  )
}
