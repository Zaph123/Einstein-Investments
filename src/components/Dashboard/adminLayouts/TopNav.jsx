import userProfileImg from '../../../assets/images/profile-1.png'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import { motion, AnimatePresence, backInOut } from 'framer-motion';
import HamburgerMenu from '../../Layout/HamburgerMenu';
import { NavMenu } from './SideNav'
import { FaAngleRight, FaCog, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

    return (
      <section className="w-full h-auto bg-white relative">
        <nav className="w-full h-[70px] text-[#b1b1b1] flex items-center justify-between gap-[15px] px-[15px] py-5">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth='2' className="w-[24px]" fill="currentColor">
        <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z">
          </path></svg> */}

          <HamburgerMenu handleOpenNav={handleOpenNav} openNav={openNav}/>
          <h1 className='text-[1.8rem] text-[#252525] font-bold'>Dashboard</h1>

          <div className='w-full max-w-[450px] h-auto flex items-center justify-between gap-[20px]'>
            <form action="#" method="post" className='h-auto lg:hidden w-full'>
              <label className='relative bg-[#f1f1f1] rounded-full p-10 h-[45px] w-full flex items-center justify-center'>
                <div className='w-auto flex item-center justify-start'>
                    <FaSearch className='text-[#585858]'/>
                </div>
                <input type="search" name="search" placeholder='Search here...' className='text-[#000] p-10 focus:outline-none rounded-full border-none bg-[#f1f1f1] w-full' />
              </label>
            </form>
          </div>


          {/* <div>
            <div>
                <label>
                    <select name="nation" id="nation" className='hover:bg-primary text-[0.90rem] transition-all duration-300 hover:text-white w-[120px] cursor-pointer text-[#5c5c5c] px-10 py-5 rounded-md ring-2 ring-[#e4e4e4]'>
                        <option value="Eng(US)">Eng(US)</option>
                    </select>
                </label>
            </div>
          </div> */}

         <div className='cursor-pointer transition-colors duration-300 px-1 border-[#fbfbfb] lg:border-none lg:hover:bg-none border-2 rounded-xl hover:bg-[#fbfbfb] relative flex py-10 w-full md:rounded-full md:max-w-max max-w-[250px] items-center justify-start gap-[10px]'>
            <div className='w-[40px] h-[40px] group cursor-pointer rounded-full overflow-hidden flex justify-center items-center'>
              <img src={userProfileImg} alt="profile image" className='group-hover:scale-110 transition-all duration-300 '/>
            </div>
            <div className='md:hidden'>
                <h1 className='text-[#0d0d0d] font-bold text-[0.9rem]'>Sabrina Carpenter</h1>
                <h3 className='text-[0.8rem]'>Bank Accountant</h3>
            </div>
           <div className="absolute md:hidden right-1 w-[30px] h-[30px] transition-colors duration-300 flex items-center justify-center rounded-full text-[#797979] hover:bg-[#f1f1f1]">
         <FaAngleRight className="w-full"/>
         </div>
        </div>
        </nav>
        <SideHeaderNav openNav={openNav} setOpenNav={setOpenNav}/>
      </section>
    )
  }
  
  const Nav = {
    open: {
      x: 0,
      opacity: 1,
      visibility: "visible",
      transition: {
        duration: .25,
        type: "spring",
        ease: 'backInOut',
      },
    },
    close: {
      x: -100,
      opacity: 0,
      visibility: "hidden",
      transition: {
        duration: 0.25,
        type: "spring",
        ease: "easeInout",
      },
    },
  };
  
  const SideHeaderNav = ({ openNav, setOpenNav }) => {
    return (
      <motion.div
        variants={Nav}
        initial="close"
        animate={openNav ? "open" : "close"}
        className="lg:flex flex-col items-center bottom-0 justify-start top-[60px] gap-[50px] px-10 pb-10 hidden fixed w-full left-0 h-[90vh] z-10 bg-white"
      >
         <section id="SideNav" className="w-full h-full bg-[#fff] overflow-y-auto">
        <NavMenu setOpenNav={setOpenNav}/>
       </section>
      </motion.div>
    );
  };
  export default TopNav;