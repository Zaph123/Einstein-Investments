import finance from '../assets/images/finance.jpg'
import { FaArrowRight } from 'react-icons/fa';

 const Access = () => {
    return (
        <section className="w-full h-auto py-[50px] bg-[#131313]">
            <div className='w-full flex items-center h-auto p-[10px] justify-around gap-[60px] flex-wrap'>
                <div className="shadow-2xl col-2 w-full max-w-[600px] lg:order-1">
                  <img src={finance} alt="access image" className='w-full rounded-[10px] h-full'/>
                </div>
                <div className='flex flex-col gap-[30px] items-start w-full max-w-[530px] lg:max-w-[700px]'>
                  <h1 className="font-bold text-[70px] w-full max-w-[600px] leading-[90px] sm:text-[3rem] sm:leading-[70px] text-white lg:text-center lg:mx-auto">Get Access to the right Investments</h1>
                  <h3 className="w-full max-w-[400px] text-[#f1f1f1] lg:text-center lg:mx-auto">With our great and reliable sources from our experts now you can <b>Get Access</b> to  <b>Unlimited Investment Offers</b> available around you</h3>
                  <a href="#" className='text-[#b1c4ed] border-2 border-white rounded-xl py-10 px-[15px] lg:mx-auto hover:text-[#e7efff] flex items-center justify-evenly gap-2 w-auto text-[16px] hover:underline'>Learn more... <FaArrowRight className='' /></a>
                </div>
            </div>
        </section>
    )
 }

 export default Access;