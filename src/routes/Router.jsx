import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pags/Login/Login";
import Home from "../pags/Home/Home/Home";
import Register from "../pags/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
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