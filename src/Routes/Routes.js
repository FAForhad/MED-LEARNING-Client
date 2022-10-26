import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from '../Components/Blogs/Blogs';
import DoctorDetails from '../Components/DoctorDetails/DoctorDetails';
import Home from '../Components/Home/Home';
import Instructors from '../Components/Instructors/Instructors';
import Medicines from '../Components/Medicines/Medicines';
import { SignIn } from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';
import CourseDetails from '../Components/Trajectory/CourseDetails';
import Courses from '../Components/Trajectory/Courses';
import Error from '../Others/Error/Error';
import Main from '../Others/Main/Main';
import PrivateRoute from './PrivateRoute';

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
                    path: '/blogs',
                    element: <Blogs></Blogs>
                },
                {
                    path: '/signin',
                    element: <SignIn></SignIn>
                },
                {
                    path: '/signUp',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/courses',
                    loader: () => fetch('https://assignment-10-server-wheat-one.vercel.app/courses'),
                    element: <Courses></Courses>,
                },
                {
                    path: '/courses/:id',
                    loader: ({ params }) => fetch(`https://assignment-10-server-wheat-one.vercel.app/courses/${params.id}`),
                    element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
                },
                {
                    path: '/instructors',
                    loader: () => fetch('https://assignment-10-server-wheat-one.vercel.app/instructors'),
                    element: <Instructors></Instructors>
                },
                {
                    path: '/instructors/:id',
                    loader: ({ params }) => fetch(`https://assignment-10-server-wheat-one.vercel.app/instructors/${params.id}`),
                    element: <DoctorDetails></DoctorDetails>
                },
                {
                    path: '/medicines',
                    element: <PrivateRoute><Medicines></Medicines></PrivateRoute>,
                    loader: () => fetch('https://assignment-10-server-wheat-one.vercel.app/medicines')
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