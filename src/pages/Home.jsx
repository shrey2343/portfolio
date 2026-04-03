import BMWHero from '../components/BMWHero';
import BMWStats from '../components/BMWStats';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaGraduationCap, FaHeart, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const education = [{
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    year: "2021 - 2025",
    grade: "6.06 CGPA"
  }];

  const passions = [
    {
      title: "CLEAN CODE",
      description: "Writing maintainable and scalable code that drives performance.",
      icon: FaCode
    },
    {
      title: "CONTINUOUS LEARNING",
      description: "Staying ahead with the latest technologies and best practices.",
      icon: FaLightbulb
    },
    {
      title: "PROBLEM SOLVING",
      description: "Tackling complex challenges with elegant solutions.",
      icon: FaRocket
    },
    {
      title: "COLLABORATION",
      description: "Building great things together through teamwork.",
      icon: FaHeart
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* BMW Hero Section with Video */}
      <BMWHero />

      {/* Stats Section */}
      <BMWStats />

      {/* Bio Section */}
      <section className="bmw-section bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="bmw-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  I'm <span className="text-white font-bold">Shrey Nigam</span>, a MERN Stack Developer based in Indore, India.
                  I focus on building robust, scalable applications with precision engineering.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  My journey in technology began with a fascination for web development.
                  I've developed expertise across frontend and backend technologies,
                  with a passion for React and Node.js ecosystems.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  When I'm not coding, I explore new technologies and contribute to
                  the developer community through knowledge sharing.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bmw-card">
                  <h4 className="font-bold text-white mb-2 tracking-wide">LOCATION</h4>
                  <p className="text-gray-400">Indore, India</p>
                </div>
                <div className="bmw-card">
                  <h4 className="font-bold text-white mb-2 tracking-wide">EXPERIENCE</h4>
                  <p className="text-gray-400">Fresher</p>
                </div>
                <div className="bmw-card">
                  <h4 className="font-bold text-white mb-2 tracking-wide">STATUS</h4>
                  <p className="text-green-400">Available</p>
                </div>
                <div className="bmw-card">
                  <h4 className="font-bold text-white mb-2 tracking-wide">REMOTE</h4>
                  <p className="text-gray-400">Yes</p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '6+', label: 'PROJECTS' },
                { number: '14+', label: 'TECHNOLOGIES' },
                { number: '100%', label: 'DEDICATION' },
                { number: '∞', label: 'LEARNING' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bmw-stat-card text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bmw-gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white font-bold text-sm tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bmw-section bg-black border-t border-gray-800">
        <div className="bmw-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              <span className="bmw-gradient-text">EDUCATION</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Education Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bmw-card"
            >
              {education.map((edu, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 154, 218, 0.2)' }}>
                      <FaGraduationCap style={{ color: '#009ADA' }} size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">{edu.degree}</h3>
                    <h4 className="text-xl text-gray-300 mb-2">{edu.field}</h4>
                    <p className="text-lg text-gray-400 mb-2">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-medium" style={{ color: '#009ADA' }}>{edu.year}</span>
                      <span className="text-gray-400 font-medium">CGPA: {edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Passions Section */}
      <section className="bmw-section bg-gradient-to-b from-black via-gray-900 to-black border-t border-gray-800">
        <div className="bmw-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              WHAT <span className="bmw-gradient-text">DRIVES</span> ME
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Core values that guide my development approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {passions.map((passion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bmw-card"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 154, 218, 0.2)' }}>
                      <passion.icon style={{ color: '#009ADA' }} size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{passion.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{passion.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative bg-black py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              TECH <span className="bmw-gradient-text">ARSENAL</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Powered by cutting-edge technologies
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
              'JavaScript', 'Git', 'Tailwind CSS', 'Framer Motion'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bmw-skill-badge"
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
            <Link to="/skills" className="bmw-btn-primary inline-flex">
              <FaRocket />
              <span>EXPLORE ALL SKILLS</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              LET'S BUILD <span className="bmw-gradient-text">TOGETHER</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Ready to collaborate on your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bmw-btn-primary">
                GET IN TOUCH
              </Link>
              <Link to="/projects" className="bmw-btn-secondary">
                VIEW MY WORK
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
