// import userProfileImg from '../../../assets/images/profile-1.png'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'
// import { FaBarsStaggered } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import HamburgerMenu from '../../Layout/HamburgerMenu';

const TopNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

    return (
      <section className="w-full h-auto bg-white relative">
        <nav className="w-full h-[70px] text-[#b1b1b1] flex items-center justify-between px-10">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth='2' className="w-[24px]" fill="currentColor">
        <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z">
          </path></svg> */}

          <h1 className='text-[1.8rem] text-[#252525] font-bold'>Dashboard</h1>

          <div className='w-auto h-auto flex items-center justify-between gap-[20px]'>
            <form action="#" method="post" className='h-auto lg:hidden w-auto'>
              <label className='relative h-[45px] w-full min-w-[300px] flex items-center justify-center'>
                <div className='absolute top-2/4 -translate-y-2/4 left-0 w-[45px] flex item-center justify-center'>
                    <FaSearch className='text-[#585858]'/>
                </div>
                <input type="search" name="search" placeholder='Search here...' className='text-[#000] p-10 pl-[40px] focus:outline-none focus:ring-1 focus:ring-primary  bg-[#f1f1f1] w-full rounded-[50px]' />
              </label>
            </form>
             <HamburgerMenu handleOpenNav={handleOpenNav} openNav={openNav}/>
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

          {/* <div className='flex items-center justify-center gap-[10px]'>
            <div className='w-12 h-12 group cursor-pointer rounded-full overflow-hidden flex justify-center items-center'>
              <img src={userProfileImg} alt="profile image" className='group-hover:scale-110 transition-all duration-300 '/>
              </div>
            <div>
                <h1 className='text-[#0d0d0d] font-bold'>Sabrina Carpenter</h1>
                <h3 className='text-[14px]'>Admin</h3>
                </div>
                </div> */}
        </nav>
        <SideHeaderNav />
      </section>
    )
  }
  
  const Nav = {
    open: {
      scale: 1,
      opacity: 1,
      visibility: "visible",
      transition: {
        duration: 0.25,
        type: "spring",
        ease: "easeInout",
      },
    },
    close: {
      scale: 0,
      opacity: 0,
      visibility: "hidden",
      transition: {
        duration: 0.25,
        type: "spring",
        ease: "easeInout",
      },
    },
  };
  
  const SideHeaderNav = ({ openNav }) => {
    return (
      <motion.div
        variants={Nav}
        initial="close"
        animate={openNav ? "open" : "close"}
        className="lg:flex flex-col items-center bottom-0 justify-start top-[60px] py-30 gap-[50px] px-10 hidden absolute w-full left-0 h-screen z-10 bg-white"
      >
        <div className="links flex items-center justify-center flex-col gap-1 h-auto w-full">
          <a
            href="/"
            className="font-normal text-[#797979] hover:text-primary p-10 w-full rounded-xl hover:bg-[#f8f8f8] openNav:bg-[#f1f1f1]"
          >
            Home
          </a>
          <a
            href="#"
            className="font-normal text-[#797979] hover:text-primary p-10 w-full rounded-xl hover:bg-[#f8f8f8] openNav:bg-[#f1f1f1]"
          >
            Our Plans
          </a>
          <a
            href="#"
            className="font-normal text-[#797979] hover:text-primary p-10 w-full rounded-xl hover:bg-[#f8f8f8] openNav:bg-[#f1f1f1]"
          >
            About
          </a>
          <a
            href="#"
            className="font-normal text-[#797979] hover:text-primary p-10 w-full rounded-xl hover:bg-[#f8f8f8] openNav:bg-[#f1f1f1]"
          >
            Contacts
          </a>
        </div>
        <div className="get-started flex items-center gap-[10px] justify-center p-[5px]">
          <a
            href="/Einstein-Investments/auth/login"
            className="flex items-center justify-center bg-transparent text-[#797979] hover:text-primary py-10 rounded-[30px] text-[1rem] px-[20px] cursor-pointer"
          >
            Log in
          </a>
          <a
            href="/Einstein-Investments/plans"
            className="flex items-center justify-center py-[10px] bg-[#0c0c0c] hover:bg-primary openNav:bg-[#0c0c0c] text-white rounded-[50px] shadow-[0_10px_10px_rgba(0,0,0,0.2)] border-[2px] border-[#0c0c0c] px-[20px] cursor-pointer"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    );
  };
  export default TopNav;