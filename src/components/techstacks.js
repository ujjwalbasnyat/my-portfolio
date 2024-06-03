import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


const TechStack = () => {
    return(
        <div className="flex items-center gap-6  mt-10  ">
            <p className="border-r-[2px] border-neutral-700 pr-2 font-semibold">Tech Stack</p>
            <div className='icon flex gap-5 xl:gap-10  text-2xl xl:text-3xl sm:text-2xl '>
                <FaHtml5 className="text-orange-600 "/>
                <FaCss3Alt className="text-sky-500 "/>
                <IoLogoJavascript className="text-yellow-400 "/>
                <FaReact className="text-sky-400 "/>
                <RiTailwindCssFill className="text-sky-500 "/>
            </div>
  
        </div>
    )
  }

  export default TechStack;