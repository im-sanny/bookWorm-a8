import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar max-w-6xl mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="mr-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-bold border border-green-300"
                      : "font-bold text-secondary border border-rose-400"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listedBooks"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-bold border border-green-300"
                      : "font-bold text-secondary border border-rose-400"
                  }
                >
                  Listed Books
                </NavLink>
              </li>
              <li className="ml-2">
                <NavLink
                  to="/pagesToRead"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-bold border border-green-300"
                      : "font-bold text-secondary border border-rose-400"
                  }
                >
                  Pages to Read
                </NavLink>
              </li>
              <li className="ml-2">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-bold border border-green-300"
                      : "font-bold text-secondary border border-rose-400"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="ml-2">
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-bold border border-green-300"
                      : "font-bold text-secondary border border-rose-400"
                  }
                >
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost flex justify-center items-center text-xl">BookWorm</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="mr-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold border border-green-300"
                    : "font-bold text-secondary border border-rose-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listedBooks"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold border border-green-300"
                    : "font-bold text-secondary border border-rose-400"
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li className="ml-2">
              <NavLink
                to="/pagesToRead"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold border border-green-300"
                    : "font-bold text-secondary border border-rose-400"
                }
              >
                Pages to Read
              </NavLink>
            </li>
            <li className="ml-2">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold border border-green-300"
                    : "font-bold text-secondary border border-rose-400"
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="ml-2">
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold border border-green-300"
                    : "font-bold text-secondary border border-rose-400"
                }
              >
                About us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className=" relative rounded py-1 px-2  overflow-hidden group bg-[#23BE0A] hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 mr-2">
            Sign-In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
