import React from "react";
import { Link } from 'react-router-dom'; 


const Login = () => {

    return (
        <div id="loginBody">
            {/* method & action are how frontend is linked to the back */}
            <h1 id="login" className="h1">LOGIN</h1>
            <form id="loginForm" class="form" method="POST"  action="/login">
                <input name="username" type="text" placeholder="Username"></input>
                <input name="password" type="password" placeholder="Password"></input>
                <input className="button" type="submit" value="Login"></input>
            </form> 
            <Link className="links" to="./signup"><strong>SIGN UP</strong></Link> 

        </div>
        
    )
}


export default Login;
