import { motion } from 'framer-motion';

const SkillBadge = ({ skill, index }) => {
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
      className="bmw-card group"
    >
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{getSkillIcon(skill.icon)}</span>
        <h3 className="font-bold text-white group-hover:text-[#009ADA] transition-colors duration-300 tracking-wide">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default SkillBadge;
