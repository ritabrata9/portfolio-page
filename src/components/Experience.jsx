import { experience } from '../data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>04 — Experience</span>
          <h2 className={styles.title}>Leadership & Activities</h2>
        </div>

        <div className={styles.list}>
          {experience.map((e) => (
            <div key={e.org} className={styles.item}>
              <div className={styles.itemLeft}>
                <span className={styles.period}>{e.period}</span>
              </div>
              <div className={styles.itemRight}>
                <h3 className={styles.org}>{e.org}</h3>
                <p className={styles.role}>{e.role}</p>
                <ul className={styles.points}>
                  {e.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
