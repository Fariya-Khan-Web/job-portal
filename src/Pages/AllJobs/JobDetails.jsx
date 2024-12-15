import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {

    const data = useLoaderData()
    const {_id, title, location, jobType, category, applicationDeadline, salaryRange, description, responsibilities, status, hr_email, hr_nam, company_logo } = data

    console.log(data)
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <div className='flex flex-col'>
                <h1 className='text-center text-3xl font-bold my-5'>

                    {title}
                </h1>
                <Link to={`/jobApply/${_id}`}>
                    <button className='btn bg-purple-600 text-white w-full'>Apply</button>
                </Link>
            </div>
        </div>
    );
};

export default JobDetails;