import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/skills';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaCode,
      color: 'from-blue-500 to-blue-600',
      skills: skills.frontend,
      description: 'Creating responsive and interactive user interfaces with modern frontend technologies'
    },
    {
      title: 'Backend Development',
      icon: FaServer,
      color: 'from-green-500 to-green-600',
      skills: skills.backend,
      description: 'Building scalable server-side applications and APIs with robust backend technologies'
    },
    {
      title: 'Database & Storage',
      icon: FaDatabase,
      color: 'from-purple-500 to-purple-600',
      skills: skills.database,
      description: 'Designing and managing databases for optimal performance and data integrity'
    },
    {
      title: 'Tools & Technologies',
      icon: FaTools,
      color: 'from-orange-500 to-orange-600',
      skills: skills.tools,
      description: 'Leveraging modern development tools and cloud platforms for efficient workflows'
    }
  ];

  const softSkills = [
    { skill: 'Problem Solving', level: 95 },
    { skill: 'Team Collaboration', level: 90 },
    { skill: 'Communication', level: 88 },
    { skill: 'Project Management', level: 85 },
    { skill: 'Adaptability', level: 92 },
    { skill: 'Quick Learning', level: 95 }
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
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills and learning journey. 
              As a fresher, I'm passionate about continuous learning and staying current with modern technologies.
            </p>
          </motion.div>

          {/* Skills Overview Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { number: '14+', label: 'Technologies' },
              { number: '95%', label: 'Problem Solving' },
              { number: '100%', label: 'Continuous Learning' },
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

      {/* Technical Skills */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My proficiency across different technology stacks and development areas
            </p>
          </motion.div>

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
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

      {/* Soft Skills */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Soft Skills</span> & Abilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional skills that complement my technical expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {skill.skill}
                  </h3>
                  <span className="text-sm font-medium text-gray-500">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              My <span className="gradient-text">Learning</span> Philosophy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <FaCode className="text-blue-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Hands-on Learning</h3>
                <p className="text-gray-600">
                  I believe in learning by doing. Every new technology I encounter 
                  gets implemented in real projects to understand its practical applications.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <FaServer className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Continuous Growth</h3>
                <p className="text-gray-600">
                  Technology evolves rapidly, and so do I. I stay updated with the latest 
                  trends and best practices through courses, conferences, and community engagement.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <FaTools className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Problem-Solving Focus</h3>
                <p className="text-gray-600">
                  I approach every challenge as an opportunity to learn something new. 
                  The goal is not just to solve problems, but to understand the underlying principles.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                In the fast-paced world of technology, standing still means falling behind. 
                I'm committed to continuous learning and improvement, always seeking new 
                challenges that push me to expand my skill set and deliver better solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
