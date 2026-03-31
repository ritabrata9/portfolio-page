import { meta } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.badge}>
        <span className={styles.dot} />
        Available for internships
      </div>

      <h1 className={styles.name}>
        {meta.name.split(' ').map((word, i) => (
          <span key={i} className={i === 1 ? styles.accent : ''}>{word} </span>
        ))}
      </h1>

      <p className={styles.role}>{meta.role}</p>
      <p className={styles.summary}>{meta.summary}</p>

      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Institution</span>
          <span className={styles.metaValue}>{meta.institution}</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Degree</span>
          <span className={styles.metaValue}>{meta.degree}</span>
        </div>
        
        <div className={styles.divider} />
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Batch</span>
          <span className={styles.metaValue}>{meta.year}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <a href="#projects" className={styles.btnPrimary}>View Projects</a>
        <a
          href={meta.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnGhost}
        >
          GitHub ↗
        </a>
        <a
          href={meta.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnGhost}
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  )
}
