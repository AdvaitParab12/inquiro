import { Link } from "react-router-dom";
import { LogIn, CircleUser } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };
    loadUser();
    window.addEventListener("storageUpdated", loadUser);
    return () => window.removeEventListener("storageUpdated", loadUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      <nav className="flex items-center justify-between border-b-2 border-gray-200 px-3 py-3">
        <div className="flex items-center justify-between space-x-3">
          <img src="/book-open.png" alt="logo" height={32} width={32} />
          <span className="text-3xl font-semibold text-gray-800">Inquiro</span>
        </div>

        <div className="flex gap-5">
          <Link to="/">
            <div className="cursor-pointer font-semibold text-gray-600 hover:text-emerald-500">Home</div>
          </Link>
          <Link to={"/browse"}>
            <div className="cursor-pointer font-semibold text-gray-600 hover:text-emerald-500">Browse Papers</div>
          </Link>
          <Link to={"/submit"}>
            <div className="cursor-pointer font-semibold text-gray-600 hover:text-emerald-500">Submit Paper</div>
          </Link>
          <Link to={"/about"}>
            <div className="cursor-pointer font-semibold text-gray-600 hover:text-emerald-500">About</div>
          </Link>
          <Link to={"/contact"}>
            <div className="cursor-pointer font-semibold text-gray-600 hover:text-emerald-500">Contact</div>
          </Link>
        </div>

        <div className="flex gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <CircleUser className="text-emerald-500" />
              <span className="font-semibold text-gray-700">{user.name}</span>
              <button onClick={handleLogout} className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-600 hover:bg-red-500 hover:text-white">Logout</button>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


