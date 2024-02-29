/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/Context";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const{user,loading} =useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
       return <p>loading...</p>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;