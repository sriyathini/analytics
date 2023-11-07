import React from "react";

function Login(){
    return(
        <div id="login">
        <div className="container">
            <div className="login-box">
                <h2>Login</h2>
                <form action="#">
                    <div className="input-box">
                        <input type="email" required></input>
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <input type="password" required></input>
                        <label>password</label>
                    </div>
                    <div className="forgert-password">
                        <a href="#">Forget password</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="signup-link">
                        <a href="#">signup</a>
                    </div>
                </form>
            </div>
            <span style="--i:0" />
                 <span style="--i:1" />
                    .
                    .
                 <span style="--i:49" />
        </div>
        </div>
    );
}
export default Login;