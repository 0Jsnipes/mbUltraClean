import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-5 bg-gradient-to-r from-purple-900 to-purple-700 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">MB Ultra Clean</h1>
      <div className="flex space-x-6">
        <Link
          to="/"
          className="hover:text-purple-300 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="hover:text-purple-300 transition duration-300"
        >
          Services
        </Link>
        <Link
          to="/schedule"
          className="hover:text-purple-300 transition duration-300"
        >
          Schedule
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
