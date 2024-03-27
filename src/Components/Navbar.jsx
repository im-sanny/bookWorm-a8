import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar max-w-6xl mx-auto">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">BookWorm</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mr-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li className="ml-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              bututPages to Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="#_"
          className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#23BE0A] hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 mr-2"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Sign In</span>
        </a>
        <a
          href="#_"
          className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#59C6D2] hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Sign Up</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
