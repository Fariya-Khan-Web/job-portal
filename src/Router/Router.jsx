import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <h1 className="text-5xl font-semibold mx-auto">Route not found</h1>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/',
                element: <Home/>
            },

            
        ]
    },
]);

export default router