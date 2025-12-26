'use client'

import { useState } from 'react'
import styles from './CTA.module.css'

export default function CTA() {
  const [email, setEmail] = useState('')

  return (
    <section id="contact" className={styles.cta}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Get Started?</h2>
          <p className={styles.subtitle}>
            Join cloud architects, SaaS leaders, DevOps teams, and SREs who trust 
            JovianX to power their cloud services.
          </p>
          <div className={styles.ctaForm}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <button className={styles.button}>Start Free Trial</button>
          </div>
          <p className={styles.note}>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}

