import React from 'react';



const SignUp = () => {

    fetch('/signup'), {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        
    }

    return (
        <div id="signupBody">
            {/* // method & action are how frontend is linked to the back */}
            <h1 className='h1'>SIGNUP</h1>
            <form className="form" method="POST"  action="/signup">
                <input name="username" type="text" placeholder="Create Username" required /> <br/>
                <input name="password" type="password" placeholder="Create Password" required /> <br/>
                <input className="button" type="submit" value="Create Account"></input>
            </form> 
        </div>
        
    )
}


export default SignUp;
