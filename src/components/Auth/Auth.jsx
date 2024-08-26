
import { Outlet } from "react-router-dom"
import img1 from '../../assets/images/doodle-2.jpg'

const Auth = () => {

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

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-[30px] px-10">
        {/* <Header_Two /> */}
      <div className="w-full relative h-full max-w-[450px] rounded-[10px] flex flex-col items-start justify-center">
        {/* <nav className="flex items-start z-50 h-[40px] w-full">
            {tab.map(c => {
              return( 
                <div onClick={() => changeTab(c.id)} className={`relative group hover:bg-[#fbfbfb] h-full w-auto ${c.id === toggleTab[0].id ? "bg-white" : "bg-[#f5f5f5]"}`}>
                <Link to={c.to} className="py-5 px-[20px] h-full w-full flex items-center justify-center text-[#797979] hover:text-[#5569c7]">{c.name}</Link>
                {c.id === toggleTab[0].id && <span className="absolute w-full bg-[#f5f5f5] h-[2px] -bottom-[2px]" />}
                </div>
                )
                })}
                
                </nav> */}
            <img src={img1} alt="" className="absolute top-0 w-[50px]" />
        <main className="w-full bg-white h-full relative">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Auth
