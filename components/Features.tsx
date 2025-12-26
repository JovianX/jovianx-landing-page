import styles from './Features.module.css'

const features = [
  {
    icon: '⚡',
    title: 'Application Management',
    description: 'Comprehensive tools to manage your applications throughout their lifecycle with ease.',
  },
  {
    icon: '💳',
    title: 'Payments & Billing',
    description: 'Integrated payment processing and flexible billing solutions for your SaaS offerings.',
  },
  {
    icon: '🔄',
    title: 'Subscription Management',
    description: 'Handle subscriptions, upgrades, downgrades, and cancellations seamlessly.',
  },
  {
    icon: '🏢',
    title: 'Multi-Tenancy',
    description: 'Built-in multi-tenancy support to serve multiple customers from a single platform.',
  },
  {
    icon: '🚀',
    title: 'Lifecycle Management',
    description: 'Streamline application deployment, updates, and versioning with automated workflows.',
  },
  {
    icon: '📊',
    title: 'Monitoring & Logging',
    description: 'Real-time monitoring, alerting, and comprehensive logging for your cloud services.',
  },
  {
    icon: '💬',
    title: 'WhatsApp Chatbots',
    description: 'Build and deploy intelligent WhatsApp chatbots to engage customers, provide support, and automate interactions.',
  },
]

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Everything You Need to Build SaaS</h2>
          <p className={styles.subtitle}>
            A comprehensive management console with all the services you need to build 
            and operate fully managed cloud services.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

