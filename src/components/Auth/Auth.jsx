import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Header_Two from "../../pages/Header_two"



const Auth = () => {
    const [toggleTab, setToggleTab] = useState([{id: 1}])

    const tab = [
        {
            id: 1,
            name: "Login",
            to: "/auth/login"
        },
        {
            id: 2,
            name: "SignUp",
            to: "/auth/signup"
        },
    ]

    const changeTab = (id) => {
       const setTab = tab.filter(c => c.id === id)

       setToggleTab(setTab)
       console.log(toggleTab);
    }
  return (
    <div className="relative w-full bg-[#fbfbfb] min-h-screen flex flex-col items-center justify-center py-[30px] px-10">
        {/* <Header_Two /> */}
      <div className="w-full h-full max-w-[450px] shadow-xl rounded-[10px] flex flex-col items-start justify-center">
        <nav className="flex items-start z-50 h-[40px] w-full">
            {tab.map(c => {
                return( 
               <div onClick={() => changeTab(c.id)} className={`relative group hover:bg-[#e2e2e2] h-full w-auto ${c.id === toggleTab[0].id ? " bg-white" : "bg-[#f1f1f1]"}`}>
                <Link to={c.to} className="py-5 px-[20px] h-full w-full flex items-center justify-center text-[#797979] hover:text-primary">{c.name}</Link>
                {c.id === toggleTab[0].id && <span className="absolute w-full group-hover:bg-[#e2e2e2] h-[2px] bg-white -bottom-[2px]" />}
               </div>
            )
            })}
            
        </nav>
        <main className="w-full bg-white p-10 h-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Auth
