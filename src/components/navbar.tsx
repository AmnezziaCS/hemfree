import { Fragment } from 'react';

import styles from './navbar.module.css';

export const Navbar = ({ children }: { children: React.ReactNode }) => {
    return (
        <Fragment>
            <nav className={styles.navbar}>
                <a href="/" className={styles.navbarLink}>
                    <h4>Home</h4>
                </a>
                <a href="/login" className={styles.navbarLink}>
                    <h4>Login</h4>
                </a>
                <a href="/signup" className={styles.navbarLink}>
                    <h4>Sign up</h4>
                </a>
                <details className={styles.dropdown}>
                    <summary className={styles.dropdownTitle}></summary>
                    <a href="#infos" className={styles.navP}>
                        A propos
                    </a>
                    <a href="#contact" className={styles.navP}>
                        Contact
                    </a>
                    <a href="#serveurs" className={styles.navP}>
                        Serveurs
                    </a>
                </details>
            </nav>
            {children}
        </Fragment>
    );
};
