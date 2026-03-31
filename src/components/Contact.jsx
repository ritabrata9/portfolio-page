import { meta } from '../data/portfolio'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>05 — Contact</span>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.subtitle}>
            Open to internships, freelance projects, and collaborations.
            If you have something interesting in mind, reach out.
          </p>
        </div>

        <div className={styles.grid}>
          <a href={`mailto:${meta.email}`} className={styles.contactCard}>
            <span className={styles.contactType}>Email</span>
            <svg
              className={styles.contactIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4 6h16v12H4V6zm0 0 8 6 8-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <span className={styles.contactValue}>{meta.email}</span>
            <span className={styles.arrow}>→</span>
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <span className={styles.contactType}>LinkedIn</span>
            <svg
              className={styles.contactIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                fill="currentColor"
              />
            </svg>
            <span className={styles.contactValue}>ritabrata-basak</span>
            <span className={styles.arrow}>→</span>
          </a>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <span className={styles.contactType}>GitHub</span>
            <svg
              className={styles.contactIcon}
              viewBox="0 0 19 19"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844"
                clipRule="evenodd"
              />
            </svg>
            <span className={styles.contactValue}>ritabrata9</span>
            <span className={styles.arrow}>→</span>
          </a>
        </div>

        
      </div>
    </section>
  )
}
