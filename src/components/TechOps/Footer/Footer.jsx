import styles from './Footer.module.css';

const solutions = ['Warehouse & Logistics', 'Retail', 'Parking Lots', 'Battery Storage', 'VPP & Markets'];
const propertyTypes = ['Industrial', 'Commercial', 'Retail', 'Logistics', 'Multi-Tenant'];
const company = ['About Us', 'Leadership', 'Contact Us'];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                {/* Brand */}
                <div className={styles.col}>
                    <div className={styles.brand}>
                        <div className={styles.brandIcon}>TG</div>
                        <div className={styles.brandText}>TECHOPS-GLOBAL</div>
                    </div>
                    <p className={styles.brandDesc}>
                        AI-powered energy infrastructure developer specializing in behind-the-meter
                        solar, battery storage, and VPP solutions across energy markets.
                    </p>
                    <div className={styles.socials}>
                        {['in', 'X', '▶', '⊡'].map((s) => (
                            <button key={s} className={styles.socialBtn}>{s}</button>
                        ))}
                    </div>
                </div>

                {/* Solutions */}
                <div className={styles.col}>
                    <div className={styles.colTitle}>SOLUTIONS</div>
                    <ul className={styles.colLinks}>
                        {solutions.map((l, i) => (
                            <li key={l}><a href="#" className={i === 0 ? styles.active : ''}>{l}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Property Types */}
                <div className={styles.col}>
                    <div className={styles.colTitle}>PROPERTY TYPES</div>
                    <ul className={styles.colLinks}>
                        {propertyTypes.map((l) => (
                            <li key={l}><a href="#">{l}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Company + Contact */}
                <div className={styles.col}>
                    <div className={styles.colTitle}>COMPANY</div>
                    <ul className={styles.colLinks}>
                        {company.map((l) => (
                            <li key={l}><a href="#">{l}</a></li>
                        ))}
                    </ul>

                    <div style={{ marginTop: '28px' }}>
                        <div className={styles.colTitle}>CONTACT</div>
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>✉</span>
                            <span>info@techops-global.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>📞</span>
                            <span>USA: +1 (240) 351-3209</span>
                        </div>
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>📞</span>
                            <span>SL: +232 33 448 065</span>
                        </div>
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>📍</span>
                            <span>Clinton, MD 20744 | Freetown, SL</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className={styles.bottomBar}>
                <div className={styles.copyright}>
                    © 2025 TechOps Global. All rights reserved.
                </div>
                <div className={styles.legalLinks}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
