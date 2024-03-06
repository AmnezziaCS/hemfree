import styles from './page.module.css';

export default function Home() {
    return (
        <main>
            <section className={styles.titleContainer}>
                <h2>Hemfree</h2>
                <h3>Où construire prend un autre goût</h3>
            </section>
            <section className={styles.serversContainer}>
                <h3>Nos serveurs</h3>
                <p>Choisissez votre serveur</p>
                <div>
                    <a href="/servers/1" className={styles.serversContainer}>
                        Serveur 1
                    </a>
                    <a href="/servers/2" className={styles.serversContainer}>
                        Serveur 2
                    </a>
                </div>
            </section>
        </main>
    );
}
