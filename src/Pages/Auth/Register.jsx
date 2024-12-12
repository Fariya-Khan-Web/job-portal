import React, { useContext } from 'react';
import AuthContext from '../../AuthProvider/AuthContext';
import { Link } from 'react-router-dom';
import lottieAni from '../../assets/animation/lotti.json'
import Lottie from 'lottie-react';
import { toast } from 'react-toastify';


const Register = () => {

    const { user, setUser, loginGoogle } = useContext(AuthContext)


    const handleSubmit = e => {
        e.prerventDefault()
        const form = form.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user)

        
    }


    const handleGoogle = () => {
        loginGoogle()
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                toast.success('logged in successfuly')
            })
            .catch(err => { console.log(err) })
    }
    return (
        <div className=' flex justify-center items-center py-40'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-2xl font-semibold mx-auto my-6'>Register your account</h1>
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
                        <button className="btn btn-primary">Sing up</button>
                    </div>
                </form>
                <button onClick={handleGoogle} className="btn btn-primary -mt-5 w-10/12 mx-auto">Sign up with Google</button>
                <p className='mx-auto my-4'>Already have an account? <Link to={'/login'} className='text-blue-500'>Login</Link></p>
            </div>
            <div>
                <Lottie className='w-96 ' animationData={lottieAni} loop={true} />
            </div>
        </div>
    );
};

export default Register;