// // import React from "react";

// // function Login(){
// //     return(
// //         <div id="login">
// //         <div className="container">
// //             <div className="login-box">
// //                 <h2>Login</h2>
// //                 <form action="#">
// //                     <div className="input-box">
// //                         <input type="email" required></input>
// //                         <label>Email</label>
// //                     </div>
// //                     <div className="input-box">
// //                         <input type="password" required></input>
// //                         <label>password</label>
// //                     </div>
// //                     <div className="forgert-password">
// //                         <a href="#">Forget password</a>
// //                     </div>
// //                     <button type="submit" className="btn">Login</button>
// //                     <div className="signup-link">
// //                         <a href="#">signup</a>
// //                     </div>
// //                 </form>
// //             </div>
// //             <span style="--i:0" />
// //                  <span style="--i:1" />
// //                     .
// //                     .
// //                  <span style="--i:49" />
// //         </div>
// //         </div>
// //     );
// // }
// // export default Login;

// // Import React
//  import React from "react";
//  import { Link } from "react-router-dom";

// // Create the Login component
//  function Login() {

//     // const handlePasswordRecovery = () => {
//     //     // Add logic for password recovery here
//     //     console.log("Password recovery logic goes here");
//     //   };

//   return (
//     <div id="login">
//       <div className="container">
//         <div className="login-box">
//           <h2>Login</h2>
//           <form action="#">
//             <div className="input-box">
//               <input type="email" required />
//               <label>Email</label>
//             </div>
//             <div className="input-box">
//               <input type="password" required />
//               <label>Password</label>
//             </div>
//             <div className="forgert-password">
//             <Link to="/password-recovery">Forget password</Link>
//             {/* <button onClick={handlePasswordRecovery} className="/password-recovery">Forget password</button> */}
//             </div>
//             <button type="submit" className="btn">
//               Login
//             </button>
//             <div className="signup-link">
//               <a href="#">Signup</a>
//             </div>
//           </form>
//         </div>
//         <span style={{ "--i": 0 }} />
//         <span style={{ "--i": 1 }} />
//         <span style={{ "--i": 49 }} />
//       </div>
//     </div>
//   );
// }

// // Export the Login component
//  export default Login;

import React from "react";
import { Link } from "react-router-dom";

function Login(){
  return(
    <div id="Login">
    <div className="wrapper">
      <div className="login-box">
        <form action="">
          <h2>Login</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required></input>
            <label>Email</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required></input>
            <label>password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox">Remember me</input></label>
            <Link to="#">Forgot password</Link >
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account?<Link to="#">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
