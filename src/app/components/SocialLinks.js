import React from 'react';
import Link from 'next/link';
import { InstagramIcon, LinkedInIcon } from '../assets/SocialMediaIcons';
import { motion } from 'framer-motion';

const MagneticIcon = ({ href, icon: Icon }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const center = {
      x: left + width / 2,
      y: top + height / 2
    };
    
    // Calculate distance from center (max 30px movement)
    const maxDistance = 30;
    const x = (clientX - center.x) / 3;
    const y = (clientY - center.y) / 3;
    
    // Clamp values between -maxDistance and maxDistance
    setPosition({
      x: Math.max(Math.min(x, maxDistance), -maxDistance),
      y: Math.max(Math.min(y, maxDistance), -maxDistance)
    });
  };
  
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Link href={href} passHref>
      <motion.a
        className="flex items-center justify-center w-12 h-12 border hover:bg-white/10 border-white rounded-full transition-colors relative"
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      >
        <Icon className="text-white" />
      </motion.a>
    </Link>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <MagneticIcon 
        href="https://www.linkedin.com/in/qudus-omotunde-young?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        icon={LinkedInIcon}
      />
      <MagneticIcon 
        href="https://www.instagram.com/iam_qudusyoung/profilecard/?igsh=bzA3bWRoOWZnbTB3"
        icon={InstagramIcon}
      />
    </div>
  );
};

export default SocialLinks;