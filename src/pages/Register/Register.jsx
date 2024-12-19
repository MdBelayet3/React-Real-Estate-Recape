import { useContext, useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, } from "react-router-dom";
const Register = () => {

    // get context value using useContext
    const { createUser } = useContext(AuthContext);

    //useState hook
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    // console.log(isPasswordShow);

    // handleRegisterBtn function
    const handleRegisterBtn = e => {
        e.preventDefault();
        console.log('btn clicked');
        // value collect of input field
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(email, name, password, photo);

        // privies error or success remove
        setError('');
        setSuccess('');

        // validation part
        if (password.length < 6) {
            const message = 'Please provide 6 digit password'
            setError(message);
            return toast.warn(message);
        }
        else if (!/[A-Z]/.test(password)) {
            const message = 'Please provide at least one uppercase character'
            setError(message);
            return toast.warn(message);
        }
        else if (!/[a-z]/.test(password)) {
            const message = 'Please provide at least one lowercase character'
            setError(message);
            return toast.warn(message);
        }
        else if(!/[^A-Za-z0-9]/.test(password)){
            const message = 'Please provide at least one special character'
            setError(message);
            return toast.warn(message);
        }

        // create user 
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User registration successful. Now you login')
                toast.success('User registration successful. Now you login');
            })
            .catch(error => {
                if(error.message === "Firebase: Error (auth/email-already-in-use)."){
                    const message = 'You have already registered with this email. Please Login'
                    setError(message);
                    toast.warn(message);
                }
                console.log(typeof(error.message))
                console.log(error.message)
            })

    }

    return (
        <div className="mx-auto text-black card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

            <h2 className="text-xl md:text-4xl text-center mt-10">Please Register </h2>
            <form onSubmit={handleRegisterBtn} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                {error && <h2 className="text-red-500 text-lg">{error}</h2>}
                {success && <h2 className="text-green-500 text-lg">{success}</h2>}
            </form>
            <p className="text-lg ml-10 mb-12">Already You Registration? Please <Link to="/login" className="btn btn-secondary">Login</Link></p>
            <ToastContainer />
        </div>
    );
};

export default Register;