import React, { useContext } from 'react';
import AuthContext from '../../AuthProvider/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import ReglottieAni from '../../assets/animation/register-lottie.json'
import Lottie from 'lottie-react';
import { toast } from 'react-toastify';



const Register = () => {

    const { user, setUser, loginGoogle, createUser, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }

        console.log(user)

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!/^.{6,}$/.test(password)) {
            toast.error('password must contain at least 6 characters', {position: 'top-center'})
            return 
        }
        if (!/[a-z]/.test(password)) {
            toast.error('password must contain at least 1 lowercase', {position: 'top-center'})
            return 
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('password must contain at least 1 uppercase', {position: 'top-center'})
            return 
        }

        createUser(email, password)
            .then(result => {
                setUser(result.user)
                setLoading(false)
                toast.success('Registered successfully', {position: 'top-center'})
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                toast.error('Something went wrong, try again later', {position: 'top-center'})
            })
        }
        
        
        const handleGoogle = () => {
            loginGoogle()
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                setLoading(false)
                toast.success('logged in successfuly')
                navigate('/')
            })
            .catch(err => { console.log(err) })
    }
    return (
        <div className=' md:flex flex-row-reverse justify-center items-center pb-16 md:py-40'>
            <div>
                <Lottie className='w-96 px-10 mx-auto m-6' animationData={ReglottieAni} loop={true} />
            </div>
            <div className="card bg-base-100 w-[90%] max-w-md mx-auto md:mx-0 shrink-0 shadow-2xl">
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
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sing up</button>
                    </div>
                </form>
                <button onClick={handleGoogle} className="btn btn-primary -mt-5 w-[86%] mx-auto">Sign up with Google</button>
                <p className='mx-auto my-4'>Already have an account? <Link to={'/login'} className='text-blue-500'>Login</Link></p>
            </div>
            
        </div>
    );
};

export default Register;