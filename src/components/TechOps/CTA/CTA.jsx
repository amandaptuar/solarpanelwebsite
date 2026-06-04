import styles from './CTA.module.css';

export default function CTA() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <div className={styles.titleLine1}>Your Roof. Our Technology.</div>
                    <div className={styles.titleLine2}>Shared Success.</div>

                    <div className={styles.checks}>
                        {['Zero Capex', 'Zero Risk', 'Maximum Reward'].map((item) => (
                            <div key={item} className={styles.checkRow}>
                                <div className={styles.checkCircle}>✓</div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.right}>
                    <button className={styles.ctaBtn}>
                        GET YOUR FREE SITE ASSESSMENT →
                    </button>
                </div>
            </div>
        </section>
    );
}
