import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>JovianX</div>
          <div className={styles.links}>
            <a href="#features">Features</a>
            <a href="#benefits">Benefits</a>
            <a href="#contact">Contact</a>
            <a href="https://docs.jovianx.com" target="_blank" rel="noopener noreferrer">Documentation</a>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} JovianX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

