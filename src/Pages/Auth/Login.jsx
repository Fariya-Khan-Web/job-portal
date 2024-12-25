import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import lottieAni from '../../assets/animation/lotti.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider/AuthContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {

    const { setUser, loginEmailPass, setLoading } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { email }

        console.log(user)

        loginEmailPass(email, password)
            .then(result => {
                setUser(result.user)
                setLoading(false)
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
                toast.success('Logged in successfully', { position: 'top-center' })
                // navigate(location.state || '/')

            })
            .catch(err => {
                toast.error('Invalid Email or Password', { position: 'top-center' })
            })
    }
    return (
        <div className=' md:flex flex-row-reverse justify-center items-center pb-16 md:py-40'>
            <div className=''>
                <Lottie className='w-96 mx-auto' animationData={lottieAni} loop={true} />
            </div>
            <div className="card bg-base-100 w-[90%] max-w-md mx-auto md:mx-0 shrink-0 shadow-2xl">
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

        </div>
    );
};

export default Login;