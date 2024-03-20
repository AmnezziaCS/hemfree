import Link from 'next/link';
import { Fragment } from 'react';

import styles from './navbar.module.css';

export const Navbar = ({ children }: { children: React.ReactNode }) => {
    return (
        <Fragment>
            <nav className={styles.navbar}>
                <Link href="/" className={styles.navbarLink}>
                    <h4>Home</h4>
                </Link>
                <Link href="/login" className={styles.navbarLink}>
                    <h4>Login</h4>
                </Link>
                <Link href="/signup" className={styles.navbarLink}>
                    <h4>Sign up</h4>
                </Link>
                <details className={styles.dropdown}>
                    <summary className={styles.dropdownTitle}></summary>
                    <Link href="#infos" className={styles.navP}>
                        A propos
                    </Link>
                    <Link href="#contact" className={styles.navP}>
                        Contact
                    </Link>
                    <Link href="#serveurs" className={styles.navP}>
                        Serveurs
                    </Link>
                </details>
            </nav>
            {children}
        </Fragment>
    );
};
