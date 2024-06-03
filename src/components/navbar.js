import React, {useState}from 'react';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {Link, Outlet} from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const [isMenuClose, setIsMenuClose] = useState(false);

  const handleMenuOpen = () => {
    setIsmenuOpen(!isMenuOpen);
  }
  const handleMenuClose = () => {
    setIsMenuClose(!isMenuClose);
  }
    return(
      <div>
    <nav className='xl:px-5 bg-slate-700 xl:bg-transparent   flex justify-between items-center  text-neutral-100  xl:text-neutral-900 font-heading text-lg px-4'>
      <Link to={"/"}><h1><span className='font-bold'>Ujjwal.dev</span></h1></Link>
      <div className='xl:hidden absolute top-1 right-2' onClick={handleMenuOpen}><div onClick={handleMenuClose}>{isMenuClose ? <MdClose/> : <FiMenu/> }</div></div>
      <div>
        <ul className={`xl:flex items-center py-4 px-2 gap-10 sm:block ${isMenuOpen ? "flex-col" : 'hidden'}`}>
          <Link to={"/"}>Home</Link>
          <Link to="/projects"><li>Projects</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/about"><li>About</li></Link>
        </ul>
        
      </div>
      
    </nav>
    <Outlet/>
    </div>
    
  )
}
