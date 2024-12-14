import { div } from 'motion/react-client';
import { CiLocationOn } from "react-icons/ci";
import React from 'react';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, requirements, company, description, company_logo } = job
    return (

        <div className='p-4 border rounded-lg flex flex-col'>
            <div className='flex gap-2'>
                <img src={company_logo} className='w-16' alt="logo" />
                <div>
                    <h3 className='text-xl font-semibold'>{company}</h3>
                    <div className='flex gap-1 items-center'>
                        <CiLocationOn />
                        <p>{location}</p>
                    </div>
                </div>
            </div>
            <h2 className='text-xl my-4'>{title}</h2>
            <p className='flex-grow py-2'>{description}</p>
            <div className='flex gap-2 flex-wrap'>
                {
                    requirements.map(require => <div className='px-2 items-center border rounded-md'>{require}</div>)
                }
            </div>
            <div className='flex items-center my-4'>Salary: <MdOutlineAttachMoney /> {salaryRange.min} - {salaryRange.max}</div>
            <Link to={`/jobs/${_id}`} className='btn bg-purple-600 text-white'>Job Details</Link>
        </div>
    );
};

export default JobCard;