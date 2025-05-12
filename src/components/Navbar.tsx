
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl hover:text-blue-200 transition-colors">
          Liso Mlunguza
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
          <Link to="/elevator-pitch" className="hover:text-blue-200 transition-colors">Elevator Pitch</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
