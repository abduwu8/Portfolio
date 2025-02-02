import { FaLinkedin, FaGithub } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
        <div className="flex items-center justify-center gap-8">
            <a href="https://www.linkedin.com/in/abdullahkhannn"
             target="_blank" rel="noopener noreferrer">
                <FaLinkedin fontsize={25} className="opacity-50
                hover:opacity-80" />
             </a>
            
             <a href="https://github.com/abduwu8"
             target="_blank" rel="noopener noreferrer">
                <FaGithub fontsize={25} className="opacity-50
                hover:opacity-80" />
             </a>
        </div>
        <p className="mt-8 text-center text-sm tracking-wide text-slate-700">
            &copy; Abdullah
        </p>
    </div>
  )
}

export default Footer
