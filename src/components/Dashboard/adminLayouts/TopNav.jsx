import userProfileImg from '../../../assets/images/profile-1.png'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'
// import { FaBarsStaggered } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import HamburgerMenu from '../../Layout/HamburgerMenu';
import SideNav from './SideNav';
import { FaAngleRight, FaCog, FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

    return (
      <section className="w-full h-auto bg-white relative">
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
             <HamburgerMenu handleOpenNav={handleOpenNav} openNav={openNav}/>
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
        <SideHeaderNav openNav={openNav} setOpenNav={setOpenNav}/>
      </section>
    )
  }
  
  const Nav = {
    open: {
      x: 0,
      opacity: 1,
      visibility: "visible",
      transition: {
        duration: 0.25,
        type: "spring",
        ease: "easeInout",
      },
    },
    close: {
      x: -100,
      opacity: 0,
      visibility: "hidden",
      transition: {
        duration: 0.25,
        type: "spring",
        ease: "easeInout",
      },
    },
  };
  
  const SideHeaderNav = ({ openNav, setOpenNav }) => {
    const [showSubMenu, setShowSubMenu] = useState(false)
    const [tab, setTab] = useState([{id: 1, id2: 1}])

    const side_links = [
      [{
        id: 1,
        id2: 1,
        href: '/dashboard',
        subLinks: [],
        name: "Dashboard",
        arr: 0,
        icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                     <polyline points="9 22 9 12 15 12 15 22"></polyline></>,
      },
      {
        id: 2,
        id2: 2,
        href: '/dashboard/investments',
        name: "Investment",
        arr: 0,
        subLinks: [],
        subLinkId: 1,
        icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>,
      },
      {
        id: 3,
        id2: 3,
        href: "/dashboard/deposit",
        name: "Deposit",
        arr: 0,
        subLinks: [],
        subLinkId: 2,
        icon: <><rect
        x="2"
        y="7"
        width="20"
        height="14"
        rx="2"
        ry="2"
      ></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></>,
      },
      {
        id: 4,
        id2: 4,
        href: "/dashboard/withdraw",
        name: "Withdraw",
        arr: 0,
        subLinks: [],
        icon: <>  <rect
        x="1"
        y="4"
        width="22"
        height="16"
        rx="2"
        ry="2"
      ></rect>
      <line x1="1" y1="10" x2="23" y2="10"></line></>,
      },
      {
        id: 5,
        id2: 5,
        href: "/dashboard/transfer",
        name: "Transfer Money",
        arr: 0,
        subLinks: [],
        icon: <> <polyline points="17 1 21 5 17 9"></polyline>
        <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
        <polyline points="7 23 3 19 7 15"></polyline>
        <path d="M21 13v2a4 4 0 0 1-4 4H3"></path></>,
      },
      {
       id: 6,
       href: "#",
       name: "Others",
       id2: 6,
       visible: false,
       arr: 0,
       subLinks: [
         {
           id: 1,
           href: "",
           name: "Money transfers",
         },
         {
           id: 2,
           href: "",
           name: "Interests",
         },
         {
           id: 3,
           href: "",
           name: " All transactions",
         },
         {
           id: 4,
           href: "",
           name: "Referrals",
         },
       ],
       subLinkId: 4,
       icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
       <polyline points="14 2 14 8 20 8"></polyline>
       <line x1="16" y1="13" x2="8" y2="13"></line>
       <line x1="16" y1="17" x2="8" y2="17"></line>
       <polyline points="10 9 9 9 8 9"></polyline></>,
       dropdown: <FaAngleRight />,
      },
     ],
     [ {
        id: 1,
        id2: 7,
        href: "#",
        name: "2fa",
        arr: 1,
        visible: false,
        subLinks: [],
        icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      },
      {
        id: 2,
        id2: 8,
        href: "#",
        name: "Support",
        arr: 1,
        visible: false,
        subLinks: [],
        icon: <> <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
        <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></>,
      },
      {
        id: 3,
        id2: 9,
        href: "#",
        name: "Settings",
        arr: 1,
        subLinks: [],
        icon: <FaCog strokeWidth="30px" fill="none" className="text-[20px]"/>
      },
      {
        id: 4,
        id2: 10,
        href: "/Einstein-Investments/",
        name: "Logout",
        arr: 1,
        subLinks: [],
        icon: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line></>
      },
     ],
    ]

   
    const [navLinks, setNavLinks] = useState(side_links)

    const menuLogic = (id, arrIndex) => {
      const targetArr = arrIndex
      const target = id - 1
      
      const updatedSideNavLinks = [
        ...navLinks.slice(0, targetArr),
        [
          ...navLinks[targetArr].slice(0, target),
          {
            ...navLinks[targetArr][target], visible: !navLinks[targetArr][target].visible
          },
          ...navLinks[targetArr].slice(target + 1)
        ],
        ...navLinks.slice(targetArr + 1)
      ] 
     
      if(target === 5){
        setNavLinks(updatedSideNavLinks)
      }else{
        setOpenNav(false)
      }

      const navROW1 = navLinks[targetArr].filter(link => link.id === id)
      // const navROW2 = navLinks[1].filter(link => link.id === id)
      setTab(navROW1)
      console.log(tab);
    }

    const handleSubMenu = (id, arrIndex) => {
      menuLogic(id, arrIndex)
    }

    const handleActive = (id) => {
      const activeSubLink = navLinks[0].map(c => c.id === id)
      console.log(activeSubLink);
      setShowSubMenu(!showSubMenu)
    }

    // useEffect(() => {
    //   const obj = {
    //     name: "Einstein",
    //     age: 16
    //   }
    //   const obj2 = {
    //     name: "Einstein",
    //     age: 16
    //   }
    //   console.log(Object.defineProperties(obj, obj2))
    // },[])

    const showHide = {
      show: {
        height: "auto"
      },
      hide: {
        height: 0,
        overflow: "hidden",
      }
    }
    
    return (
      <motion.div
        variants={Nav}
        initial="close"
        animate={openNav ? "open" : "close"}
        className="lg:flex flex-col items-center bottom-0 justify-start top-[60px] py-30 gap-[50px] px-10 hidden absolute w-full left-0 h-screen z-10 bg-white"
      >
         <section id="SideNav" className="w-full h-full bg-[#fff] overflow-y-auto">
         <nav className="w-full h-full p-[10px] flex flex-col items-start justify-start gap-[10px]">
           {/* <div className="w-full p-[10px]">
             <h1 className="text-[35px] font-bold text-main_blue">e-invest</h1>
           </div> */}
           <div className='cursor-pointer transition-colors duration-300 px-1 border-[#e2e2e2] border-2 rounded-xl hover:border-[#999] relative flex py-[15px] w-full items-center justify-start gap-[10px]'>
            <div className='w-[40px] h-[40px] group cursor-pointer rounded-full overflow-hidden flex justify-center items-center'>
              <img src={userProfileImg} alt="profile image" className='group-hover:scale-110 transition-all duration-300 '/>
            </div>
            <div>
                <h1 className='text-[#0d0d0d] font-bold text-[0.9rem]'>Sabrina Carpenter</h1>
                <h3 className='text-[0.8rem]'>Bank Accountant</h3>
            </div>
            <div className="absolute right-1 w-[25px] h-[25px] transition-colors duration-300 flex items-center justify-center rounded-full border-2 border-[#e2e2e2] text-[#797979] hover:border-[#797979] "><FaAngleDown className="w-full"/></div>
          </div>

           <div className="flex flex-col items-start gap-50 justify-between h-full min-h-[600px] w-full">
           <ul className="w-full flex flex-col items-start justify-evenly gap-[5px]">
           {navLinks[0].map(link => {
             return (
                <li key={link.id} className="w-full relative">
                 <Link to={link.href} onClick={() => handleSubMenu(link.id, link.arr)} className={`relative text-[14px] cursor-pointer hover:bg-[#ebebeb] ${link.id2 === tab[0].id2 ? "bg-[#3f3f3f] text-[#fff] hover:bg-primary" : ''} hover:text-[#1b1b1b] active:bg-[#f0f0f0] rounded-[10px] w-full text-[#797979] h-auto p-[10px] flex items-center justify-start gap-[10px]`}>
                  {link.id2 === tab[0].id2 && 
                  <motion.span
                  style={{transformOrigin: 'bottom'}}
                   className="absolute h-[15px] w-[3px] bg-main_blue left-1 rounded-full top-2/4 -translate-y-2/4"
                   initial={{
                    scaleY: .5
                   }}
                   animate={{
                    scaleY: 1,
                    y: "-50%"
                   }}
                   transition={{
                    duration: .3,
                    type: "spring",
                    ease: 'easeInOut'
                   }}
                   />}
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     className="feather feather-home"
                   >
                     {link.icon}
                   </svg>
                   <p>{link.name}</p>
                   <div className="absolute right-3">
                    <div className={`${link.visible ? "rotate-90" : "rotate-0"} transition-all duration-[.3]`}>{link.dropdown}</div>
                   </div>
                 </Link>
                 
                 
                 <AnimatePresence>
                 {link.visible && 
                 <motion.ul
                 variants={showHide}
                 initial={"hide"} 
                 animate={"show"}
                 transition={{
                   duration: .3,
                   ease: "easeInOut"
                  }}
                  exit={"hide"}
                  className="submenu w-full flex h-auto items-center justify-center px-5">
                 <div className="relative w-full py-10">
                 <span className="absolute top-0 left-[30px] w-[2px] h-full bg-[#ddd] scale-y-[.7]"/>
                 {link.subLinks.map(sub => {
                   return (
                     <li key={sub.id} className="group relative w-full">
                      <span className="absolute group-hover:bg-main_blue top-2/4 -translate-y-2/4 left-[30px] w-[2px] h-[20px] scale-y-[.7]"/>
                     <Link to={sub.href} onClick={() => handleActive(sub.id)} className="relative text-[#797979]  hover:text-primary my-5 w-full text-[0.875rem] flex items-center justify-start p-[5px] pl-[50px] rounded-[10px]">
                       <p>{sub.name}</p>
                     </Link>
                   </li>
                   )
                 })}
                 </div>
                 </motion.ul>
                 }
                 </AnimatePresence>
               </li>
             )
           })}
           </ul>
           <ul className="w-full flex flex-col items-start  justify-evenly gap-[5px]">
            <h1 className=" pl-[20px] text-[#ababab]">Account</h1>
           {navLinks[1].map(link => {
             return (
                <li key={link.id} className="w-full">
                 <a href={link.href} onClick={() => handleSubMenu(link.id, link.arr)} className={`relative text-[14px] cursor-pointer hover:bg-[#ececec] ${link.id2 === tab[0].id2 ? "bg-[#3f3f3f] text-[#fff] hover:bg-primary" : ''} hover:text-[#1b1b1b] active:bg-[#f0f0f0] rounded-[10px] w-full text-[#797979] h-auto p-[10px] flex items-center justify-start gap-[10px]`}>
                 {link.id2 === tab[0].id2 && 
                  <motion.span
                  style={{transformOrigin: 'bottom'}}
                   className="absolute h-[15px] w-[3px] bg-main_blue left-1 rounded-full top-2/4 -translate-y-2/4"
                   initial={{
                    scaleY: .5
                   }}
                   animate={{
                    scaleY: 1,
                    y: "-50%"
                   }}
                   transition={{
                    duration: .3,
                    type: "spring",
                    ease: 'easeInOut'
                   }}
                   />}
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     className="feather feather-home"
                   >
                    {link.icon}
                   </svg>
                   {link.name}
                 </a>
               </li>
             )
           })}
           </ul>
         </div>
         </nav>
       </section>
      </motion.div>
    );
  };
  export default TopNav;