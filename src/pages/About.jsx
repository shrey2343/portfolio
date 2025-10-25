import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaHeart, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      year: "2021 - 2025",
      grade: "6.06 CGPA"
    }
  ];

  const passions = [
    {
      title: "Clean Code",
      description: "I believe in writing maintainable and scalable code that other developers can easily understand and build upon.",
      icon: FaCode
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I'm committed to staying updated with the latest trends and best practices.",
      icon: FaLightbulb
    },
    {
      title: "Problem Solving",
      description: "I enjoy tackling complex challenges and finding elegant solutions that make a real difference.",
      icon: FaRocket
    },
    {
      title: "Collaboration",
      description: "I thrive in team environments where ideas are shared and we work together to achieve common goals.",
      icon: FaHeart
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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate MERN Stack Developer (Fresher) with a strong foundation in modern web technologies
              and a commitment to creating exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Profile Image and Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative flex justify-center">
                <img
                  src="/images/profile.jpg"
                  alt="Shrey Nigam"
                  className="w-full max-w-md rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x500/0ea5e9/ffffff?text=Shrey+Nigam';
                  }}
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-accent text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-semibold">Available for Work</span>
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hello! I'm Shrey Nigam, a MERN Stack Developer based in Indore, India.
                  As a fresher, I focus on building robust, scalable, and user-friendly applications
                  while continuously leveling up my skills through projects and learning.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  My journey in technology began with a fascination for how things work on the web.
                  I've developed a solid foundation across both frontend and backend technologies,
                  with a particular passion for the React ecosystem and Node.js development.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to
                  open-source projects, or sharing knowledge with the developer community. I believe
                  in continuous learning and staying updated with the latest industry trends.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">Indore, India</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                  <p className="text-gray-600">Fresher</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                  <p className="text-gray-600">Open to Work</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Remote Work</h4>
                  <p className="text-gray-600">Available</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
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
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My academic background and continuous learning journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaGraduationCap className="text-blue-accent" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                    <h4 className="text-xl text-gray-600 mb-2">{edu.field}</h4>
                    <p className="text-lg text-gray-500 mb-2">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-blue-accent font-medium">{edu.year}</span>
                      <span className="text-gray-600 font-medium">Grade: {edu.grade}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Passions & Interests Section */}
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
              What <span className="gradient-text">Drives</span> Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The core values and passions that guide my approach to development and continuous growth
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
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <passion.icon className="text-blue-accent" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{passion.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{passion.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with passionate people. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
