import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const NavbarUser = () => {
    const {user, logoutUser} = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser();
    }

    const links = <div className="flex items-center">
        <li className="font-semibold"><NavLink to={"/order"}>Order</NavLink></li>
        <li className="font-semibold"><NavLink to={"/orderReview"}>Order Review</NavLink></li>
        <li className="font-semibold"><NavLink to={"/manage"}>Manage Inventory</NavLink></li>
        {
            user ? 
            <div className="flex items-center gap-3">
                <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full"/>
                <button className="btn bg-[#FF3811] text-white" onClick={handleLogout}>Logout</button>
            </div>
             : <li className="font-semibold"><Link to={'/login'}><button className=" bg-[#FF3811] text-white btn">Login</button></Link></li>
        }
    </div>
    return (
        <div className="navbar bg-base-100">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                          {links}  
                    </ul>
                </div>
                <Link to={"/"}><img src={logo} alt="" className="w-24 hover:outline hover:outline-2 hover:outline-cyan-200 hover:outline-offset-2 p-2 rounded-lg"/></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default NavbarUser;