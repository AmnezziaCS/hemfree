export default function Signup() {
    return (
        <body>
            <form id="signupForm" method="post">
                <h1>Sign Up</h1>
                <label>Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                ></input>
                <h1></h1>
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                ></input>
                <h1></h1>
                <label>Email</label>
                <input type="email" id="email" name="email" required></input>
                <h1></h1>
                <input type="submit" value="Sign Up"></input>
                <h1></h1>Vous avez déja un compte ?
                <a href="/login">Connecter-vous</a>
            </form>
        </body>
    );
}
