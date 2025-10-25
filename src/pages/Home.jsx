import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi, I'm{' '}
                <span className="gradient-text">Shrey Nigam</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-600 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                MERN Stack Developer
              </motion.p>
              <motion.p
                className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Passionate about creating innovative web solutions and delivering 
                exceptional user experiences. I specialize in building scalable 
                applications with modern technologies.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/projects"
                className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <FaCode />
                <span>View Projects</span>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <FaDownload />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '6+', label: 'Projects Completed' },
              { number: '14+', label: 'Technologies' },
              { number: 'Fresher', label: 'Graduate' },
              { number: '100%', label: 'Passion' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I work with modern technologies to build efficient and scalable applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              'React', 'Node.js', 'MongoDB', 'Express.js', 
              'JavaScript',  'Git'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-gray-700 font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/skills"
              className="btn-primary flex items-center space-x-2 mx-auto w-fit"
            >
              <FaRocket />
              <span>View All Skills</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
