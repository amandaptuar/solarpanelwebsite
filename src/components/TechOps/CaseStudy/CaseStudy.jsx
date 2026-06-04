import styles from './CaseStudy.module.css';

export default function CaseStudy() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                {/* Left: Case Study */}
                <div className={styles.caseStudy}>
                    <p className={styles.csLabel}>CASE STUDY</p>
                    <h3 className={styles.csTitle}>Logistics Facility – New Jersey Turnpike</h3>

                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                        alt="NJ Logistics Facility Aerial"
                        className={styles.csImage}
                    />

                    <div className={styles.csBullets}>
                        {[
                            '$380,000+ annual energy savings',
                            '$250,000 annual lease income',
                            '42% peak demand cost reduction',
                            'Zero operational impact',
                        ].map((text) => (
                            <div key={text} className={styles.csBullet}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <button className={styles.csBtn}>VIEW CASE STUDY →</button>
                </div>

                {/* Right: How It Works */}
                <div className={styles.howItWorks}>
                    <p className={styles.hwLabel}>HOW IT WORKS</p>

                    <div className={styles.steps}>
                        {[
                            {
                                num: 1,
                                title: 'Site Assessment',
                                desc: 'We evaluate your roof, load profile, and utility costs.',
                            },
                            {
                                num: 2,
                                title: 'Custom System Design',
                                desc: 'Engineered for maximum performance without roof penetrations.',
                            },
                            {
                                num: 3,
                                title: 'Build & Commission',
                                desc: 'We install solar and storage with zero disruption.',
                            },
                            {
                                num: 4,
                                title: 'Operate & Optimize',
                                desc: 'AI-powered dispatch maximizes savings, revenue, and performance.',
                            },
                        ].map((step) => (
                            <div key={step.num} className={styles.step}>
                                <div className={styles.stepNum}>{step.num}</div>
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>{step.title}</div>
                                    <div className={styles.stepDesc}>{step.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
