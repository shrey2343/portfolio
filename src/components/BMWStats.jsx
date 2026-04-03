import { motion } from 'framer-motion';

const BMWStats = () => {
  const stats = [
    { number: '6+', label: 'PROJECTS', subtitle: 'COMPLETED' },
    { number: '14+', label: 'TECHNOLOGIES', subtitle: 'MASTERED' },
    { number: '100%', label: 'DEDICATION', subtitle: 'GUARANTEED' },
    { number: '∞', label: 'INNOVATION', subtitle: 'DRIVEN' }
  ];

  return (
    <section className="bg-black py-20 border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bmw-stat-card">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold bmw-gradient-text mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-white font-bold text-sm tracking-widest mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-xs tracking-wider">
                  {stat.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BMWStats;
