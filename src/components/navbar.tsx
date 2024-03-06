import { Fragment } from 'react';

import styles from './navbar.module.css';

export const Navbar = ({ children }: { children: React.ReactNode }) => {
    return (
        <Fragment>
            <nav className={styles.navbar}>
                <a href="/" className={styles.navbarLink}>
                    Home
                </a>
                <a href="/login" className={styles.navbarLink}>
                    Login
                </a>
                <a href="/signup" className={styles.navbarLink}>
                    Sign Up
                </a>
            </nav>
            {children}
        </Fragment>
    );
};
