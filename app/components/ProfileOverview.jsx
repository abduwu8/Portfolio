"use client"

import Image from "next/image"
import ProfilePic from "../../public/patrickBravo.png"
import { PROFILE } from "../constants"
import { FaDownload } from "react-icons/fa6"
import { motion } from "framer-motion"

const ProfileOverview = () => {
  return (
    <div className="my-24">
        <motion.div 
            initial={{ opacity : 0, y:-100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration : 1 }}
            className="flex flex-col items-center justify-center gap-4">
            <Image src={ProfilePic}
                width={110}
                height={110}
                alt="ProfilePic"
                className="rounded-full border-2 border-slate-400" />
                <h1 className="text-2xl font-bold">{PROFILE.name}</h1>
                <p className="tracking-lighter">{PROFILE.city}</p>
                <a href="/AbdullahResume (3).pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-x-2 rounded-full bg-gray-300
                px-3 py-2 text-sm font-semibold tracking-tight text-slate-950
                hover:text-teal-800">
                    Download Resume
                    <FaDownload />

                </a>    
            <p className="my-10 text-center text-5xl font-semibold
            tracking-tighter lg:text-[10rem]">
                {PROFILE.greet.split('').map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{opacity: 0, y:50}}
                        animate={{opacity: 1, y:0}}
                        transition={{duration: 1, delay: index * 0.15}}
                    >
                        {char}
                    </motion.span>    
                ))}
            </p>
            <p className="mb-10 max-w-2xl p-1 text-center text-xl
            tracking-tight text-slate-400 lg:text-3xl">
                A highly motivated student currently pursuing a {""}
                <span className="border-b font-medium text-slate-200">
                Bachelor of Computer Applications (BCA).    
                </span> {""}
                Skilled in both front-end and back-end development, particularly with React, and eager to contribute to full-stack projects.{""}
                <span className="font-medium text-slate-200"> Committed to continuous learning and growth in the tech field. </span>
                {""} 
            </p>
        </motion.div>
    </div>
  )
}

export default ProfileOverview
