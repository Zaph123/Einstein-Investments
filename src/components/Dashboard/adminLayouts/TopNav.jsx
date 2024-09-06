import userProfileImg from '../../../assets/images/profile-1.png'
import { useState, useContext, useEffect } from 'react';
import { FaRegUser } from 'react-icons/fa'
import { TbLogout, TbSettings } from 'react-icons/tb'
import {AiOutlineSetting} from 'react-icons/ai'
import { CiSaveUp2 } from 'react-icons/ci'
import { MdOutlineHelpOutline } from 'react-icons/md'
import { FiActivity } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion';
import HamburgerMenu from '../../Layout/HamburgerMenu';
import { NavMenu } from './SideNav'
import { FaAngleRight, FaRegBell } from 'react-icons/fa';
import { InvestmentContext } from '../../../context/InvestmentContext';
import { CiSearch } from 'react-icons/ci';

const TopNav = () => {
  const { userData, dashboardSectionName } = useContext(InvestmentContext)

  const [openNav, setOpenNav] = useState(false);
  const [openProfile, setOpenProfile] = useState(false)

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  const handleOpenProfile = (e) => {
    console.log(e);
    
    setOpenProfile(!openProfile)
    e.stopPropagation()
  }

  useEffect(() => {
    console.log(openProfile);
    
  },[openProfile])

    return (
      <section className="w-full h-auto bg-white relative">
        <nav className="w-full h-[70px] text-[#b1b1b1] flex items-center justify-between gap-[15px] px-[15px] py-5">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth='2' className="w-[24px]" fill="currentColor">
        <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z">
          </path></svg> */}

          <HamburgerMenu handleOpenNav={handleOpenNav} openNav={openNav}/>
          {/* <h1 className='text-[1.8rem] text-[#252525] font-bold'>{dashboardSectionName}</h1> */}
          <h1 className="font-medium text-[1.02rem] text-[#727272] shrink-0">Welcome <span className='font-bold'>{userData[0]?.name}</span>👏</h1>

          <div className='w-full max-w-[400px] h-auto flex items-center justify-between gap-[20px]'>
            <form action="#" method="post" className='h-auto lg:hidden w-full'>
              <label className='relative bg-[#f1f1f1] rounded-full h-[45px] w-full flex items-center justify-center'>
                <div className='w-auto absolute left-[10px] flex item-center justify-start'>
                    <CiSearch className='text-[1.5rem] text-[#0f0f0f]'/>
                </div>
                <input type="search" name="search" placeholder='Search here...' className='text-[#000] pl-[50px] p-10 focus:outline-[1px] focus:outline-[#cfcfcf] focus:outline rounded-full border-none bg-[#f1f1f1] w-full' />
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
          <div className='text-[1.3rem] gap-[10px] w-auto flex items-center flex-shrink-0 justify-between cursor-pointer'>
           <div className='w-[40px] h-[40px] flex items-center justify-center border-[1px] rounded-full border-[#ececec]'>
             <FaRegBell className='flex-shrink-0'/>
           </div> 
         <motion.div  
           whileTap={{
             scale: .95
            }} 
           onClick={handleOpenProfile} className='cursor-pointer z-30 flex-shrink-0 transition-colors duration-300 px-1 border-[#fbfbfb] lg:border-none lg:hover:bg-none border-2 rounded-xl hover:bg-[#fbfbfb] relative flex py-10 md:max-w-max md:rounded-full w-[250px] items-center justify-start gap-[10px]'>
            <div className='w-[40px] h-[40px] group cursor-pointer rounded-full overflow-hidden flex justify-center items-center'>
              <img src={userProfileImg} alt="profile image" className='group-hover:scale-110 transition-all duration-300 '/>
            </div>
            <div className='md:hidden'>
                <h1 className='text-[#0d0d0d] font-bold text-[0.9rem]'>{userData[0]?.name}</h1>
                <h3 className='text-[0.8rem] text-[#575757]'>Bank Accountant</h3>
            </div>
           <div className="absolute md:hidden right-1 w-[30px] h-[30px] transition-colors duration-300 flex items-center justify-center rounded-full text-[#797979] hover:bg-[#f1f1f1]">
            <FaAngleRight className="w-full"/>
         </div>
         <AnimatePresence>
          {openProfile && <ProfileInfo userData={userData}/>}
         </AnimatePresence>
        </motion.div>
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
        className="lg:flex flex-col items-center bottom-0 justify-start top-[60px] gap-[50px] px-10 pb-10 hidden fixed w-full left-0 h-screen z-10 bg-white"
      >
         <section id="SideNav" className="w-full h-full bg-[#fff] overflow-y-auto">
        <NavMenu setOpenNav={setOpenNav}/>
       </section>
      </motion.div>
    );
  };

  const ProfileInfo = ({userData}) => {
    return (
      <motion.div
      initial={{
        y: -50,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: ".3",
        type: "spring",
        ease: "backInOut",
      }}
      exit={{
        y: -50,
        opacity: 0
      }}
      className='flex flex-col items-start justify-start absolute gap-10 top-[75px] shadow-lg p-10 right-10 w-[300px] h-auto rounded-[10px] bg-white'>
        <div className='flex items-center justify-start w-full gap-10'>
          <div className='w-[40px] h-[40px] group cursor-pointer rounded-full overflow-hidden flex justify-center items-center'>
              <img src={userProfileImg} alt="profile image" className='group-hover:scale-110 transition-all duration-300 '/>
            </div>
            <div className=''>
                <h1 className='text-[#0d0d0d] font-bold text-[0.9rem]'>Einstein Bassey</h1>
                <h3 className='text-[0.75rem]'>Basic Plan</h3>
            </div>
        </div>
        <span className='inline-block w-full bg-[#f1f1f1] h-[2px]'/>
        <div className='flex flex-col items-start justify-center w-full'>
          <div className='w-full h-auto'>
            <a href="#" className='flex items-center justify-start text-[#292929] gap-10 text-[.85rem] py-[7px] px-10 rounded-[10px] hover:bg-[#f1f1f1] w-full font-bold'>
              <FaRegUser className="text-[1.1rem] text-[#292929]"/>
              Profile
              </a>
            </div>
          <div className='w-full h-auto'>
            <a href="#" className='flex items-center justify-start text-[#292929] gap-10 text-[.85rem] py-[7px] px-10 rounded-[10px] hover:bg-[#f1f1f1] w-full font-bold'>
            <FiActivity className="text-[1.1rem] text-[#292929]"/>
              Activitiy
              </a>
            </div>
          <div className='w-full h-auto'>
            <a href="#" className='flex items-center justify-start text-[#292929] gap-10 text-[.85rem] py-[7px] px-10 rounded-[10px] hover:bg-[#f1f1f1] w-full font-bold'>
             <AiOutlineSetting className="text-[1.1rem] text-[#292929]"/>
              Account settings
            </a>
          </div>
          <div className='w-full h-auto'>
            <a href="#" className='flex items-center justify-start text-[#292929] gap-10 text-[.85rem] py-[7px] px-10 rounded-[10px] hover:bg-[#f1f1f1] w-full font-bold'>
            <MdOutlineHelpOutline className="text-[1.1rem] text-[#292929]"/>
             Help
            </a>
          </div>
        </div>
        <span className='inline-block w-full bg-[#f1f1f1] h-[2px]'/>
        <div className='flex flex-col items-start justify-center w-full'>
          <div className='w-full h-auto'>
            <a href="#" className='flex items-center justify-start text-[#292929] gap-10 text-[.85rem] py-[7px] px-10 rounded-[10px] hover:bg-[#f1f1f1] w-full font-bold'>
            <CiSaveUp2 strokeWidth={1} className="text-[1.1rem] text-[#292929]"/>
              Upgrade Plan
              </a>
              </div>
          <div className='w-full h-auto'>
            <a href="#" className='flex items-center justify-start text-[#292929] gap-10 text-[.85rem] py-[7px] px-10 rounded-[10px] hover:bg-[#f1f1f1] w-full font-bold'>
            <TbLogout className="text-[1.1rem] text-[#292929]"/>
              Logout
              </a>
              </div>
        </div>
      </motion.div>
    )
  }
  export default TopNav;