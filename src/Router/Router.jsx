import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import JobDetails from "../Pages/AllJobs/JobDetails";
import { param } from "motion/react-client";
import PrivateRoute from "../Pages/Private/PrivateRoute";
import JobApply from "../Pages/AllJobs/JobApply";
import AddJob from "../Pages/AllJobs/AddJob";
import MyJobs from "../Pages/AllJobs/MyJobs";
import MyApplys from "../Pages/AllJobs/MyApplies";
import MyApplies from "../Pages/AllJobs/MyApplies";
import View from "../Pages/AllJobs/View";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <h1 className="text-5xl font-semibold mx-auto">Route not found</h1>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/jobs/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
                element: <PrivateRoute>< JobDetails /></PrivateRoute>
            },
            {
                path: '/jobApply/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
                element: <PrivateRoute>< JobApply /></PrivateRoute>
            },
            {
                path: '/myapplies',
                element: <PrivateRoute><MyApplies/></PrivateRoute>
            },
            {
                path: '/addJob',
                element: <PrivateRoute><AddJob/></PrivateRoute>
            },
            {
                path: '/myposts',
                element: <PrivateRoute><MyJobs/></PrivateRoute>
            },
            {
                path: '/viewapplications/:job_id',
                loader: ({params})=> fetch(`http://localhost:5000/job_application/${params.job_id}`),
                element: <PrivateRoute><View/></PrivateRoute>
            },


        ]
    },
]);

export default router