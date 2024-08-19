// import userProfileImg from '../../../assets/images/profile-1.png'
import { FaSearch } from 'react-icons/fa'
import { FaBarsStaggered } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const TopNav = () => {
    return (
      <section className="w-full h-auto bg-white">
        <nav className="w-full h-[70px] text-[#b1b1b1] flex items-center justify-between px-10">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth='2' className="w-[24px]" fill="currentColor">
        <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z">
          </path></svg> */}

          <h1 className='text-[1.8rem] text-[#252525] font-bold'>Dashboard</h1>

          <div className='w-auto h-auto flex items-center justify-between gap-[20px]'>
            <form action="#" method="post" className='h-auto lg:hidden w-auto'>
              <label className='relative h-[45px] w-full min-w-[300px] flex items-center justify-center'>
                <div className='absolute top-2/4 -translate-y-2/4 left-0 w-[45px] flex item-center justify-center'>
                    <FaSearch className='text-[#585858]'/>
                </div>
                <input type="search" name="search" placeholder='Search here...' className='text-[#000] p-10 pl-[40px] focus:outline-none focus:ring-1 focus:ring-primary  bg-[#f1f1f1] w-full rounded-[50px]' />
              </label>
            </form>
          <motion.div 
            whileHover={{
             scale: 1.1
            }}
             className='cursor-pointer hidden xl:block text-primary'>
            <FaBarsStaggered />
         </motion.div>
          </div>


          {/* <div>
            <div>
                <label>
                    <select name="nation" id="nation" className='hover:bg-primary text-[0.90rem] transition-all duration-300 hover:text-white w-[120px] cursor-pointer text-[#5c5c5c] px-10 py-5 rounded-md ring-2 ring-[#e4e4e4]'>
                        <option value="Eng(US)">Eng(US)</option>
                    </select>
                </label>
            </div>
          </div> */}

          {/* <div className='flex items-center justify-center gap-[10px]'>
            <div className='w-12 h-12 group cursor-pointer rounded-full overflow-hidden flex justify-center items-center'>
              <img src={userProfileImg} alt="profile image" className='group-hover:scale-110 transition-all duration-300 '/>
            </div>
            <div>
                <h1 className='text-[#0d0d0d] font-bold'>Sabrina Carpenter</h1>
                <h3 className='text-[14px]'>Admin</h3>
            </div>
          </div> */}
        </nav>
      </section>
    )
  }

  export default TopNav;