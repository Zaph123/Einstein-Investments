import {
  motion,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const { scrollY } = useScroll();
  const x = useMotionValue(0);

  //  useMotionValueEvent(scrollY, 'change', latest => {
  //   console.log(latest)
  //  })

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  const toggleBar = {
    initial: {
    rotate: 0
    },
    rotate1: {
      rotate: "45deg",
      y: 9
    },
    hide: {
      scale: 0
    },
    show: {
      x: 5
    },
    rotate3: {
      rotate: "-45deg",
      y: -7
    },
  };
  
  return (
    <motion.header className="header w-full z-[1000] bg-white fixed top-0 left-0 h-auto border-b-[#f2f2f2] border-[2px] p-3">
      <nav className="flex justify-between z-40 items-center w-full h-13 relative">
        <div className="logo h-12">
          {/* <img src={svg} alt="" className='w-full h-full object-cover'/> */}
          <h1 className="text-[30px] font-bold text-main_blue">e-invest</h1>
        </div>
        <div className="links lg:hidden flex items-center justify-between gap-3 h-full w-auto">
          <a
            href="/"
            className="font-normal text-[#797979] hover:text-primary p-10"
          >
            Home
          </a>
          <a
            href="#"
            className="font-normal text-[#797979] hover:text-primary p-10"
          >
            Our Plans
          </a>
          <a
            href="#"
            className="font-normal text-[#797979] hover:text-primary p-10"
          >
            About
          </a>
          <a
            href="#"
            className="font-normal text-[#797979] hover:text-primary p-10"
          >
            Contacts
          </a>
        </div>
        <div className="get-started lg:hidden flex items-center gap-[10px] justify-center p-[5px]">
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
        {/* <motion.div
          initial={{ scale: 1.3 }}
          whileHover={{
            scale: 1.4,
          }}
          transition={{
            duration: 0.5,
          }}
          className="cursor-pointer hidden lg:block"
          onClick={handleOpenNav}
        >
          {openNav ? <FaTimes /> : <FaBarsStaggered />}
        </motion.div> */}

        <motion.div
          className="w-[1.6rem] h-[1.25rem] lg:flex cursor-pointer hidden flex-col justify-between gap-1 items-center"
          style={{scale: .9}}
          whileTap={{ scale: 0.85 }}
          onClick={handleOpenNav}
        >
          <motion.span
            className="w-full h-1 bg-black rounded-[25%] origin-center"
            variants={toggleBar}
            animate={openNav ? "rotate1" : ""}
          />
          <motion.span
            // style={{transform: 'scaleX(0.5)',
            //     transformOrigin: "right"}}
            className="w-full h-1 bg-black rounded-[25%] translate-x-[5px]"
            variants={toggleBar}
            animate={openNav ? "hide" : "show"}
          />
          <motion.span
            className="w-full h-1 bg-black rounded-[25%] origin-center"
            variants={toggleBar}
            animate={openNav ? "rotate3" : ""}
          />
        </motion.div>
      </nav>
      <SideHeaderNav openNav={openNav} />
    </motion.header>
  );
};

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

export default Header;
