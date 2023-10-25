import React from 'react'

export default function ForgotPassword() {
  return (
    <div id="wrapper">
    <section className="signIn forgPassMain pt-4 d-flex justify-content-center align-items-center">
        {/* <!-- <div className="signInHead">
        <img src="../html/images/fullLogo.svg" alt="" />
      </div> --> */}
        <div className="signIncard">
            <div className="signInCardHead">
                <h3>Forgot Password?
                </h3>
                <h6>Enter your email to get a password reset link
                </h6>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email Address</label>
                    <input type="email" className="form-control errorInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small className="errorText form-text">Kindly check your Details again.</small>
                </div>
                <button type="submit" className="btn loginBtn">Reset Password</button>
                <div className="text-center dont-have"> Remember your password? <a href="signIn.html">Login</a></div>
               
            </form>
        </div>
    </section>
</div>
  )
}
