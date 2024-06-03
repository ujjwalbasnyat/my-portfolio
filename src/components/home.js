import React from 'react';
import { PiHandWavingDuotone } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import TechStack from './techstacks';
import MyImage from '../assets/myImage.jpg';
import './Home.css';


export default function Home() {

  const LinkedinWay = () => {
    window.open('https://www.linkedin.com/in/ujjwal-singh-basnet-1895b6277/','_blank', 'noopener,noreferrer')
  }

  const GithubWay = () => {
    window.open('https://github.com/ujjwalbasnyat','_blank', 'noopener,noreferrer')
  }
  return (
    <div className='mt-[20%] xl:mt-[8%]  flex justify-center items-center mx-4'>
      <div>
      <div className='flex items-center'>
        <div>
      <div className='flex items-center'>
        <h1 className='font-bold font-heading xl:text-3xl text-xl xl:w-[60%]'>Front-End React Developer <PiHandWavingDuotone className='text-red-300'/></h1>
      </div>
          <p className=' overflow-auto  xl:w-[400px]  font-body xl:text-lg'>Hi, I'm Ujjwal Singh Basnet. A passinate Front-End React Developer based in Kathmandu, Nepal.</p>
          <div className='flex text-2xl gap-3 cursor-pointer'>
            <FaLinkedin onClick={LinkedinWay}/>
            <FaGithub onClick={GithubWay}/>
          </div>
        </div>
        
          <img src={MyImage} alt='myImage' className='myImage  w-[150px] h-[150px] '/>
      </div>
      
      <TechStack/>
      
      </div>
      
    </div>
  )
}
