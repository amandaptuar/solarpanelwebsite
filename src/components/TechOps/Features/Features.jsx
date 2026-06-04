import styles from './Features.module.css';

const features = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        ),
        title: 'Lower Operating Costs',
        desc: 'Slash electric bills by shaving peak demand.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        title: 'New Revenue Stream',
        desc: 'Long-term lease payments with no upfront cost.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
        ),
        title: 'ESG & Sustainability Leadership',
        desc: 'Strengthen sustainability goals and reporting.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Energy Security & Resilience',
        desc: 'On-site power reduces grid dependency.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        ),
        title: 'Enhance Property Value',
        desc: 'Increase NOI and asset valuation.',
    },
];

export default function Features() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <h2 className={styles.title}>DESIGNED FOR WAREHOUSE &amp; LOGISTICS LEADERS</h2>
                </div>
                <div className={styles.grid}>
                    {features.map((f) => (
                        <div key={f.title} className={styles.card}>
                            <div className={styles.cardIcon}>{f.icon}</div>
                            <div className={styles.cardTitle}>{f.title}</div>
                            <div className={styles.cardDesc}>{f.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
