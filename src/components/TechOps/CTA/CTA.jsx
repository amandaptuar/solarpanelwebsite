import { Link } from 'react-router-dom';
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
                    <Link to="/site-assessment" className={styles.ctaBtn} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        GET YOUR FREE SITE ASSESSMENT →
                    </Link>
                </div>
            </div>
        </section>
    );
}
