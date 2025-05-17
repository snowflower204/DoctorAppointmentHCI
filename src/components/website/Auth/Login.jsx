import React from 'react'
import { google_icon } from '../../../assets'

const Login = ({toggleForms}) => {
  return (
    <div className="form login">
      <div className="tag">
        <p>Sign In</p>
      </div>

      <h1>
        Welcome back — <br />
        let’s get you smiling
        <br />
        again.
      </h1>

      <form>
        <label>
          USERNAME
        </label>
        <input type="text" />
        <br />

        <label>
          PASSWORD
        </label>
        <input type="password" />
        <br />

        <button>LOGIN</button>
      </form>

      <a href="#">
        {" "}
        Forgot password?{" "}
        <u>
          <b>Click Here</b>
        </u>{" "}
      </a>

      <button className="google">
        <img src={google_icon} alt="" /> <span>Sign In With Google</span>
      </button>


      <button onClick={toggleForms}>Don't Have an account? Register</button>
    </div>
  )
}

export default Login