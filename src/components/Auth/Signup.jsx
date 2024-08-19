import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { FaUser, FaEye, FaEyeSlash, FaLock, FaEnvelope } from "react-icons/fa"
import useLocalStorage from '../../hooks/useLocalStorage'
import { Link } from "react-router-dom"
import Header_Two from "../../pages/Header_two"

 const  Signup = () => {
    const [passwd, setPasswd] = useState("")
    const [changeType, setChangeType] = useState("password")
    const [showPasswd, setShowPasswd] = useState(false)
    const [users, setUsers] = useState([])
    const {setItem} = useLocalStorage("data")

    // const todo = {
    //   one: {
    //     value: "One"
    //   },
    //   two: {
    //     value: "Two"
    //   }
    // }

    // const fetch = () => {
    //   fetch(todo)
    //   .then(res => console.log(res))
    // }
    
    // useEffect(fetch)
    const handleShowPasswd = () => {
        console.log(passwd);
     if(changeType === "password"){
        setChangeType("text")
        setShowPasswd(true)
      }else{
        setChangeType("password")
        setShowPasswd(false)
      }
    }

    const schema = yup.object().shape({
      fullName: yup.string().required("Please input your Full Name"),
      userName: yup.string().required("Please input your Username"),
      email: yup.string().email("Email must include an @").required("Invalid email"),
      password: yup.string().min(3, "password must be at least 8 characters long").required("Please input a valid password"),
      confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required("Please input a valid password")
    })

    const { 
       register,
       handleSubmit,
       formState: {errors, isSubmitting, isLoading} 
      }
        = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        //  console.log(data)
        const usersData = {
            id: users.length === 0 ? 1 : users.length + 1,
            name: data.fullName,
            username: data.userName,
            email: data.email,
            password: data.password
        }

         setUsers([...users, usersData])
         console.log(users)
     }
     
     useEffect(() => {
        setItem(users)

      }, [users])
      
      useEffect(() => {if(isLoading){
        setTimeout(() => {
          alert("Done.")
        }, 1000)
       
      }
    }, [isLoading])
     
  return (
    <section className="w-full flex flex-col items-center justify-center">
            
            <div className="flex flex-col items-center pt-[10px] bg-white  form-body w-full h-auto">
                <div className='self-start px-[20px] leading-[50px]'>
                  <h1 className='text-4xl font-bold text-ma'>SignUp</h1>
                  <p className='text-[#999] text-[0.9rem]'>Hi, Welcome User please fill in your details below 👇</p>
                </div> 
                <form action="/" method='post' onSubmit={handleSubmit(onSubmit)} className="inner w-full h-auto p-[10px] flex flex-col items-start justify-center gap-[20px]">
                    <div></div>
                    <div className="input-box relative w-full px-[10px] h-auto flex flex-col items-start justify-center">
                        <label htmlFor="fullName" className="flex items-center justify-center gap-2 bg-[#fff] text-[#5b5b5b] pointer-events-none">
                          <span>Full Name</span>
                        </label>
                       <div className='relative w-full h-auto'>
                       {/* <FaUser className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
                        <input
                         type="text" 
                         name="fullName" 
                         id="fullName" 
                         className="h-[50px] w-full peer rounded-[10px] focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[16px]"
                         placeholder="e.g John Doe"
                         {...register("fullName", {
                            required: "please input your Full Name",
                           })}/>
                         
                        </div>
                        {errors.fullName && <span className='text-red-500 text-[15px]'>{errors.fullName?.message}</span>}
                    </div>
                    <div className="input-box relative w-full px-[10px] h-auto flex flex-col items-start justify-center">
                       <label htmlFor="userName" className="flex items-center justify-center gap-2 bg-[#fff] text-[#5b5b5b] pointer-events-none">
                          <span>Username</span>
                        </label>
                       <div className='relative w-full h-auto'>
                          {/* <FaUser className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
                        <input
                         type="text" 
                         name="userName" 
                         id="userName" 
                         className="h-[50px] w-full peer rounded-[10px] focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[16px]"
                         placeholder="e.g Johnny"
                         {...register("userName", {
                            required: "please input your Username",
                           })}/>
                        
                        </div>
                        {errors.userName && <span className='text-red-500 text-[15px]'>{errors.userName?.message}</span>}
                    </div>
                    <div className="input-box relative w-full px-[10px] h-auto flex flex-col items-start justify-center">
                       <label htmlFor="email" className="flex items-center justify-center gap-2 bg-[#fff] text-[#5b5b5b] pointer-events-none">
                        <span>Email</span>
                       </label>
                       <div className='relative w-full h-auto'>
                        {/* <FaEnvelope className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="50"/> */}
                        <input
                         type="email" 
                         name="email" 
                         id="email" 
                         className="h-[50px]  w-full peer rounded-[10px] focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[16px]"
                         placeholder="e.g johndoe@gmail.com"
                         {...register("email", {
                            required: "Invalid email",
                            validate: value => {
                                if(!value.includes("@")){
                                    return "Must iclude an '@' symbol"
                                }
                                return true
                         }})}/>
                        </div>
                        {errors.email && <span className='text-red-500 text-[15px]'>{errors.email?.message}</span>}
                    </div>
                    <div className="input-box relative input-box w-full h-auto px-[10px] flex flex-col items-start justify-center">
                       <label htmlFor="passwd" className="flex items-center justify-center gap-2 bg-[#fff] text-[#5b5b5b] pointer-events-none">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className='fill-none stroke-current' strokeWidth="1" width="22" height="22" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z">
                            </path></svg> */}
                        <span>Password</span>
                       </label>
                       <div className='relative w-full h-auto'>
                          {/* <svg xmlns="http://www.w3.org/2000/svg" className='fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4' strokeWidth="1" width="22" height="22" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z">
                            </path></svg> */}
                        <input
                         onChange={e => setPasswd(e.target.value)}
                         onBlur={() => passwd === "" ? setShowPasswd(false) : setShowPasswd(true)}
                         type={changeType}
                         name="passwd" 
                         id="passwd" 
                         className="w-full h-[50px] peer rounded-[10px] focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[16px]"
                         placeholder="********"
                         {...register("password")}/>
                        {showPasswd 
                        ? <FaEye onClick={handleShowPasswd} className='absolute top-2/4 -translate-y-2/4 right-[30px] cursor-pointer text-[#858585]'/>
                        : <FaEyeSlash onClick={handleShowPasswd} className='absolute top-2/4 -translate-y-2/4 right-[30px] cursor-pointer text-[#858585]'/>
                        }
                        </div>
                        {errors.password && <span className='text-red-500 text-[15px]'>{errors.password?.message}</span>}
                    </div>
                    <div className="input-box relative input-box w-full h-auto px-[10px] flex flex-col items-start justify-center">
                        <label htmlFor="confirmPasswd" className="flex items-center justify-center gap-2 bg-[#fff] text-[#5b5b5b] pointer-events-none px-[5px] ">
                        {/* <FaLock className='fill-none stroke-current' strokeWidth="50"/> */}
                        <span>Confirm Password</span>
                        </label>
                       <div className='relative w-full h-auto'>
                       {/* {/* <svg xmlns="http://www.w3.org/2000/svg" className="fill-none stroke-[#858585] absolute top-2/4 left-10 -translate-y-2/4" strokeWidth="1" width="24" height="24" viewBox="0 0 24 24">
                       <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"/></svg> */}
                        <input
                         onChange={e => setPasswd(e.target.value)}
                         onBlur={() => passwd === "" ? setShowPasswd(false) : setShowPasswd(true)}
                         type={changeType}
                         name="confirmPasswd" 
                         id="confirmPasswd" 
                         className="w-full h-[50px] peer rounded-[10px] focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline px-[10px] bg-white text-[16px]"
                         placeholder="********"
                         {...register("confirmPassword")}/>
                        
                        {showPasswd 
                        ? <FaEye onClick={handleShowPasswd} className='absolute top-2/4 -translate-y-2/4 right-[30px] cursor-pointer text-[#858585]'/>
                        : <FaEyeSlash onClick={handleShowPasswd} className='absolute top-2/4 -translate-y-2/4 right-[30px] cursor-pointer text-[#858585]'/>
                        }
                        </div>
                        {errors.confirmPassword && <span className='text-red-500 text-[15px]'>{errors.confirmPassword?.message}</span>}
                    </div>
                    <div className='w-full h-[50px] px-[10px] rounded-[10px]'>
                        <button disabled={isSubmitting} type="submit" className='relative disabled:bg-prim_d active:bg-primary text-lg text-white rounded-[10px] w-full h-[50px] bg-primary hover:bg-prim_f flex items-center justify-center'>
                        {!isSubmitting 
                        ? <span>Signup</span> 
                        : <span className='animate-spin w-[25px] h-[25px] block rounded-full border-b-white border-4 border-transparent border-t-white'/>}  
                         </button>
                    </div>
                    <div className='px-[10px] flex items-center justify-center w-full'>
                        <p className='text-[#585858]'>Already have an Account? <Link to="/login" className='text-[#6366f1] hover:text-[#3033e7]'>Login here</Link></p>
                    </div>
                </form>
            </div>
            {/* <div className='hover:ring-2 cursor-pointer hover:scale-105 transition-transform duration-300 bg-[#265ed74f] rounded-xl hover:text-[#265ed7] text-[#4570cc]'>
                <Link to="/" className='w-full p-[10px]  h-full flex items-end justify-center'>Back to Homepage</Link>
            </div> */}
        </section>
  )
}

export default Signup
