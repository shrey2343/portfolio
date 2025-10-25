import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/shrey2343',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/shrey-nigam',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:shreyn82@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/shrey_nigam',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Shrey Nigam</h3>
              <p className="text-gray-300 leading-relaxed">
                MERN Stack Developer passionate about creating innovative web solutions 
                and delivering exceptional user experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/skills" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="font-medium">Email:</span> shreyn82@gmail.com
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Location:</span> Indore, India
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Available:</span> Open to opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                © {currentYear} Shrey Nigam. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
