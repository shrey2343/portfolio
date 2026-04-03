import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaRobot, FaCloud } from 'react-icons/fa';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/skills';

const Skills = () => {
  const skillCategories = [
    {
      title: 'FRONTEND',
      icon: FaCode,
      color: 'from-[#009ADA] to-[#00A8E8]',
      skills: skills.frontend,
      description: 'Building responsive and interactive user interfaces'
    },
    {
      title: 'BACKEND',
      icon: FaServer,
      color: 'from-green-500 to-green-600',
      skills: skills.backend,
      description: 'Scalable server-side applications and APIs'
    },
    {
      title: 'DATABASE',
      icon: FaDatabase,
      color: 'from-purple-500 to-purple-600',
      skills: skills.database,
      description: 'Data management and optimization'
    },
    {
      title: 'TOOLS',
      icon: FaTools,
      color: 'from-orange-500 to-orange-600',
      skills: skills.tools,
      description: 'Development tools and workflows'
    },
    {
      title: 'AGENTIC AI TOOLS',
      icon: FaRobot,
      color: 'from-cyan-500 to-cyan-600',
      skills: skills.agenticAI,
      description: 'AI-powered development assistants and tools'
    },
    {
      title: 'DEPLOYMENT',
      icon: FaCloud,
      color: 'from-pink-500 to-pink-600',
      skills: skills.deployment,
      description: 'Cloud platforms and deployment services'
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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-block px-6 py-2 border-2 border-[#009ADA] rounded-full bg-black/80 backdrop-blur-md">
                <span className="text-sm font-bold tracking-widest text-[#009ADA]">EXPERTISE</span>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              TECH <span className="bmw-gradient-text">ARSENAL</span>
            </h1>
            <p className="text-xl text-white leading-relaxed bg-black/60 backdrop-blur-sm px-8 py-4 rounded-lg">
              Precision-engineered skills for building high-performance applications.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
          >
            {[
              { number: '20+', label: 'TECHNOLOGIES' },
              { number: '95%', label: 'PROBLEM SOLVING' },
              { number: '100%', label: 'LEARNING' },
              { number: '∞', label: 'GROWTH' }
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
                <div className="text-white font-bold text-sm tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="bmw-section bg-black">
        <div className="bmw-container">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Category Header */}
                <div className="text-center">
                  <div className="inline-flex items-center space-x-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 max-w-2xl mx-auto tracking-wide">
                    {category.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bmw-section bg-gradient-to-b from-black via-gray-900 to-black border-t border-gray-800">
        <div className="bmw-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
              DRIVEN BY <span className="bmw-gradient-text">EXCELLENCE</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bmw-card">
                <div className="w-16 h-16 bg-[#009ADA]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCode className="text-[#009ADA]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">HANDS-ON</h3>
                <p className="text-gray-400 leading-relaxed">
                  Learning through building. Every technology gets implemented in real projects.
                </p>
              </div>
              
              <div className="bmw-card">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaServer className="text-green-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">CONTINUOUS</h3>
                <p className="text-gray-400 leading-relaxed">
                  Always evolving. Staying updated with latest trends and best practices.
                </p>
              </div>
              
              <div className="bmw-card">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTools className="text-purple-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">PROBLEM-SOLVING</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every challenge is an opportunity to learn and grow stronger.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
