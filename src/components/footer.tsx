import { Fragment } from 'react';

import styles from './footer.module.css';

export const Footer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Fragment>
            {children}
            <footer className={styles.footer}>
                <div className={styles.itemsContainer}>
                    <h2>Contact us</h2>
                    <a href="https://myaccount.google.com/u/5/?hl=fr&utm_source=OGB&utm_medium=act&pli=1">
                        Hemfree.minecraft@gmail.com
                    </a>
                    <a href="link">123-456-7890</a>
                    <p>&copy; 2024 - Hemfree</p>
                </div>
            </footer>
        </Fragment>
    );
};
