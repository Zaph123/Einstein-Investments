import img1 from '../assets/images/money.jpg'

import { FaArrowRight } from 'react-icons/fa';

  const Hero = () => {
    return (
      <section className='relative hero w-full h-auto mt-[60px] p-4 flex justify-center items-center py-[50px]'>
       {/* <svg className='w-full absolute object-cover -z-[1] top-0 left-0 h-full' width="100%" height="780" viewBox="0 0 1440 780" fill="#dfdfdf" xmlns="http://www.w3.org/2000/svg">
          <path d="M53.8776 777.576C74.9221 684.2 166.421 490.819 364.062 464.298C611.112 431.148 789.713 612.305 1066.16 555.479C1287.32 510.017 1472.98 167.625 1538.17 2.11119M-9.22097 451.838C27.6487 522.689 151.724 654.364 353.069 614.259C604.75 564.128 940.08 97.0631 1262.15 134.758C1519.8 164.914 1738.81 206.601 1816.1 223.675M-4.58385 635.541C8.98734 523.213 96.1381 288.193 336.172 246.743C636.214 194.929 860.731 399.473 1184.82 336.279C1444.09 285.723 1614.96 133.043 1668 63.0229" stroke="white" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round"/>
       </svg> */}

        {/* <div className="absolute top-0 left-0 shadow-2xl col-2 w-full h-full">
            <img src={img1} alt="" className='w-full h-full object-cover'/>
          </div> */}
        <div className='w-full h-auto flex items-center flex-wrap justify-evenly gap-[30px] z-10'>
           <div className="w-full max-w-[600px] flex flex-col items-start md:items-center justify-center gap-4">
            <div className='flex flex-col items-start md:items-center justify-center gap-4'>
              <h3 className='bg-[#e0eaff] px-3 rounded-xl text-[0.8rem] text-[#265ed7] '>🔥 Trusted by Millions</h3>
              <h1 className="font-bold text-[70px] max-w-[500px] text-[#0c0c0c] leading-[90px] md:text-center sm:text-[3.5rem] sm:leading-[70px]">One place for all your investing</h1>
              <h3 className="w-full max-w-[400px] text-[#535353] md:text-center">Invest in 1,000+ equities for real-time insights and tailored reporting</h3>
            </div>
            <a href="/Einstein-Investments/plans" className='flex items-center gap-2 shadow-2xl px-[35px] py-[15px] bg-[#0c0c0c] hover:bg-primary active:bg-[#0c0c0c] hover:ring-2 hover:ring-[#0000004f] text-white rounded-[50px]'>Get Started <FaArrowRight className='-rotate-45'/> </a>
          </div> 
          <div className="shadow-2xl col-2 w-full max-w-[400px] h-[600px]">
            <img src={img1} alt="" className='w-full rounded-[10px] h-full'/>
          </div>
        </div>
      </section> 
    )
  }

  export default Hero;