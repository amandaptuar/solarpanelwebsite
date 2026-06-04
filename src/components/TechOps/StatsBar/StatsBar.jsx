import styles from './StatsBar.module.css';

const stats = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <polyline points="16 2 12 7 8 2" />
            </svg>
        ),
        value: '100,000+',
        label: 'SQ. FT. ROOF SPACE MONETIZED',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        value: '30–50%',
        label: 'REDUCTION IN PEAK DEMAND COSTS',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        value: '15–20',
        label: 'YEAR PREDICTABLE LEASE INCOME',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        value: 'ZERO',
        label: 'CAPEX. ZERO RISK. ALL VALUE.',
    },
];

export default function StatsBar() {
    return (
        <div className={styles.bar}>
            <div className={styles.inner}>
                {stats.map((s) => (
                    <div key={s.label} className={styles.stat}>
                        <div className={styles.statIcon}>{s.icon}</div>
                        <div className={styles.statText}>
                            <div className={styles.statValue}>{s.value}</div>
                            <div className={styles.statLabel}>{s.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
