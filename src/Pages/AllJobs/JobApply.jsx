import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import { toast } from 'react-toastify';

const JobApply = () => {

    const { id } = useParams()
    const { user } = useAuth()
    console.log(id, user)


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const resume = form.resume.value
        const linkedin = form.linkedin.value
        const github = form.github.value

        console.log(resume, linkedin, github)

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            resume,
            linkedin,
            github
        }

        fetch('http://localhost:5000/job_application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('Job application successfull', { position: 'top-center' })
                }
            })

    }
    return (
        <div className='flex justify-center p-40'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume URL</span>
                        </label>
                        <input type="url" placeholder="resume url" name='resume' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn URL</span>
                        </label>
                        <input type="url" placeholder="linkedin url" name='linkedin' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Github URL</span>
                        </label>
                        <input type="url" placeholder="github url" name='github' className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;