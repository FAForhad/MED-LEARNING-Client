import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Main from '../Others/Main/Main';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>
        },
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Routes;