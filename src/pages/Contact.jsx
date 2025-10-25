import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'shreyn82@gmail.com',
      link: 'mailto:shreyn82@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9893230031',
      link: 'tel:+919893230031',
      color: 'text-green-500'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Indore, India',
      link: '#',
      color: 'text-blue-500'
    }
  ];

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
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/@shrey65176344',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply have a chat about technology. Let's connect!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you have a project in mind, want to discuss a potential collaboration, 
                  or just want to say hello, I'd love to hear from you. I typically respond 
                  within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md`}>
                      <info.icon className={`${info.color}`} size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Follow Me
                </h3>
                <div className="flex justify-center space-x-4">
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
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-colors duration-300`}
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-green-800">Available for Work</h4>
                    <p className="text-green-600 text-sm">
                      Open to new opportunities and collaborations
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your next project and bring your ideas to life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:shreyn82@gmail.com"
                className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <FaEnvelope />
                <span>Email Me Directly</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <FaPaperPlane />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
