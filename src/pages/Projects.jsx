import { motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
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
                <span className="text-sm font-bold tracking-widest text-[#009ADA]">PORTFOLIO</span>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              MY <span className="bmw-gradient-text">PROJECTS</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed bg-black/60 backdrop-blur-sm px-8 py-4 rounded-lg inline-block">
              Engineering excellence through code. Each project represents precision, 
              performance, and innovation.
            </p>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { number: projects.length, label: 'PROJECTS', subtitle: 'COMPLETED' },
              { number: '14+', label: 'TECHNOLOGIES', subtitle: 'MASTERED' },
              { number: '100%', label: 'DEDICATION', subtitle: 'GUARANTEED' },
              { number: '∞', label: 'INNOVATION', subtitle: 'DRIVEN' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bmw-stat-card text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bmw-gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-bold text-sm tracking-widest mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-xs tracking-wider">
                  {stat.subtitle}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bmw-section bg-black">
        <div className="bmw-container">
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
              READY TO <span className="bmw-gradient-text">COLLABORATE?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="bmw-btn-primary">
                <FaExternalLinkAlt />
                <span>GET IN TOUCH</span>
              </a>
              <a
                href="https://github.com/shrey2343"
                target="_blank"
                rel="noopener noreferrer"
                className="bmw-btn-secondary"
              >
                <FaCode />
                <span>VIEW GITHUB</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
