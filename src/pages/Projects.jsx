import { motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {

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
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work and side projects. Each project represents 
              a unique challenge and learning opportunity in my development journey.
            </p>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { number: projects.length, label: 'Total Projects' },
              { number: 14, label: 'Technologies Used' },
              { number: '100%', label: 'Dedication' },
              { number: 'Fresher', label: 'Graduate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-6 rounded-xl shadow-lg"
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

      {/* Projects Section */}
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
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my development work and learning projects
            </p>
          </motion.div>


          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

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
              Interested in Working Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Let's discuss how we can work together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <FaExternalLinkAlt />
                <span>Get In Touch</span>
              </a>
              <a
                href="https://github.com/shrey2343"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <FaCode />
                <span>View GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
