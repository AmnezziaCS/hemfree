import Link from 'next/link';
import { Fragment } from 'react';

import styles from './footer.module.css';

export const Footer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Fragment>
            {children}
            <footer className={styles.footer}>
                <div className={styles.itemsContainer}>
                    <h2>Contact us</h2>
                    <p>Vous pouvez nous retrouver sur</p>
                    <div className={styles.socialContainer}>
                        <button type="button">
                            <Link href="https://www.facebook.com/profile.php?id=61556567765376">
                                Facebook
                            </Link>
                        </button>
                        <button type="button">
                            <Link
                                href="https://twitter.com/users
                            "
                            >
                                Twitter
                            </Link>
                        </button>
                        <button type="button">
                            <Link href="https://www.instagram.com/hemfree/">
                                Instagram
                            </Link>
                        </button>
                    </div>
                    <a href="https://myaccount.google.com/u/5/?hl=fr&utm_source=OGB&utm_medium=act&pli=1">
                        Hemfree.minecraft@gmail.com
                    </a>
                    <p>&copy; 2024 - Hemfree</p>
                </div>
            </footer>
        </Fragment>
    );
};
