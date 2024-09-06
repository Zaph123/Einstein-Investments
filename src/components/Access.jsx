import finance from '../assets/images/invest4.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { motion, useScroll, useInView, useMotionValueEvent, useTransform } from 'framer-motion';
import { useRef } from 'react';

 const Access = () => {
  const ref = useRef(null)

  const {scrollYProgress } = useScroll({
    target: ref,
    offset: ["200px end", 'end start']
  })
  const inView = useInView({target: ref})
  //  useMotionValueEvent(scrollYProgress, "change", l => console.log(l, inView))
 
   const y = useTransform(scrollYProgress, [0, .75], [200, -50])

    return (
        <motion.section
        //  initial={{y: 50, opacity: 0}}
        //  whileInView={{
        //   y: -50,
        //   opacity: 1
        // }} 
       
        // transition={{
        //   duration: .75,
        //   ease: [0.76, 0, 0.24, 1],
        //   type: "spring",
        //   stiffness: 50,
        //   damping: 10
        // }}
        id='id'
        style={{y}}
        ref={ref}
        className="w-full relative z-10 h-auto py-[50px] bg-[rgb(19,19,19)]">
            <div className='w-full flex items-center min-h-screen p-[10px] justify-around gap-[60px] flex-wrap'>
                <div className="shadow-2xl col-2 w-full max-w-[550px] h-[550px] lg:order-1">
                  <img src={finance} alt="access image" className='w-full rounded-[10px] h-full object-cover'/>
                </div>
                <div className='flex flex-col gap-[30px] items-start w-full max-w-[530px] lg:max-w-[700px]'>
                  <h1 className="font-bold text-[70px] w-full max-w-[600px] leading-[90px] sm:text-[3rem] sm:leading-[70px] text-white lg:text-center lg:mx-auto">Get Access to the right Investments</h1>
                  <h3 className="w-full max-w-[400px] text-[#f1f1f1] lg:text-center lg:mx-auto">With our great and reliable sources from experts now you can <b>Get Access</b> to  <b>Unlimited Investment Offers</b> available around you</h3>
                  <a href="#" className='border-2 border-white rounded-xl py-10 px-[15px] lg:mx-auto hover:text-[#e7efff] text-[#e7efff] flex items-center justify-evenly gap-2 w-auto text-[16px] hover:underline'>Learn more <FaArrowRight className='' /></a>
                </div>
            </div>
        </motion.section>
    )
 }

 export default Access;