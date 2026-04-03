import { motion } from 'framer-motion';
import { FaDownload, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BMWHero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] pointer-events-none"
          style={{
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: '177.77777778vh', // 16:9 aspect ratio
            height: '56.25vw', // 16:9 aspect ratio
          }}
          src="https://www.youtube.com/embed/zuwOfXU4iPo?autoplay=1&mute=1&loop=1&playlist=zuwOfXU4iPo&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
          title="BMW Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Minimal gradient overlay - only at top and bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            

           
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-white mb-4 font-bold tracking-wide bg-black/60 backdrop-blur-sm inline-block px-8 py-2 rounded-lg"
            >
              FULL STACK DEVELOPER
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base md:text-lg text-white mb-12 leading-relaxed font-medium bg-black/60 backdrop-blur-sm px-8 py-4 rounded-lg"
            >
              Engineering digital experiences with precision and performance.
              <br />
              Where innovation meets execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 mb-16"
            >
              <Link to="/projects" className="bmw-btn-primary shadow-2xl hover:scale-105 transition-transform">
                <FaCode className="text-xl" />
                <span>VIEW PROJECTS</span>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-bold tracking-wider rounded-sm bg-black/60 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 shadow-2xl hover:scale-105"
              >
                <FaDownload className="text-xl" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-8"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-black/40 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-[#009ADA] rounded-full mt-2 shadow-lg"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BMWHero;
