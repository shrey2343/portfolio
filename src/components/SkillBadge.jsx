import { motion } from 'framer-motion';

const SkillBadge = ({ skill, index }) => {
  const getIconClass = (iconName) => {
    const iconMap = {
      react: 'text-blue-500',
      javascript: 'text-yellow-500',
      typescript: 'text-blue-600',
      html5: 'text-orange-500',
      css3: 'text-blue-400',
      tailwind: 'text-cyan-500',
      nextjs: 'text-gray-800',
      vue: 'text-green-500',
      nodejs: 'text-green-600',
      express: 'text-gray-700',
      python: 'text-yellow-600',
      django: 'text-green-700',
      fastapi: 'text-teal-500',
      api: 'text-purple-500',
      graphql: 'text-pink-500',
      microservices: 'text-indigo-500',
      mongodb: 'text-green-500',
      postgresql: 'text-blue-700',
      mysql: 'text-orange-600',
      redis: 'text-red-500',
      firebase: 'text-yellow-500',
      prisma: 'text-gray-800',
      git: 'text-orange-600',
      docker: 'text-blue-500',
      aws: 'text-orange-500',
      vercel: 'text-gray-800',
      figma: 'text-purple-500',
      vscode: 'text-blue-500',
      postman: 'text-orange-500',
      jest: 'text-red-600'
    };
    return iconMap[iconName] || 'text-gray-500';
  };

  const getSkillIcon = (iconName) => {
    // Simple icon representation using text/emoji
    const iconMap = {
      react: '⚛️',
      javascript: '🟨',
      typescript: '🔷',
      html5: '🌐',
      css3: '🎨',
      tailwind: '💨',
      nextjs: '▲',
      vue: '💚',
      nodejs: '🟢',
      express: '🚀',
      python: '🐍',
      django: '🎯',
      fastapi: '⚡',
      api: '🔌',
      graphql: '🔺',
      microservices: '🏗️',
      mongodb: '🍃',
      postgresql: '🐘',
      mysql: '🐬',
      redis: '🔴',
      firebase: '🔥',
      prisma: '🔮',
      git: '📦',
      docker: '🐳',
      aws: '☁️',
      vercel: '▲',
      figma: '🎨',
      vscode: '💻',
      postman: '📮',
      jest: '🧪'
    };
    return iconMap[iconName] || '💼';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
    >
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{getSkillIcon(skill.icon)}</span>
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-accent transition-colors duration-300">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default SkillBadge;
