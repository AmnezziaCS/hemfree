export default function Login() {
    return (
        <body>
            <form id="loginForm" method="post">
                <h1>Login</h1>
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
                <input type="submit" value="Login"></input>
                <a href="/signup">Inscrivez-vous</a>
            </form>
        </body>
    );
}
