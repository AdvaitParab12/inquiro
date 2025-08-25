import { Link } from "react-router-dom";
import { LogIn, CircleUser } from "lucide-react";
function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between border-b-2 border-gray-200 px-3 py-3">
        <div className="flex items-center justify-between space-x-3">
          <img src="/book-open.png" alt="logo" height={32} width={32} />
          <span className="text-3xl font-semibold text-gray-800">Inquiro</span>
        </div>
        <div className="flex gap-5">
          <Link to="/">
            <div className="cursor-pointer font-semibold text-gray-600 hover:text-emerald-500">
              Home
            </div>
          </Link>
          <Link to={"/browse"}>
            <div className="cursor-pointer font-semibold text-gray-600 hover:text-emerald-500">
              Browse Papers
            </div>
          </Link>
          <Link to={"/submit"}>
            <div className="cursor-pointer font-semibold text-gray-600 hover:text-emerald-500">
              Submit Paper
            </div>
          </Link>
          <Link to={"/about"}>
            <div className="cursor-pointer font-semibold text-gray-600 hover:text-emerald-500">
              About
            </div>
          </Link>
          <Link to={"/contact"}>
            <div className="cursor-pointer font-semibold text-gray-600 hover:text-emerald-500">
              Contact
            </div>
          </Link>
        </div>
        <div className="flex gap-3">
          <div className="group cursor-pointer rounded-md border border-gray-300 hover:bg-emerald-500">
            <Link to="/signup">
              <div className="m-2 flex gap-3 group-hover:text-white">
                <LogIn className="text-emerald-500 group-hover:text-white" />
                Sign In
              </div>
            </Link>
          </div>
          <div className="group cursor-pointer rounded-md border border-gray-300 hover:bg-emerald-500">
            <Link to="/login">
              <div className="m-2 flex gap-3 group-hover:text-white">
                <CircleUser className="text-emerald-500 group-hover:text-white" />
                Login
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
