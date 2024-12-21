import React, { useContext } from 'react';
import AuthContext from '../../AuthProvider/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const initialData = Object.fromEntries(formdata)


        const { min, max, currency, ...newjob } = initialData
        newjob.salaryRange = { min, max, currency }
        newjob.requirements = newjob.requirements.split('\n')
        newjob.responsibilities = newjob.responsibilities.split('\n')
        newjob.hr_email = user?.email
        console.log(newjob)

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newjob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Job has been posted')
                    navigate('/myposts')
                }
            })
    }

    return (
        <div className='max-w-screen-xl mx-auto my-14'>
            <div className="card bg-base-100 w-full shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit}>

                    {/* title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" placeholder="title" name='title' className="input input-bordered" required />
                    </div>


                    {/* location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" placeholder="location" name='location' className="input input-bordered" required />
                    </div>


                    <div className='grid md:grid-cols-2'>
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job Field</span>
                            </label>
                            <select name="category" id="" className='select select-ghost input-bordered w-full max-w-xs'>
                                <option value="" disabled>Pick a job field</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Finance">Finance</option>
                                <option value="Teaching">Teaching</option>
                                <option value="Management">Management</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Design">Design</option>
                                <option value="Development">Development</option>
                            </select>
                        </div>


                        {/* job type */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job Type</span>
                            </label>
                            <select name="jobType" id="" className='select select-ghost input-bordered w-full max-w-xs' placeholder='Pick a job'>
                                <option value="" disabled>Pick a job type</option>
                                <option value="Full-Time">Full-time</option>
                                <option value="Intern">Intern</option>
                                <option value="Part-Time">Part-time</option>
                            </select>
                        </div>
                    </div>



                    {/* salary range */}
                    <div className='grid grid-cols-3 gap-4'>
                        {/* min range */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Min</span>
                            </label>
                            <input type="number" placeholder="Min" name='min' className="input input-bordered" required />
                        </div>
                        {/* max range */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Max</span>
                            </label>
                            <input type="number" placeholder="Max" name='max' className="input input-bordered" required />
                        </div>
                        {/* currency */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Currency</span>
                            </label>
                            <select name="currency" id="" className='select select-ghost input-bordered w-full max-w-xs'>
                                <option value="" disabled >Currency</option>
                                <option value="bdt">BDT</option>
                                <option value="usd">USD</option>
                                <option value="inr">INR</option>
                            </select>
                        </div>
                    </div>

                    {/* ddescription */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className='textarea textarea-bordered' type="text" placeholder="Job description" name='description' required />
                    </div>

                    {/* company name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company name</span>
                        </label>
                        <input type="text" placeholder="Company Name" name='company' className="input input-bordered" required />
                    </div>

                    {/* company logo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Photo</span>
                        </label>
                        <input type="url" placeholder="Company logo url" name='company_logo' className="input input-bordered" required />
                    </div>

                    {/* requirements */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Requirements</span>
                        </label>
                        <textarea className='textarea textarea-bordered' type="text" placeholder="Put each requirement an a new line" name='requirements' required />
                    </div>

                    {/* responsibilities */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Responsibilities</span>
                        </label>
                        <textarea className='textarea textarea-bordered' type="text" placeholder="Write each responsibilitie an a new line" name='responsibilities' required />
                    </div>


                    {/* hr */}
                    <div className='grid grid-cols-2 gap-4'>
                        {/* hr name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">HR Name</span>
                            </label>
                            <input type="text" placeholder="HR name" name='hr_name' className="input input-bordered" required />
                        </div>
                        {/* hr email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">HR Email</span>
                            </label>
                            <input type="text" disabled defaultValue={user?.email} name='hr_email' className="input input-bordered" required />
                        </div>
                    </div>

                    {/* deadline */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <input type="date" name='applicationDeadline' className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;