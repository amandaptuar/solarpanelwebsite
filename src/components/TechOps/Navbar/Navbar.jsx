import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Solutions', hasDropdown: true },
  { label: 'Property Types', hasDropdown: true },
  { label: 'How It Works', hasDropdown: false },
  { label: 'Markets', hasDropdown: false },
  { label: 'Resources', hasDropdown: true },
  { label: 'Company', hasDropdown: true },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <div className={styles.logoIcon}>TG</div>
          <div className={styles.logoText}>TECHOPS-GLOBAL</div>
        </a>

        {/* Nav Links */}
        <ul className={styles.nav}>
          {navLinks.map((link) => (
            <li key={link.label} className={styles.navItem}>
              {link.label}
              {link.hasDropdown && (
                <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className={styles.ctaBtn}>GET SITE ASSESSMENT →</button>

        {/* Hamburger */}
        <button className={styles.hamburger} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
