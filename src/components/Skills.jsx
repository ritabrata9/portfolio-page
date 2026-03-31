import { useState } from 'react'
import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

const categories = ['All', 'Language', 'Framework', 'Tool', 'Core']

export default function Skills() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? skills
    : skills.filter(s => s.category === active)

  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>02 — Skills</span>
          <h2 className={styles.title}>Technical Proficiency</h2>
        </div>

        <div className={styles.filters}>
          {categories.map(c => (
            <button
              key={c}
              className={`${styles.filter} ${active === c ? styles.filterActive : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map(skill => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillTop}>
                <span className={styles.skillName}>{skill.name}</span>
                {/* <span className={styles.skillPct}>{skill.level}%</span> */}
              </div>
              
              <span className={styles.skillCat}>{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
