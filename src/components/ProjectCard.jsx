import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bmw-project-card group"
    >
      {/* Project Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-[#009ADA] transition-colors duration-300 tracking-wide">
          {project.title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md hover:bg-[#009ADA] hover:text-white transition-all duration-300 border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className={`flex ${project.liveUrl ? 'space-x-3' : 'justify-center'} pt-4`}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-[#009ADA] text-white rounded-sm hover:bg-[#00A8E8] transition-colors duration-300 text-sm font-bold tracking-wider"
            >
              <FaExternalLinkAlt size={14} />
              <span>LIVE DEMO</span>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border border-gray-700 text-gray-300 rounded-sm hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 text-sm font-bold tracking-wider"
          >
            <FaGithub size={14} />
            <span>CODE</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
