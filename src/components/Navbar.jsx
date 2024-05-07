import { useContext } from "react";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  return (
    <div className="container px-4 mx-auto shadow-sm navbar bg-base-100">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <img className="w-auto h-7" src={logo} alt="" />
          <span className="font-bold">SoloSphere</span>
        </div>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <div>Home</div>
          </li>

          {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

       {user && <div className="z-50 dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full" title={user?.displayName}>
              <img
                referrerPolicy="no-referrer"
                alt="User Profile Photo"
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <div className="justify-between">Add Job</div>
            </li>
            <li>
              <div>My Posted Jobs</div>
            </li>
            <li>
              <div>My Bids</div>
            </li>
            <li>
              <div>Bid Requests</div>
            </li>
            <li className="mt-2">
              <button onClick={logOut} className="block text-center bg-gray-200">Logout</button>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;


