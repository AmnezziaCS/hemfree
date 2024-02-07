import { Fragment } from 'react';

import styles from './page.module.css';

export default function Home() {
    return (
        <Fragment>
            <head>
                <title>Hemfree</title>
            </head>
            <body>
                <header>
                    <h1>Hemfree</h1>
                    <nav>
                        <a href="/login">Login</a>
                        <a href="/signup">Sign Up</a>
                    </nav>
                </header>
                <main>
                    <section id="Bienvenue">
                        <h3>Bienvenue sur Hemfree</h3>
                    </section>
                    <section id="Serveurs">
                        <h2>Nos serveurs</h2>
                        <ul>
                            <li>
                                <a href="Serveur1.html">Serveur 1</a>
                            </li>
                            <li>
                                <a href="Serveur2.html">Serveur 2</a>
                            </li>
                        </ul>
                    </section>

                    <section
                        id="Contact"
                        className={[
                            styles.textCenter,
                            styles.contentSection,
                        ].join(' ')}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-Ig-8 mx-auto">
                                    <h2> Contact us</h2>
                                    <p>Vous pouvez nous contacter sur</p>
                                    <ul className="list-inline banner-social-buttons"></ul>
                                    <li className="list-inline-item">
                                        <button
                                            className="btn btn-primary btn-lg btn-default"
                                            type="button"
                                        >
                                            <i className="fa fa-google-plus fa-fw"></i>
                                            <span className="network-name">
                                                Google+
                                            </span>
                                        </button>
                                    </li>
                                    <li className="list-inline-item">
                                        <button
                                            className="btn btn-primary btn-lg btn-default"
                                            type="button"
                                        >
                                            <i className="fa fa-twitter fa-fw"></i>
                                            <span className="network-name">
                                                Twitter
                                            </span>
                                        </button>
                                    </li>
                                    <li className="list-inline-item">
                                        <button
                                            className="btn btn-primary btn-lg btn-default"
                                            type="button"
                                        >
                                            <i className="fa fa-github fa-fw"></i>
                                            <span className="network-name">
                                                Github
                                            </span>
                                        </button>
                                    </li>
                                    <h1></h1>
                                    <a href="link">Hemfree@agencemail.com</a>
                                    <h1></h1>
                                    <a href="link">+33 6 02 01 59 58</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <p>&copy; 2024 - Hemfree</p>
                </footer>
            </body>
        </Fragment>
    );
}
