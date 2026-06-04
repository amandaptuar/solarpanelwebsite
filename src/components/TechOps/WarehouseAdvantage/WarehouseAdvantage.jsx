import styles from './WarehouseAdvantage.module.css';

const features = [
    {
        icon: '🛡',
        title: 'ZERO ROOF PENETRATIONS',
        desc: 'Ballasted design protects your roof integrity and warranties.',
    },
    {
        icon: '⚙',
        title: 'NO OPERATIONAL DISRUPTION',
        desc: 'Installation without interrupting daily operations.',
    },
    {
        icon: '⚡',
        title: 'INSTANT MICRO-POWER PLANT',
        desc: 'Turns 100,000+ sq. ft. of roof into a localized energy engine.',
    },
];

export default function WarehouseAdvantage() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                {/* Left */}
                <div className={styles.left}>
                    <p className={styles.label}>THE WAREHOUSE ADVANTAGE</p>
                    <h2 className={styles.h2}>
                        Monetize Every Square Foot of Your Roof—Without Disruption.
                    </h2>
                    <p className={styles.body}>
                        Our lightweight, ballasted solar arrays and containerized battery systems
                        are engineered for industrial rooftops and logistics facilities. No roof
                        penetrations. No compromise to your warranties. Just pure performance and value.
                    </p>

                    <div className={styles.features}>
                        {features.map((f) => (
                            <div key={f.title} className={styles.featureItem}>
                                <div className={styles.featureIcon}>{f.icon}</div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{f.title}</div>
                                    <div className={styles.featureDesc}>{f.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right */}
                <div className={styles.right}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200"
                            alt="Solar panels on warehouse roof"
                            className={styles.image}
                        />

                        {/* Annotation top-right */}
                        <div className={`${styles.annotation} ${styles.topRight}`}>
                            <div className={styles.annotationTitle}>
                                <span className={styles.annotationDot} />
                                LIGHTWEIGHT BALLASTED SOLAR ARRAYS
                            </div>
                            <div className={styles.annotationDesc}>
                                No roof penetrations. Engineered for flat roofs. Maintains all warranties.
                            </div>
                        </div>

                        {/* Annotation bottom-left */}
                        <div className={`${styles.annotation} ${styles.bottomLeft}`}>
                            <div className={styles.annotationTitle}>
                                <span className={styles.annotationDot} />
                                CONTAINERIZED BATTERY STORAGE
                            </div>
                            <div className={styles.annotationDesc}>
                                Plug-and-play systems. Scalable. Safe. Powerful. Installed at grade.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
