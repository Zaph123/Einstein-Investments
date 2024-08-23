import img1 from '../assets/images/money.jpg'
import img2 from '../assets/images/invest4.jpg'

import { FaArrowRight } from 'react-icons/fa';

  const Hero = () => {
    return (
      <section className='relative hero w-full h-auto mt-[40px] p-4 flex justify-center items-center py-[50px]'>
        <div className='w-full h-auto flex items-center flex-wrap justify-evenly gap-[30px] z-10 py-[50px]'>
           <div className="w-full max-w-[600px] flex flex-col items-start xl:items-center justify-center gap-4">
            <div className='flex flex-col items-start xl:items-center justify-center gap-4'>
              <h3 className='bg-[#e0eaff] px-3 rounded-xl text-[0.8rem] text-[#265ed7] '>🔥 Trusted by Millions</h3>
              <h1 className="font-bold text-[70px] max-w-[500px] text-[#0c0c0c] leading-[90px] xl:text-center sm:text-[3.5rem] sm:leading-[70px]">One place for all your investing</h1>
              <h3 className="w-full max-w-[400px] text-[#535353] xl:text-center">Invest in 1,000+ equities for real-time insights and tailored reporting</h3>
            </div>
            <a href="/Einstein-Investments/plans" className='flex items-center gap-2 shadow-2xl px-[35px] py-[15px] bg-[#0c0c0c] hover:bg-primary active:bg-[#0c0c0c] hover:ring-2 hover:ring-[#0000004f] text-white rounded-[50px]'>Get Started <FaArrowRight className='-rotate-45'/> </a>
          </div> 
          <div className="shadow-2xl col-2 w-full max-w-[600px] xl:max-w-[800px] h-auto">
            <img src={img2} alt="" className='w-full rounded-[10px]'/>
          </div>
        </div>
      </section> 
    )
  }

  export default Hero;