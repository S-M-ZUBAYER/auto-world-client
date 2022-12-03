import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddProduct from '../../AddProductPage/AddProduct/AddProduct';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Home from '../../HomePage/Home/Home';
import Root from '../../Layout/Root/Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            }
        ]
    }
])

export default router;