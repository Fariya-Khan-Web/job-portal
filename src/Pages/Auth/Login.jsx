import Lottie from 'lottie-react';
import React from 'react';
import lottieAni from '../../assets/animation/lotti.json'
import { Link } from 'react-router-dom';

const Login = () => {

    const handleSubmit = e => {
        e.prerventDefault()
        const form = form.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
    }
    return (
        <div className=' flex justify-center py-40'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <h1 className='text-2xl font-semibold mx-auto my-6'>Login your account</h1>
                <hr className='w-10/12 mx-auto' />
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='mx-auto my-4 -mt-5'>Don't have an account? <Link to={'/register'} className='text-blue-500'>Register</Link></p>
            </div>
            <div className=''>
                <Lottie className='w-96 ' animationData={lottieAni} loop={true} />
            </div>
        </div>
    );
};

export default Login;