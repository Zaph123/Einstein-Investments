import { FaArrowLeft } from "react-icons/fa"

const Dashboard = () => {
  //#d7d7d7
  //#858282
  return (
    <section className="w-full h-full py-[20px] bg-[#fbfbfb] px-10 overflow-auto">
          <h1 className="text-[1.8rem] text-[rgb(37,37,37)] font-bold">Dashboard</h1>
        <div className="w-full h-auto p-[10px] flex rounded-[10px] flex-col items-start overflow-x-auto">
           <div className="w-full h-auto flex items-center lg:flex-wrap justify-around gap-3">
              <Boards bg={"#292929"}>
                <h1 className="text-[1.01rem] text-white font-bold">Total Investments</h1>
                <h2 className="text-[0.95rem] text-[#bdbdbd]">August 2024</h2>
                <div className="p-[10px]">
                  <h3 className="font-normal text-[2.5rem] text-white">$1,500,000.00</h3>
                  <span className="text-[#bcbcbc] w-auto text-[0.8rem] flex items-center justify-start gap-10 "><FaArrowLeft className="-rotate-45 text-red-500"/>Last updated 2min ago</span>
                </div>
              </Boards>
              <Boards bg={"#fff"}>
                <h1 className="text-[1.01rem] text-primary font-bold">Total Withdrawal</h1>
                <h2 className="text-[0.95rem] text-[#797979]">August 2024</h2>
                <div className="p-[10px]">
                  <h3 className="font-normal text-[2.5rem] text-primary">$500,000.00</h3>
                  <span className="text-[#797979] w-auto text-[0.8rem] flex items-center justify-start gap-10 "><FaArrowLeft className="-rotate-45 text-red-500"/>Last updated 2min ago</span>
                </div>
              </Boards>
              <Boards bg={"#fff"}>
                <h1 className="text-[1.01rem] text-primary font-bold">Total Deposits</h1>
                <h2 className="text-[0.95rem] text-[#797979]">August 2024</h2>
                <div className="p-[10px]">
                  <h3 className="font-normal text-[2.5rem] text-primary">$200,000.00</h3>
                  <span className="text-[#797979] w-auto text-[0.8rem] flex items-center justify-start gap-10 "><FaArrowLeft className="-rotate-45 text-red-500"/>Last updated 2min ago</span>
                </div>
              </Boards>
           </div>
        </div>

        <Recents />
    </section>
  )
}

  const Boards = ({children, bg}) => {
    return (
      <div className={`w-full max-w-[500px] bg-[${bg}] p-[30px] h-[200px] rounded-xl shadow-md`}>
       {children}
      </div>
    )
  }
 const Recents = () => {
  return (
    <div>
      <h1 className="text-[2rem] font-bold">Overview</h1>
       <h2>Recent transactions</h2>
       <div></div>
    </div>
  )
 }

 const RecentTrans = () => {
   return (
    <div>
      <h1>hello</h1>
    </div>
   )
 }
export default Dashboard
