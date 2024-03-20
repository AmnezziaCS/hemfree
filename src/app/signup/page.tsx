'use client';

import Link from 'next/link';

import styles from './page.module.css';

export default function Signup() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const body = JSON.stringify({
            name: formData.get('username'),
            password: formData.get('password'),
            mail: formData.get('email'),
            balance: 0,
        });

        fetch(`${process.env.API_URL}/users`, {
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
            id="signupForm"
            method="post"
            onSubmit={handleSubmit}
            className={styles.form}
        >
            <h2>Sign Up</h2>
            <label htmlFor="name">Username</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Sign Up</button>
            <p>Vous avez déja un compte ? </p>
            <Link href="/login">Connecter-vous</Link>
        </form>
    );
}
