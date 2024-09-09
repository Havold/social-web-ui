import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
    <div className="card">
        <div className="left">
            <h1>METAN Social.</h1>
            <p>Sign up to connect, share, and explore on METAN. Create your account in just a few simple steps and start enjoying all the great features we offer. Let’s make your social experience amazing!</p>
            <span>You already have an account?</span>
            <Link to='/login'><button>Login</button></Link>
        </div>
        <div className="right">
            <h2>Register</h2>
            <form>
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="text" placeholder='Name' />
            </form>
            <button>Register</button>
        </div>
    </div>
</div>
  )
}

export default Register