import React from 'react'
import { google_icon } from '../../../assets'

const Register = ({toggleForms, registerCompleted}) => {
  return (
    <div className="form register">
      <div className="tag">
        <p>REGISTER</p>
      </div>

      <h1>
        book Your
        <br />
        appointment
        <br />
        within minutes.
      </h1>

      <form onSubmit={registerCompleted}>
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

        <label>
          EMAIL
        </label>
        <input type="email" />
        <br />

        <button>Register</button>
      </form>
      <button className="google"><img src={google_icon} alt="" /> <span>Register With Google</span></button>
      <button onClick={toggleForms}>All Ready Have An Account? Login</button>
    </div>
  )
}

export default Register