import finance from '../assets/images/finance.jpg'
import { FaArrowRight } from 'react-icons/fa';

 const Access = () => {
    return (
        <section className="w-full h-auto py-[50px] bg-[#fbfbfb]">
            <div className='w-full flex items-center h-auto p-[10px] justify-around gap-[60px] flex-wrap'>
                <div className="shadow-2xl col-2 w-full max-w-[600px] lg:order-1">
                  <img src={finance} alt="access image" className='w-full rounded-[10px] h-full'/>
                </div>
                <div className='flex flex-col gap-[30px] items-start w-full max-w-[600px]'>
                  <h1 className="font-bold text-[70px] w-full max-w-[500px] leading-[90px] sm:text-[3.2rem] sm:leading-[70px]">Get Access to the right Investments</h1>
                  <h3 className="w-full max-w-[400px] text-[#535353]">With our great and reliable sources from our experts now you can <b>Get Access</b> to  <b>Unlimited Investment Offers</b> available around you</h3>
                  <a href="#" className='text-[#265ed7] hover:text-[#002e91] flex items-center justify-evenly gap-2 w-auto text-[16px] hover:underline'>Learn more... <FaArrowRight className='' /></a>
                </div>
            </div>
        </section>
    )
 }

 export default Access;