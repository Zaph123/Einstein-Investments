import { motion } from "framer-motion";

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


const HamburgerMenu = ({handleOpenNav, openNav}) => {
  return (
    <motion.div
      className="w-[1.6rem] relative group h-[1.25rem] flex-shrink-0 lg:flex cursor-pointer hidden flex-col justify-between gap-1 items-center"
      style={{ scale: 0.9 }}
      whileTap={{ scale: 0.85 }}
      onClick={handleOpenNav}
    >
      <motion.div className="absolute transition-all duration-700 group-hover:scale-100 scale-0 w-[50px] h-[50px] left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full bg-[#131313]"/>
      <div style={{transition: ".5s"}} className="w-[1.6rem] transition-all duration-1000 group-hover:scale-75 relative group h-[1.25rem] flex-shrink-0 lg:flex cursor-pointer hidden flex-col justify-between gap-1 items-center"> 
      <motion.span
        className="w-full h-1 relative bg-black transition-colors duration-700 group-hover:bg-white rounded-full origin-center"
        variants={toggleBar}
        animate={openNav ? "rotate1" : ""}
      />
      <motion.span
        className="w-full h-1 relative bg-black transition-colors duration-700 group-hover:bg-white rounded-full translate-x-[5px]"
        variants={toggleBar}
        animate={openNav ? "hide" : "show"}
      />
      <motion.span
        className="w-full h-1 relative bg-black transition-colors duration-700 group-hover:bg-white rounded-full origin-center"
        variants={toggleBar}
        animate={openNav ? "rotate3" : ""}
      />
      </div>
    </motion.div>
  );
};

export default HamburgerMenu;
