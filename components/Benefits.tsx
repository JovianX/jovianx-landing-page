import styles from './Benefits.module.css'

const benefits = [
  {
    title: 'For Cloud Architects',
    description: 'Design and implement scalable cloud architectures with built-in best practices.',
  },
  {
    title: 'For SaaS Business Leaders',
    description: 'Accelerate time-to-market and reduce operational overhead with integrated tools.',
  },
  {
    title: 'For DevOps Teams',
    description: 'Streamline CI/CD pipelines and automate infrastructure management.',
  },
  {
    title: 'For SREs',
    description: 'Monitor, maintain, and optimize your services with comprehensive observability.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className={styles.benefits}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              Built for <span className={styles.highlight}>Your Team</span>
            </h2>
            <p className={styles.subtitle}>
              JovianX is designed specifically for the teams that build and operate 
              modern SaaS platforms. Whether you're architecting cloud solutions, 
              leading a SaaS business, managing DevOps, or ensuring reliability, 
              we've got you covered. Plus, integrate WhatsApp chatbots to enhance 
              customer engagement and support.
            </p>
          </div>

          <div className={styles.grid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

