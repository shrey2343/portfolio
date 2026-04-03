import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'EMAIL',
      value: 'shreyn82@gmail.com',
      link: 'mailto:shreyn82@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: FaPhone,
      title: 'PHONE',
      value: '+91 9893230031',
      link: 'tel:+919893230031',
      color: 'text-green-400'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'LOCATION',
      value: 'Indore, India',
      link: '#',
      color: 'text-[#009ADA]'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/shrey2343',
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/shrey-nigam',
      color: 'hover:text-[#009ADA]'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/@shrey65176344',
      color: 'hover:text-[#009ADA]'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section with Video Background */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] pointer-events-none"
            style={{
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              width: '177.77777778vh',
              height: '56.25vw',
            }}
            src="https://www.youtube.com/embed/zuwOfXU4iPo?autoplay=1&mute=1&loop=1&playlist=zuwOfXU4iPo&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
            title="BMW Background Video"
            allow="autoplay; encrypted-media"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

        <div className="relative z-10 bmw-container py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 border-2 border-[#009ADA] rounded-full bg-black/80 backdrop-blur-md">
                <span className="text-sm font-bold tracking-widest text-[#009ADA]">CONNECT</span>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              LET'S <span className="bmw-gradient-text">CONNECT</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed bg-black/60 backdrop-blur-sm px-8 py-4 rounded-lg inline-block">
              Ready to discuss your next project or collaboration opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bmw-section bg-black">
        <div className="bmw-container">
          <div className="max-w-5xl mx-auto">
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bmw-card group"
                >
                  <div className={`w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors`}>
                    <info.icon className={`${info.color}`} size={24} />
                  </div>
                  <h3 className="font-bold text-white text-sm tracking-widest mb-2">{info.title}</h3>
                  <p className="text-gray-400">{info.value}</p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-2xl font-bold text-white mb-8 tracking-wider">
                FOLLOW ME
              </h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-800`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-700 rounded-lg p-8 text-center"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-bold text-green-400 text-lg tracking-wider">AVAILABLE FOR WORK</h4>
                  <p className="text-green-300 text-sm tracking-wide">
                    Open to new opportunities and collaborations
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bmw-section bg-gradient-to-b from-black via-gray-900 to-black border-t border-gray-800">
        <div className="bmw-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              READY TO <span className="bmw-gradient-text">START?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:shreyn82@gmail.com"
                className="bmw-btn-primary"
              >
                <FaEnvelope />
                <span>EMAIL ME</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bmw-btn-secondary"
              >
                <FaPaperPlane />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
