import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>03 — Projects</span>
          <h2 className={styles.title}>Selected Work</h2>
        </div>

        <div className={styles.list}>
          {projects.map((p, i) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.cardLeft}>
                <span className={styles.index}>0{i + 1}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.extLink}
                      aria-label="View project"
                    >
                      ↗
                    </a>
                  )}
                </div>
                <p className={styles.description}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
