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
      className="w-[1.6rem] h-[1.25rem] flex-shrink-0 lg:flex cursor-pointer hidden flex-col justify-between gap-1 items-center"
      style={{ scale: 0.9 }}
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
  );
};

export default HamburgerMenu;
