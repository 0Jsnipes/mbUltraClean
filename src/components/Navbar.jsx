import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);

  const handleMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setIsServicesDropdownOpen(false), 300);
    setDropdownTimer(timer);
  };

  return (
    <nav className="p-5 bg-primary text-neutral-white flex justify-between items-center">
      <h1 className="text-2xl font-bold font-cursive">MB Ultra Clean</h1>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-accent-gold">Home</Link>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:text-accent-gold">Services</button>
          <div
            className={`absolute top-full left-0 mt-2 bg-white text-primary-dark shadow-lg rounded-md w-48 transition-all duration-300 ease-in-out ${
              isServicesDropdownOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <Link
              to="/house-cleaning"
              className="block px-4 py-2 hover:bg-primary-light hover:text-primary-dark"
            >
              House Cleaning
            </Link>
            <Link
              to="/apartment-cleaning"
              className="block px-4 py-2 hover:bg-primary-light hover:text-primary-dark"
            >
              Apartment Cleaning
            </Link>
            <Link
              to="/move-in-out-cleaning"
              className="block px-4 py-2 hover:bg-primary-light hover:text-primary-dark"
            >
              Move In / Out Cleaning
            </Link>
            <Link
              to="/deep-cleaning"
              className="block px-4 py-2 hover:bg-primary-light hover:text-primary-dark"
            >
              Deep Cleaning
            </Link>
          </div>
        </div>
        <Link to="/about" className="hover:text-accent-gold">About</Link>
        <Link to="/contact" className="hover:text-accent-gold">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
