import { motion, useScroll, useMotionValueEvent, useMotionValue } from 'framer-motion'
import { FaBarsStaggered } from 'react-icons/fa6'


  const Header = () => { 
   const {scrollY} = useScroll()
   const x = useMotionValue(0)
   
  //  useMotionValueEvent(scrollY, 'change', latest => {
  //   console.log(latest)
  //  })

  return (
    <motion.header className="header w-full z-[1000] bg-white fixed top-0 left-0 h-auto border-b-[#f2f2f2] border-[2px] p-3">
      <nav className='flex justify-between items-center w-full h-13'>
      <div className="logo h-12">
        {/* <img src={svg} alt="" className='w-full h-full object-cover'/> */}
        <h1 className="text-[30px] font-bold text-main_blue">e-invest</h1>
       </div>
      <div className="links lg:hidden flex items-center justify-between gap-3 h-full w-auto">
        <a href="/" className='font-normal text-[#797979] hover:text-primary'>Home</a>
        <a href="#" className='font-normal text-[#797979] hover:text-primary'>Our Plans</a>
        <a href="#" className='font-normal text-[#797979] hover:text-primary'>About</a>
        <a href="#" className='font-normal text-[#797979] hover:text-primary'>Contacts</a>
      </div>
      <div className="get-started lg:hidden flex items-center gap-[10px] justify-center p-[5px]">
        <a href="/auth/login" className='flex items-center justify-center py-[10px] bg-transparent text-[#797979] hover:text-primary rounded-[30px] text-[1rem] px-[20px] cursor-pointer'>Log in</a>
        <a href="/plans" className='flex items-center justify-center py-[10px] bg-[#0c0c0c] text-white rounded-[50px] shadow-[0_10px_10px_rgba(0,0,0,0.2)] border-[2px] border-[#0c0c0c] px-[20px] cursor-pointer'>Get Started</a>
      </div>
      <motion.div 
      whileHover={{
        scale: 1.1
      }}
      className='cursor-pointer hidden lg:block'>
        <FaBarsStaggered />
      </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header
