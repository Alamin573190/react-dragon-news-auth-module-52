import { Link, NavLink } from "react-router-dom";
import logo from '../../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>



    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                            {
                                navlinks
                            }
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            navlinks
                        }

                    </ul>
                </div>


                <div className="navbar-end">
                    <div className="indicator">
                        <img className="w-10" src={logo} alt="" />

                    </div>
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn">Sign out</button> :
                            <Link to="/login"> <a className="btn">Login</a></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;