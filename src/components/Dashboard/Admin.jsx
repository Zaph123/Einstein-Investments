 import SideNav from "./adminLayouts/SideNav"
 import TopNav from "./adminLayouts/TopNav";
 import { Outlet } from "react-router-dom";

 import '../../css/dashboard.css'
 
 const Admin = () => {
   return (
    <main className="w-full bg-[#fbfbfb] h-screen ">
      <div className="w-full h-screen flex items-center justify-center divide-x-2 divide-[#e4e4e4]">
       <SideNav />
       <div className="w-full h-screen overflow-hidden flex flex-col items-center justify-start">
        <TopNav />
        <Outlet />
       </div>
      </div>
    </main>
    )
  }
  
  
export default Admin;

