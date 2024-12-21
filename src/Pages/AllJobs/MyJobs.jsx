import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../AuthProvider/AuthContext';
import { h1 } from 'motion/react-client';
import JobCard from '../Common/JobCard';

const MyJobs = () => {

    const [jobs, setJobs] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user])

    return (
        <div className='w-[96%] mx-auto'>
            <div className=''>
                <div className="overflow-x-auto">


                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Total Application</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobs.map((job, index) =>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{job?.title}</td>
                                        <td>{job?.applicationDeadline}</td>
                                        <td>{job?.application_count}</td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
                {/* {
                    jobs.map(job => <JobCard key={job._id} job={job} />)
                } */}
            </div>

        </div>
    );
};

export default MyJobs;