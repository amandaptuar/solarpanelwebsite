import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bg} />
            <div className={styles.overlay} />

            <div className={styles.inner}>
                {/* Main content */}
                <div className={styles.content}>
                    {/* Breadcrumb */}
                    <div className={styles.breadcrumb}>
                        <span>Home</span>
                        <span>›</span>
                        <span>Solutions</span>
                        <span>›</span>
                        <span className={styles.active}>Warehouse &amp; Logistics</span>
                    </div>

                    {/* Heading */}
                    <h1 className={styles.h1}>
                        Turn Structural Dead Weight into an{' '}
                        <span className={styles.h1Orange}>Operational Asset.</span>
                    </h1>

                    <p className={styles.subtitle}>
                        We transform massive flat-roof warehouses into high-performing energy
                        assets—at zero cost to you. Behind-the-meter solar, battery storage systems
                        deliver immediate savings and long-term revenue.
                    </p>

                    <div className={styles.buttons}>
                        <button className={styles.btnPrimary}>GET SITE ASSESSMENT →</button>
                        <button className={styles.btnSecondary}>SEE HOW IT WORKS ⊙</button>
                    </div>
                </div>

                {/* Floating card */}
                <div className={styles.floatingCard}>
                    <div className={styles.cardRow}>
                        <div className={`${styles.cardIcon} ${styles.green}`}>$</div>
                        <div>
                            <div className={styles.cardLabel}>ZERO CAPEX</div>
                            <div className={styles.cardDesc}>We fund, build, own &amp; operate.</div>
                        </div>
                    </div>

                    <div className={styles.cardRow}>
                        <div className={`${styles.cardIcon} ${styles.orange}`}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                <polyline points="16 7 22 7 22 13" />
                            </svg>
                        </div>
                        <div>
                            <div className={styles.cardLabel}>DUAL INCOME STREAM</div>
                            <div className={styles.cardDesc}>Lease income + Energy savings &amp; market revenues.</div>
                        </div>
                    </div>

                    <div className={styles.cardRow}>
                        <div className={`${styles.cardIcon} ${styles.blue}`}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                        </div>
                        <div>
                            <div className={styles.cardLabel}>PJM MARKET EXPOSURE</div>
                            <div className={styles.cardDesc}>Tap into billions in grid-balancing opportunities.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
