import Link from 'next/link'
import React from 'react'
import { InstagramIcon, LinkedInIcon } from '../assets/SocialMediaIcons'

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
        <Link href="" legacyBehavior>
        <a className="flex items-center justify-center w-12 h-12 border hover:bg-white/10 border-white rounded-full transition"
           target="_blank"
          rel="noopener noreferrer"
        >
            <LinkedInIcon  className="text-white"/>
        </a>
        </Link>
        <Link href="" legacyBehavior>
        <a className="flex items-center justify-center w-12 h-12 border hover:bg-white/10 border-white rounded-full transition"
           target="_blank"
          rel="noopener noreferrer"
        >
            <InstagramIcon  className="text-white"/>
        </a>
        </Link>
    </div>
  )
}

export default SocialLinks