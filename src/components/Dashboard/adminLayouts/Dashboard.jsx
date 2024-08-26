import { FaArrowLeft } from "react-icons/fa"

const Dashboard = () => {
  //#d7d7d7
  //#858282
  return (
    <section className="w-full h-full py-[20px] px-10 overflow-auto">
          <h1 className="text-[1.8rem] text-[rgb(37,37,37)] font-bold">Dashboard</h1>
        <div className="w-full h-auto p-[20px] flex bg-[#ecebeb] rounded-[10px] flex-col items-start overflow-x-auto">
           <div className="w-full h-auto flex items-center lg:flex-wrap justify-around gap-3">
            <div className="w-full max-w-[500px] bg-primary p-[30px] h-[200px] rounded-xl shadow-md">
              <h1 className="text-[1.01rem] text-white font-bold">Total Investments</h1>
              <h2 className="text-[0.95rem] text-[#bdbdbd]">August 2024</h2>
              <div className="p-[10px]">
                <h3 className="font-normal text-[2.5rem] text-white">$1,500,000.00</h3>
                <span className="text-[#bcbcbc] w-auto text-[0.8rem] flex items-center justify-start gap-10 "><FaArrowLeft className="-rotate-45 text-red-500"/>Last updated 2min ago</span>
              </div>
            </div>
            <div className="w-full max-w-[500px] p-[30px] h-[200px] bg-white rounded-xl shadow-md">
              <h1 className="text-[1.01rem] text-[#292929] font-bold">Total Withdrawal</h1>
              <h2 className="text-[0.95rem] text-[#797979]">August 2024</h2>
              <div className="p-[10px] flex flex-col items-start justify-evenly">
                <h3 className="font-normal text-[2.5rem] text-[#292929]">$500,000.00</h3>
                <span className="text-[#797979] w-auto text-[0.8rem] flex items-center justify-start gap-10 "><FaArrowLeft className="-rotate-45 text-blue-500"/>Last updated 2min ago</span>
                <a href="#" className="text-[0.8rem] self-end mt-3 underline">View Stats</a>
              </div>
            </div>
            <div className="w-full max-w-[500px] p-[30px] h-[200px] bg-white rounded-xl shadow-md">
              <h1 className="text-[1.01rem] text-[#292929] font-bold">Total Deposits</h1>
              <h2 className="text-[0.95rem] text-[#797979]">August 2024</h2>
              <div className="p-[10px]">
                <h3 className="font-normal text-[2.5rem] text-[#292929]">$200,000.00</h3>
                <span className="text-[#797979] w-auto text-[0.8rem] flex items-center justify-start gap-10 "><FaArrowLeft className="-rotate-45 text-green-500"/>Last updated 2min ago</span>
              </div>
            </div>
           </div>
        </div>

        <Recents />
    </section>
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
