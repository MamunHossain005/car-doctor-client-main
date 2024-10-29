import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import { SlHandbag } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
    const links = <>
        <li className="font-semibold"><NavLink to={"/"}>Home</NavLink></li>
        <li className="font-semibold"><NavLink to={"/about"}>About</NavLink></li>
        <li className="font-semibold"><NavLink to={"/services"}>Services</NavLink></li>
        <li className="font-semibold"><NavLink to={"/blog"}>Blog</NavLink></li>
        <li className="font-semibold"><NavLink to={"/contact"}>Contact</NavLink></li>
    </>
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
                <Link to={"/"}><img src={logo} alt="" className="w-24 hover:outline hover:outline-2 hover:outline-cyan-200 hover:outline-offset-2 p-2 rounded-lg" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-3">
                    <Link to={'/cart'}><SlHandbag className="text-xl"/></Link>
                    <IoSearch className="mt-2 text-xl"/>
                    <Link to={'/appointment'}>
                        <button className="btn btn-outline btn-secondary font-semibold">Appointment</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;