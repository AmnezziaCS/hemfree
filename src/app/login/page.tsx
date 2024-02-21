export default function Login() {
    return (
        <body>
            <form id="loginForm" method="post" >
                <a href="/"><h1>Hemfree</h1></a> 
                <br />
                <h2>Login</h2>
                <label>Username </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                ></input>
                <h1></h1>
                <label>Password </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                ></input>
                <h1></h1>
                <input type="submit" value="Login"></input>
                <h1></h1>Nouveau sur Hemfree ?<h1></h1>
                <a href="/signup">Inscrivez-Vous</a>
            </form>
        </body>
    );
}