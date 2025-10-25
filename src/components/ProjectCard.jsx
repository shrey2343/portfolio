import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 group"
    >

      {/* Project Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-accent transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-accent hover:text-white transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className={`flex ${project.liveUrl ? 'space-x-3' : 'justify-center'} pt-2`}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-accent text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm font-medium"
            >
              <FaExternalLinkAlt size={14} />
              <span>Live Demo</span>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 text-sm font-medium"
          >
            <FaGithub size={14} />
            <span>View Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
