import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const View = () => {

    const param = useLoaderData()
    console.log(param)
    // const [applicants, setApplicants] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/job_application/675d37989e56cfcb0ef3e904`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    const handleUpdate = (e, id) => {
        e.preventDefault()
        const data = {
            status: e.target.value
        }

        fetch(`http://localhost:5000/job_application/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Status Changed')
            })


    }



    return (
        <div>
            <div className="overflow-x-auto max-w-3xl mx-auto">
                <table className="table table-zebra my-10">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Favorite Color</th>
                            <th>github</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            param.map((applicant, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>Cy Ganderton</td>
                                    <td>Blue</td>
                                    <td><a href={applicant.github} className='link'>github profile</a></td>
                                    <td>
                                        <select
                                            name="status"
                                            id=""
                                            onChange={(e) => handleUpdate(e, applicant._id)}
                                            defaultValue={applicant.status || 'Change Status'}
                                            className='select select-ghost input-bordered w-full max-w-xs'>
                                            <option value="" disabled>Change Status</option>
                                            <option value="Undere review">Undere review</option>
                                            <option value="Set Interview">Set Interview</option>
                                            <option value="Hired">Hired</option>
                                            <option value="Rejected">Rejected</option>
                                        </select>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default View;