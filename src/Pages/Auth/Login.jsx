import Lottie from 'lottie-react';
import React from 'react';
import lottieAni from '../../assets/animation/lotti.json'

const Login = () => {
    return (
        <div className=' flex justify-center py-40'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
            <div>
                <Lottie className='w-96 ' animationData={lottieAni} loop={true} />
            </div>
        </div>
    );
};

export default Login;