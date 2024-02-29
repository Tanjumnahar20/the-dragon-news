/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Context";

const Login = () => {

  const {logIn} =useContext(AuthContext);
  const location =useLocation();
  const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        logIn(email,password)
        .then(result=>{
            console.log(result.user)
            // navigation after login button click
          navigate(location?.state ? location.state : '/');


        })
        .catch(error=>{console.error(error)})
        console.log(email,password)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-center text-4xl ">Please login!</h2>
                <form onSubmit={handleLogin} className="md:w-3/4  lg:w-1/2  mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Don't have an account? <Link className="text-blue-600" to='/register'>Register</Link></p>
          </div>
        </div>
    );
};

export default Login;