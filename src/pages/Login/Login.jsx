import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaRegEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // get context value using useContext
    const {googleSignIn, githubSignIn, signIn} = useContext(AuthContext);
    
    //useState hook
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    console.log(isPasswordShow);

    // handleGoogleSignInBtn function for google authentication
    const handleGoogleSignInBtn = () =>{
        console.log('btn clicked');
        googleSignIn()
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => console.error(error))
    }

    // handleGoogleSignInBtn function for google authentication
    const handleGithubSignInBtn = () =>{
        console.log('btn clicked');
        githubSignIn()
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => console.error(error))
    }

    // handleLoginBtn function for email and password authentication
    const handleLoginBtn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        // signin with email and password
        signIn(email,password)
        .then(result => {
            console.log(result)
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="mx-auto text-black card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className="text-xl md:text-4xl text-center mt-10">Please Login </h2>
            <form onSubmit={handleLoginBtn} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={isPasswordShow ? `text` : `password`} name="password" placeholder="password" className="input input-bordered" required />
                    <div onClick={() => setIsPasswordShow(!isPasswordShow)} className="absolute top-14 left-[90%]">
                        {
                            isPasswordShow ?
                            <FaEyeSlash></FaEyeSlash>
                            :
                            <FaRegEye></FaRegEye>
                        }
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <button onClick={handleGoogleSignInBtn} className=""><h1 className="flex hover:text-2xl ml-10 mb-5 text-blue-500 items-center gap-1 text-xl">Login With <FcGoogle></FcGoogle></h1></button>
            <button onClick={handleGithubSignInBtn} className=""><h1 className="flex hover:text-2xl ml-10 mb-5 text-blue-500 items-center gap-1 text-xl">Login With <FaGithub></FaGithub></h1></button>
            <p className="ml-10 mb-10 text-xl">Are You New? Please <Link to="/register" className="btn btn-secondary">Register</Link></p>
        </div>
    );
};

export default Login;