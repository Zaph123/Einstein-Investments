import img1 from '../assets/images/line-art.png'
import img2 from '../assets/images/doodle-2.jpg'
import { motion, useTransform, useScroll, useMotionValueEvent } from 'framer-motion';

import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import useWiggleEffect from '../hooks/useWiggleEffect';

  const Hero = () => {
    const heading = "One place for all your investing"
    const ref = useRef(null)
    
    // const {mouseMove, mouseLeave, x, y} = useWiggleEffect(ref)
    const varaints = {
      left: {
        x: -100,
        opacity: 0
      },
      right: {
        x: 100,
        opacity: 0
      },
      whileInView: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
          ease: [0.76, 0, 0.24, 1],
          type: 'spring',
          stiffness: 50,
          damping: 10
        }
      }
    }

    const {scrollY} = useScroll({

    })
    
    const y = useTransform(scrollY, [0, 1500], [0, -500])
    const opacity = useTransform(scrollY, [1100, 1200], [1, 0])

    // useMotionValueEvent(scrollY, "change", latest => console.log(latest)
    // )

    return (
      <motion.section style={{y, opacity}} className='overflow-hidden sticky top-0 hero w-full h-auto mt-[40px] xl:mt-[120px] p-4 flex justify-center items-center'>
        <div className='w-full h-auto flex items-center flex-wrap justify-center gap-[30px] z-10'>
           <motion.div
           variants={varaints}
           initial={"left"}
          whileInView={"whileInView"}
           whileHover={"whileHover"}  className="w-full max-w-[600px] flex flex-col items-start xl:items-center justify-center gap-4">
            <div className='flex flex-col items-start xl:items-center justify-center gap-4'>
              <h3 className='bg-[#e0eaff] px-3 rounded-xl text-[0.8rem] text-[#265ed7] '>🔥 Trusted by Millions</h3>
              <motion.h1 
              className="font-bold text-[70px] max-w-[500px] text-[#0c0c0c] leading-[90px] xl:text-center sm:text-[3.5rem] sm:leading-[70px]">
                {heading}
                {/* {heading.split("").map((l, i) => {
                  return <motion.span
                  //  variants={{
                  //   initial: {
                  //    y: 0
                  //   },
                  //   whileHover: {
                  //     y: -30
                  //   }
                  // }}
                  initial={{
                    x: -50,
                    opacity: 0
                  }}
                  animate={{x: 0, opacity: 1}}
                  transition={{
                    type: "spring"
                  }}
                  key={i}
                  className=''>{l}</motion.span>
                })} */}
                </motion.h1>
              <h3 className="w-full max-w-[400px] text-[#535353] xl:text-center">Invest in 1,000+ equities for real-time insights and tailored reporting</h3>
            </div>
            <motion.a
            // onMouseMove={mouseMove}
            // onMouseLeave={mouseLeave}
            // animate={{x, y}}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 5,
            }}
            ref={ref} href="/Einstein-Investments/plans" className='flex items-center gap-2 shadow-[0_10px_10px_rgba(0,0,0,0.2)] px-[35px] py-[15px] bg-[#0c0c0c] hover:bg-[#131313] active:bg-[#0c0c0c] hover:ring-2 hover:ring-[#0000004f] text-white rounded-[50px]'>Get Started <FaArrowRight className='-rotate-45'/> </motion.a>
          </motion.div> 

          <motion.div variants={varaints} initial={"right"} whileInView={"whileInView"} className="relative col-2 w-full max-w-[600px] md:max-w-[400px] h-auto">
            <img src={img1} alt="" className='w-full'/>
            {/* <img src={img2} alt="" className='w-full rounded-[10px]'/> */}
          </motion.div>
        </div>
      </motion.section> 
    )
  }

  export default Hero;