import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../Components/Home/Home';
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