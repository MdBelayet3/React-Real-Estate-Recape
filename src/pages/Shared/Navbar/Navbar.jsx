import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthContext";

const Navbar = () => {
    // useContext 
    const {user, logout} = useContext(AuthContext);
    console.log(user);

    // logOut 
    const handleLogout = () =>{
        console.log('btn clicked')
        logout()
        .then(result => console.log(result))
        .catch(error => console.error(error))
    }
    const nabLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About us</NavLink></li>
        <li><NavLink to='/faq'>FAQ</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/profile'>Update Profile</NavLink></li>
    </>
    return (
        <div className="fixed top-0 z-50 max-w-sm md:max-w-7xl mx-auto navbar bg-blue-500 text-white rounded-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box text-black z-[1] mt-3 w-52 p-2 shadow">
                        {nabLink}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">BelayetVista Homes</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nabLink}
                </ul>
            </div>
            <div className="navbar-end mr-6">
                {user
                ? <h2>{user.email} <Link onClick={handleLogout} className="btn ">Logout</Link></h2>
                : <Link className="btn " to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
