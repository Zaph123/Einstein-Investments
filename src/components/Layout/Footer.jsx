import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaPhone, FaBriefcase } from 'react-icons/fa'
import img1 from '../../assets/images/line-art-1.jpg'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import useWiggleEffect from '../../hooks/useWiggleEffect'


const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden flex mt-[50px] bg-[#fbfbfb] flex-col items-center justify-center py-[30px] px-[20px] gap-[30px]">
      <img src={img1} alt="" className="absolute opacity-50 w-[400px] left-0 -z-1 top-0" />
      <div className="w-full relative bg-white z-10 flex items-start justify-evenly lg:justify-start flex-wrap gap-[20px]">
        <div className="w-full max-w-[400px] flex flex-col items-start justify-center">
          <h2 className="text-main_blue text-[1.9rem] font-bold">e-invest</h2>
          <p className='text-[.9rem] text-[#797979] hover:text-[#292929]'>Lorem isum dolor Lorem isum dolor Lorem isum dolor Lorem isum dolorLorem isum dolorLorem isum dolor
          Lorem isum dolor Lorem isum dolor
          </p>
        </div>

        <div className="w-full max-w-[200px] flex flex-col gap-1 items-start justify-center">
          <h2 className="font-bold">Company</h2>
           <ul>
            <li className='text-[.9rem] my-2 text-[#797979] hover:text-[#292929]'><a href="#">About Us</a></li>
            <li className='text-[.9rem] my-2 text-[#797979] hover:text-[#292929]'><a href="#">Contact</a></li>
            <li className='text-[.9rem] my-2 text-[#797979] hover:text-[#292929]'><a href="#">Career</a></li>
            <li className='text-[.9rem] my-2 text-[#797979] hover:text-[#292929]'><a href="#">Blog</a></li>
          </ul>
        </div>


        <div className="w-full max-w-[200px] flex flex-col gap-1 items-start justify-center">
          <h2 className='font-bold'>Support</h2>
          <ul>
            <li className='text-[.9rem] my-2 text-[#797979] hover:text-[#292929]'><a href="#">FAQs</a></li>
            {/* <li className='text-[.9rem] my-2 text-[#797979] hover:text-[#292929]'><a href="#">Contact</a></li> */}
            <li className='text-[.9rem] my-2 text-[#797979] hover:text-[#292929]'><a href="#">Features</a></li>
            <li className='text-[.9rem] my-2 text-[#797979] hover:text-[#292929]'><a href="#">Help Centers</a></li>
          </ul>
        </div>

        <div className="w-full max-w-[200px] flex flex-col gap-1 items-start justify-center">
          <h2 className='font-bold'>Contact Us</h2>
          <ul>
            <li className='text-[.9rem] my-2 text-[#797979] hover:text-[#292929] flex items-center justify-start gap-10'><FaPhone className='text-[#1b1b1b]'/> +234902-112-1104</li>
            <li className='text-[.9rem] my-2 text-[#797979] hover:text-[#292929] flex items-center justify-start gap-10'><FaBriefcase className='text-[#1b1b1b]'/> bassey2108@gmail.com</li>
          </ul>
           <ul className='flex items-center justify-start gap-[20px] w-full mt-[30px]'>
            <Socialicons><a href="#"><FaFacebook /></a></Socialicons>
            <Socialicons><a href="#"><FaInstagram /></a></Socialicons>
            <Socialicons><a href="#"><FaWhatsapp /></a></Socialicons>
            <Socialicons><a href="#"><FaTwitter /></a></Socialicons>
          </ul>
        </div>

      </div>
      <div className='relative p-10 w-full flex items-center justify-center'>
        <span className='p-[1px] bg-[#f1f1f1] w-[90%] absolute top-0'/>
        <span className='text-[.8rem] my-2 text-[#797979] hover:text-[#292929]'>@2024 e-invest. All rights reserved.</span>
      </div>
    </footer>
  )
}

 const Socialicons = ({children}) => {
  const ref = useRef()
  const {mouseMove, mouseLeave, x, y} = useWiggleEffect(ref)

  return (
    <motion.li
    ref={ref}
    onMouseMove={mouseMove}
    onMouseLeave={mouseLeave}
    animate={{x, y}}
    transition={{
      type: "spring",
      stiffness: 150,
      damping: 5
    }}
    className='text-[1.5rem] text-[#1b1b1b]'>{children}</motion.li>
  )
 }
export default Footer
