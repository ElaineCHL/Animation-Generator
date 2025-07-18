import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    if (path === '/' && location.pathname === '/') { return true; }
    if (path !== '/' && location.pathname === path) { return true; }
    return false;
  };

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-extrabold text-primary tracking-tight">
            My Animation Tool
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className={`btn ${isActive('/') ? 'font-bold text-blue-600' : 'font-extralight'} hover:text-blue-600 hover:-translate-y-1 transition duration-300 ease-in-out`}
            >
              <span>Home</span>
            </Link>
            <Link
              to="/editor"
              className={`btn ${isActive('/editor') ? 'font-bold text-blue-600' : 'font-extralight'} hover:text-blue-600 hover:-translate-y-1 transition duration-300 ease-in-out`}
            >
              <span>Editor</span>
            </Link>
            <Link
              to="/about"
              className={`btn ${isActive('/about') ? 'font-bold text-blue-600' : 'font-extralight'} hover:text-blue-600 hover:-translate-y-1 transition duration-300 ease-in-out`}
            >
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;