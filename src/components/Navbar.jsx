import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text">
            Shrey Nigam
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-gray-700 hover:text-blue-accent transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-blue-accent' : ''
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-accent"
                  />
                )}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-accent transition-colors duration-300"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white border-t border-gray-200"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-gray-700 hover:text-blue-accent hover:bg-gray-50 transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-blue-accent bg-gray-50' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm w-full text-center block"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
