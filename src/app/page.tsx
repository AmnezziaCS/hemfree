import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

export default function Home() {
    return (
        <main>
            <section className={styles.titleContainer}>
                <h2>Hemfree</h2>
                <p>Où construire prend un autre goût</p>
                <Image
                    src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2024/02/minecraft-houses-550x309.jpg"
                    alt="Image 1"
                    width={500}
                    height={300}
                    className={styles.image}
                />
                <Image
                    src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2024/01/minecraft-house-cherry-550x309.jpg"
                    alt="Image 2"
                    width={500}
                    height={300}
                    className={styles.image}
                />
            </section>
            <section id="infos" className={styles.infos}>
                <h3 className={styles.left_align}></h3>
                <p className={styles.right_align}>
                    Hemfree est votre guichet unique pour des serveurs Minecraft
                    performants et fiables. Que vous soyez un joueur solo à la
                    recherche un espace privé pour construire votre monde de
                    rêve ou un propriétaire de communauté cherchant à offrir une
                    expérience de jeu optimale à vos membres, nous avons la
                    solution parfaite pour vous.
                </p>
                <ul className={styles.desc}>
                    <li>Performances garanties</li>
                    <li>Support 24/7</li>
                    <li>Anti-DDoS</li>
                    <li>Modpacks</li>
                    <li>Backups automatiques</li>
                </ul>
            </section>
            <section id="serveurs" className={styles.serversContainer}>
                <h3>Nos serveurs</h3>
                <p>Choisissez votre serveur</p>
                <div>
                    <Link href="/servers/1" className={styles.serveur}>
                        Serveur 1
                    </Link>
                    <Link href="/servers/2" className={styles.serveur}>
                        Serveur 2
                    </Link>
                </div>
            </section>
            <section className={styles.infos}>
                <h3 className={styles.left_align}></h3>
                <p className={styles.right_align}>
                    Notre objectif est de fournir à nos clients la meilleure
                    expérience possible en matière de serveurs Minecraft. Nous
                    sommes passionnés par Minecraft et nous nous engageons à
                    offrir à nos clients des serveurs performants, fiables et
                    faciles à utiliser. nhésitez pas à nous contacter pour plus
                    dinformations ou pour obtenir un devis gratuit.
                </p>
            </section>
            <section className={styles.tt}>
                <div className={styles.testimonials}>
                    <div className={styles.testimonial}>
                        <p>
                            Jutilise Hemfree depuis quelques mois maintenant et
                            je ne pourrais pas être plus satisfait du service.
                            Le support est toujours disponible quand j&apos;en
                            ai besoin et les serveurs sont toujours
                            opérationnels. Je recommanderais Hemfree à tous ceux
                            qui recherchent un hébergeur de serveur Minecraft
                            fiable.
                        </p>
                        <h3>- Yasser</h3>
                    </div>
                    <div className={styles.testimonial}>
                        <p>
                            Hemfree est le meilleur hébergeur de serveur
                            Minecraft que j&apos;ai jamais utilisé. Les serveurs
                            sont rapides, fiables et le support est excellent.
                            Je recommanderais Hemfree à tous ceux qui
                            recherchent un serveur Minecraft de haute qualité.
                        </p>
                        <h3>- Khadija</h3>
                    </div>
                </div>
            </section>
            <section className={styles.fin}>
                <p>Hemfree, construisez votre monde Minecraft !</p>
            </section>
        </main>
    );
}
