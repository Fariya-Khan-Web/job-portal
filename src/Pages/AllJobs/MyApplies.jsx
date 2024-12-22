import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../AuthProvider/AuthContext';

const MyApplies = () => {

    const { user } = useContext(AuthContext)
    const [applies, setApplies] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/job_applications?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setApplies(data))
    }, [user])
    return (
        <div>
            {applies.length}
            <div className="overflow-x-auto">
                <table className="table max-w-3xl mx-auto">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            applies.map(apply =>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Yancy Tear</div>
                                                <div className="text-sm opacity-50">Brazil</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Wyman-Ledner
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                    </td>
                                    <td>Indigo</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">X</button>
                                    </th>
                                </tr>
                            )
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplies;