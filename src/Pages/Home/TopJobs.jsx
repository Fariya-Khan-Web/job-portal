import React, { useEffect, useState } from 'react';
import JobCard from '../Common/JobCard';

const TopJobs = () => {
    
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setJobs(data)
        })
    },[])
    return (
        <div className='max-w-screen-xl w-[94%] mx-auto my-10'>
            <h1 className='text-center text-3xl font-bold '>Top Jobs</h1>
            <p className='text-center w-[75%] mx-auto my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur assumenda accusamus eum ad voluptate? Maiores, consectetur dignissimos. Nisi quas, tenetur culpa exercitationem iusto nobis? Maxime iste aspernatur culpa sit qui!</p>
            <div className='grid lg:grid-cols-3 gap-4'>
                {
                    jobs.map(job => <JobCard job={job}/>)
                }
            </div>
        </div>
    );
};

export default TopJobs;