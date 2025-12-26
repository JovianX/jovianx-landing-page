'use client'

import { useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [email, setEmail] = useState('')

  return (
    <section className={styles.hero}>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.navContent}>
            <div className={styles.logo}>JovianX</div>
            <div className={styles.navLinks}>
              <a href="#features">Features</a>
              <a href="#benefits">Benefits</a>
              <a href="#contact" className={styles.ctaButton}>Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className={styles.heroWrapper}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Build and Operate SaaS Offerings
              <span className={styles.gradient}> Effortlessly</span>
            </h1>
            <p className={styles.subtitle}>
              The complete platform for cloud architects, SaaS leaders, DevOps, and SREs 
              to build, manage, and scale fully managed cloud services. Includes powerful 
              WhatsApp chatbots for customer engagement and support.
            </p>
            <div className={styles.ctaSection}>
              <div className={styles.emailInput}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className={styles.primaryButton}>Start Free Trial</button>
              </div>
              <p className={styles.ctaNote}>No credit card required • 14-day free trial</p>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80" 
                alt="Modern cloud services and SaaS platform"
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroGradient}></div>
    </section>
  )
}

