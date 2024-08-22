 import { useEffect, useState } from "react"
 import { motion, AnimatePresence } from "framer-motion"
 import { Navigate, useNavigate } from "react-router-dom"
 import InvestmentLogs from "./all-logs/InvestmentLogs"
 import { FaCheckCircle } from "react-icons/fa"
//#3F75FB

const LOGGED_IN = true

const Btn =[ 
{
 id: 1,
 name: 'Monthly',
 active: true
},
{
 id: 2,
 name: 'Yearly',
 active: false
}
]


const Investments = () => {
  const OVERFLOW = "scroll"
  return (
    <AnimatePresence>
    <div className={`w-full h-full overflow-scroll py-[30px] p-10 flex flex-col items-center bg-[#fbfbfb] justify-start gap-[30px]`}>
      <ClientPlans OVERFLOW={OVERFLOW} LOGGED_IN={LOGGED_IN}/>
      <InvestmentLogs />
    </div>
    </AnimatePresence>
  )
}

export const ClientPlans = ({LOGGED_IN}) => {
  const [planState, setPlanState] = useState(true)
  const [btnState, setBtnState] = useState(Btn[0].id)
  const [planDetails, setPlanDetails] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const navigate = useNavigate()

  useEffect(() => {
    console.log(planDetails);
  })
  return (
    // <div className="w-full h-full p-[30px] overflow-auto bg-[#f1f1f1]">
    <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-bold text-center">Choose your right Plan!</h1>
      <p className="text-[0.95rem] font-normal text-[#797979] text-center">Select from best plans, ensuring a perfect match</p>  
    </div>
    <div className="flex items-center justify-center gap-1 p-10">
      {/* <p className="text-[0.9rem] text-[#797979]">Comes in</p> */}
      <div className="flex items-center justify-center p-1 rounded-3xl bg-white gap-10 h-[50px]">
        {Btn.map(btn => {
          return (
            <div onClick={() => {setPlanState(btn.active), setBtnState(btn.id)}} 
            className={`relative w-[150px] flex items-center justify-center p-1 rounded-3xl h-full ${btn.id === btnState ? "text-white" : "text-[#999] hover:text-[#292929] hover:bg-[#f1f1f1]"}  cursor-pointer`}>
              {btn.id === btnState && 
              <motion.span 
              transition={{
                type: "spring"
              }}
              layoutId="activeId"
              className="w-full rounded-full h-full absolute top-0 left-0 bg-[#0c0c0c] hover:bg-primary active:bg-[#0c0c0c]"/>}
              <h3 className="relative transition-colors duration-500">{btn.name}</h3>
              </div>
          )
        })}
        {/* <div onClick={() => setPlanState(true)} className="w-[150px] flex items-center justify-center p-1 rounded-3xl h-full bg-[#292929] text-white cursor-pointer"><h3>Monthly</h3></div>
        <div onClick={() => setPlanState(false)} className="w-[150px] flex items-center justify-center p-1 rounded-3xl h-full cursor-pointer text-[#999] hover:text-[#292929] hover:bg-[#f1f1f1]"><h3>Annually</h3></div> */}
      </div>
      {/* <p className="text-[0.9rem] text-[#797979]">Packages</p> */}
    </div>
    
    {planState
     ? <MonthlyPlans setIsLoading={setIsLoading} isLoading={isLoading} setPlanDetails={setPlanDetails} navigate={navigate} LOGGED_IN={LOGGED_IN}/>
     : <AnnuallyPlans setIsLoading={setIsLoading} isLoading={isLoading} setPlanDetails={setPlanDetails} navigate={navigate} LOGGED_IN={LOGGED_IN}/>
    }
  </>
    // </div>
  )
}
 const Container = {
  hidden: {
    y: 50,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: .35,
      delayChildren: .3,
      ease: 'backInOut',
      type: "spring",
      duration: 1
    },
  },
  exit: {
    y: -50,
    opacity: 0
  },
 }

 const item = {
   hidden: {
     y: 50,
     opacity: 0
    },
   show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        type: "spring",
        duration: 1.5
      }
    },
   exit: {
    y: -50,
    opacity: 0
  }
 }
 const MonthlyPlans = ({setPlanDetails, navigate, LOGGED_IN, setIsLoading, isLoading}) => {
  const [id, setId] = useState('')

  const plans = [
    {
      id: 1,
      planType: "Startup",
      period: "monthly",
      amount: "$16",
      benefits: [
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
      ]
    },
    {
      id: 2,
      planType: "Basic",
      amount: "$38",
      period: "monthly",
      benefits: [
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
      ]
    },
    {
      id: 3,
      planType: "Professional",
      amount: "$158",
      period: "monthly",
      benefits: [
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
      ]
    },
  ]

  const handlePlanDetails= async (type, amount, period) => {
    setId(amount)
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    const details = {
      typeOfPlan: type,
      amount: amount,
      period: period
    }

    setPlanDetails([details])
    !LOGGED_IN ? navigate("/auth/login") : navigate("/dashboard/deposit")
  }

  return (
    <motion.div
    variants={Container}
    initial={"hidden"}
    animate={'show'}
    // transition={{
    //   ease: 'backInOut',
    //   type: "spring"
    // }}
    exit={'exit'}
    key='monthly'
    className="w-full flex rounded-xl lg:flex-wrap items-center justify-evenly gap-[20px] bg-white p-[10px]">
    {plans.map(plan => {
      return (
        <motion.div key={plan.id} variants={item} className={`w-full ${plan.id === 2 ? "bg-[#292929] border-[#0d0d0d]" : "bg-[#f1f1f1] border-[#ddd]"} rounded-xl max-w-[400px] h-auto p-10 border-2`}>
        <div className="w-full h-full flex flex-col items-start justify-start py-10 px-[25px] gap-[20px]">
          <h2 className={`w-full flex items-center justify-between font-bold text-[1.5] ${plan.id === 2 ? "text-white" : "text-[#292929]"}`}>{plan.planType} {plan.id === 2 && <span className="font-normal py-1 px-3 rounded-full bg-[#5569c7]">🔥 Popular</span>}</h2>
          <h1 className="flex items-end justify-center border-b-2 border-[#ddd]">
            <p className={`text-[2.5rem] ${plan.id === 2 ? "text-white" : "text-[#292929]"}`}>{plan.amount}</p>
            <span className={`text-[0.85rem] ${plan.id === 2 ? "text-[#e2e2e2]" : "text-[#797979]"}`}>/mon</span></h1>
          <ul className="py-[20px] leading-8 text-[0.9rem] w-full ">
            {plan.benefits.map(benefit => {
              return (
                <li className={`flex items-center justify-start gap-2 ${plan.id === 2 && "text-white"}`}>
                  <FaCheckCircle />
                  <p className={`text-[#797979] ${plan.id === 2 ? "text-[#fbfbfb]" : "text-[#797979]"}`}>{benefit}</p>
                </li>
              )
            })}
          </ul>
          <div onClick={() => handlePlanDetails(plan.planType, plan.amount, plan.period)} className={`w-full h-auto border-2 rounded-xl ${plan.id === 2 ? "border-[#fff] hover:text-[#000] hover:bg-white" : "border-[#292929]  hover:bg-[#292929]"} transition-all duration-300`}>
            <a href="#" className={`px-[30px] flex items-center justify-center w-full py-10 ${plan.id === 2 ? "text-white hover:text-[#000]" : "text-[#292929] hover:text-[#fff]"}`}>
            {plan.amount === id ? (!isLoading 
              ? <span>Get Started</span> 
              : <span className='animate-spin w-[25px] h-[25px] block rounded-full border-y-main_blue border-4 border-transparent'/>)
              : <span>Get Started</span>
            }
            </a>
          </div>
        </div>
      </motion.div>
      )
    })}
  </motion.div>
  )
 }
 const AnnuallyPlans = ({setPlanDetails, navigate, LOGGED_IN, setIsLoading, isLoading}) => {
  const [id, setId] = useState('')

  const plans = [
    {
      id: 1,
      planType: "Startup",
      amount: "$210",
      period: "yearly",
      benefits: [
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
      ]
    },
    {
      id: 2,
      planType: "Basic",
      amount: "$350",
      period: "yearly",
      benefits: [
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
      ]
    },
    {
      id: 3,
      planType: "Professional",
      amount: "$600",
      period: "yearly",
      benefits: [
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
        "Lorem Ipsum Dolor Ipsum Lorem",
      ]
    },
  ]
  const handlePlanDetails= async (type, amount, period) => {
    setId(amount)
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    const details = {
      typeOfPlan: type,
      amount: amount,
      period: period
    }

    setPlanDetails([details])
    !LOGGED_IN ? navigate("/auth/login") : navigate("/dashboard/deposit")
  }

  return (
    <motion.div
    variants={Container}
    initial={"hidden"}
    animate={'show'}
    exit={'exit'} 
    key='annually'
    className="w-full flex rounded-xl lg:flex-wrap items-center justify-evenly gap-[20px] bg-white p-[20px]">
    {plans.map(plan => {
      return (
        <motion.div key={plan.id} variants={item} className={`w-full ${plan.id === 2 ? "bg-[#292929] border-[#000]" : "bg-[#f1f1f1] border-[#ddd]"} rounded-xl max-w-[350px] h-auto p-10 border-2`}>
        <div className="w-full h-full flex flex-col items-start justify-start py-10 px-[25px] gap-[20px]">
        <h2 className={`w-full flex items-center justify-between font-bold text-[1.5] ${plan.id === 2 ? "text-white" : "text-[#292929]"}`}>{plan.planType} {plan.id === 2 && <span className="font-normal py-1 px-3 rounded-full bg-[#5569c7]">🔥 Popular</span>}</h2>
          <h1 className="flex items-end justify-center border-b-2 border-[#ddd]">
            <p className={`text-[2.5rem] ${plan.id === 2 ? "text-white" : "text-[#292929]"}`}>{plan.amount}</p>
            <span className={`text-[0.85rem] ${plan.id === 2 ? "text-[#e2e2e2]" : "text-[#797979]"}`}>/yr</span></h1>
          <ul className="py-[20px] leading-8 text-[0.9rem] w-full ">
            {plan.benefits.map(benefit => {
              return (
                <li className={`flex items-center justify-start gap-2 ${plan.id === 2 && "text-white"}`}>
                  <FaCheckCircle />
                  <p className={`text-[#797979] ${plan.id === 2 ? "text-[#fbfbfb]" : "text-[#797979]"}`}>{benefit}</p>
                </li>
              )
            })}
          </ul>
          <div onClick={() => handlePlanDetails(plan.planType, plan.amount, plan.period)} className={`w-full h-auto border-2 rounded-xl ${plan.id === 2 ? "border-[#fff] hover:text-[#000] hover:bg-white hover:border-none" : "border-[#292929]  hover:bg-[#292929] hover:border-none"}`}>
            <a href="#" className={`px-[30px] flex items-center justify-center w-full py-10 ${plan.id === 2 ? "text-white hover:text-[#000]" : "text-[#292929] hover:text-[#fff]"}`}>
            {plan.amount === id ? (!isLoading 
              ? <span>Get Started</span> 
              : <span className='animate-spin w-[25px] h-[25px] block rounded-full border-y-main_blue border-4 border-transparent'/>)
              : <span>Get Started</span>
            }
            </a>
          </div>
        </div>
      </motion.div>
      )
    })}
  </motion.div>
  )
 }

export default Investments
