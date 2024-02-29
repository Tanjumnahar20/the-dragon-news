/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pags/Login/Login";
import Home from "../pags/Home/Home/Home";
import Register from "../pags/Register/Register";
import NewsCard from "../pags/Home/Home/NewsCard/NewsCard";
import NewsDetails from "../pags/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])
export default router;