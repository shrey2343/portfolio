import { useEffect, useState } from "react";
import "./BMWLoader.css";

export default function BMWLoader({ onFinish }) {
  const [animate, setAnimate] = useState(false);
  const [started, setStarted] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(3);

  const handleClick = () => {
    if (!started) {
      setStarted(true);
      
      // Play BMW engine sound
      const audio = new Audio('/bmw-engine-start.mp3');
      audio.volume = 0.5;
      
      // Get audio duration and set animation duration
      audio.addEventListener('loadedmetadata', () => {
        const duration = audio.duration;
        console.log('Audio duration:', duration);
        setAnimationDuration(duration);
        
        // Set CSS variable for animation duration
        document.documentElement.style.setProperty('--animation-duration', `${duration}s`);
        
        // Close loader when animation completes (audio continues in background)
        setTimeout(() => {
          console.log('Animation finished, showing website');
          onFinish();
        }, duration * 1000);
      });
      
      audio.play()
        .then(() => {
          console.log('Audio playing');
          // Start animation immediately when audio starts
          setAnimate(true);
        })
        .catch(err => console.log('Audio error:', err));

      // Fallback: if metadata doesn't load, close after 4 seconds
      setTimeout(() => {
        if (animationDuration === 3) {
          console.log('Fallback: Finishing loader');
          onFinish();
        }
      }, 4000);
    }
  };

  return (
    <div className="loader" onClick={handleClick}>
      <div className={`logo-container ${animate ? "open" : ""}`}>
        {/* LEFT HALF */}
        <div className="half left">
          <img src="/bmw-logo.png" alt="BMW" />
        </div>

        {/* RIGHT HALF */}
        <div className="half right">
          <img src="/bmw-logo.png" alt="BMW" />
        </div>
      </div>
      
      {/* Click Message */}
      {!started && (
        <div className="click-message">
          <p>CLICK THE LOGO TO ENTER</p>
          <div className="pulse-indicator"></div>
        </div>
      )}
    </div>
  );
}
