import Link from 'next/link';

import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h2>La page n&apos;existe pas.</h2>
            <Link href="/">Retour à l&apos;accueil</Link>
        </div>
    );
}
