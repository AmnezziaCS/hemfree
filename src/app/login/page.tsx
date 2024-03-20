'use client';

import Link from 'next/link';

import styles from './page.module.css';

export default function Login() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const body = JSON.stringify({
            name: formData.get('username'),
            password: formData.get('password'),
        });

        fetch(`${process.env.API_URL}/login`, {
            method: 'POST',
            body: body,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <form
            id="loginForm"
            method="post"
            onSubmit={handleSubmit}
            className={styles.form}
        >
            <h2>Login</h2>
            <label>Username: </label>
            <input type="text" id="username" name="username" required />
            <label>Password: </label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Login</button>
            <p>Nouveau sur Hemfree ?</p>
            <Link href="/signup">Inscrivez-Vous</Link>
        </form>
    );
}
