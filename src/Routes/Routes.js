import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../Components/Home/Home';
import Instructors from '../Components/Instructors/Instructors';
import { SignIn } from '../Components/SignIn/SignIn';
import Courses from '../Components/Trajectory/Courses';
import Error from '../Others/Error/Error';
import Main from '../Others/Main/Main';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/signin',
                    element: <SignIn></SignIn>
                },
                {
                    path: '/courses',
                    element: <Courses></Courses>,
                },
                {
                    path: '/instructors',
                    element: <Instructors></Instructors>,
                    loader: () => fetch('http://localhost:5000/instructors')
                }

            ]
        },
        {
            path: '*',
            element: <Error></Error>
        }
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Routes;