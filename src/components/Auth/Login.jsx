import { FaUser, FaEye, FaEyeSlash, FaEnvelope, } from 'react-icons/fa';
import { FaCircleExclamation } from 'react-icons/fa6'
import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import useLocalStorage from '../../hooks/useLocalStorage';
// import login_img from '../../assets/images/man-with-money.jpg'
import { InvestmentContext } from '../../context/InvestmentContext';

 const Login = () => {
    const {userData, setIsAuthorized} = useContext(InvestmentContext)

    const [showPasswd, setShowPasswd] = useState(false)
    const [changeType, setChangeType] = useState("password")
    const [passwd, setPasswd] = useState("")
    const {getItem} = useLocalStorage("data")
   
    
    const schema = yup.object().shape({
        email: yup.string().email('email must include an @').required("Invalid Email"),
        password: yup.string().min(3, "incorrect password").max(20, 'incorrect password').required("incorrect password")
    })

    const { register, handleSubmit, setError, formState: { errors, isSubmitting} } = useForm({
        resolver: yupResolver(schema)
    })
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
             console.log(data)
               const details = {
                 email: data.email,
                 password: data.password
                }
                const usersDetails = getItem()
                const emailValid = userData.find(x => x.email === details.email)
                const passwordValid = userData.find(x => x.password === details.password)
                console.log(userData);
                
                if(!emailValid || !passwordValid) throw new Error()
                    
                setIsAuthorized(true)    
                navigate("/dashboard")
            } catch (error) {
                setError("email", {
                    message: "Incorrect login info"
                })
        }
    }

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
  
//   #121316
    return (
        <section className="w-full flex items-center justify-center">
           {/* <Header_Two /> */}
           {/* <div className='relative w-full h-full max-w-[500px]'>
            <div className='absolute top-2/4 -translate-y-2/4 w-[200px] left-2/4 -translate-x-2/4'>
                <h1 className=''>Invest Now</h1>
            </div>
             <img src={login_img} className='w-full h-full object-cover' alt="man with money" />
           </div> */}
            <div className='w-full flex items-center justify-center'> 
            <div className="flex flex-col items-center gap-[20px] py-[20px] form-body w-full max-w-[450px] h-auto">
                <div className='self-start px-[20px]'>
                  <h1 className='text-4xl font-bold text-[#0c0c0c]'>Login</h1>
                  <p className='text-[#999] text-[0.9rem]'>Hi, Welcome back 👏</p>
                </div> 
                       {errors.email && <span className='text-red-500 text-[.9rem] px-[5px] bg-[#ffefef] ring-[1px] ring-[#fbc7c7] border-[1px] rounded-[5px] border-[#f3a9a9] flex items-center justify-center fill-none gap-5'><FaCircleExclamation />{errors.email?.message}</span>}
                       {errors.password && <span className='text-red-500 text-[.9rem] px-[5px] bg-[#ffefef] ring-[1px] ring-[#fbc7c7] border-[1px] rounded-[5px] border-[#f3a9a9]'>{errors.password?.message}</span>}
                <form method='post' onSubmit={handleSubmit(onSubmit)} className="inner w-full h-auto p-[10px] flex flex-col items-start justify-center gap-[20px]">
                    <div className="input-box relative input-box w-full h-auto px-[10px] flex flex-col items-start justify-center">
                       <label htmlFor="email" className="flex items-center justify-center gap-2 bg-[#fff] text-[#5b5b5b] pointer-events-none">
                        <span>Email</span>
                       </label>
                       <div className='relative w-full'>
                        <input
                         type="email" 
                         name="email" 
                         id="email" 
                         className="h-[40px] w-full peer rounded-[10px] focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline p-[10px] bg-white text-[.9rem]"
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
                    </div>
                    <div className="input-box relative input-box w-full h-auto px-[10px] flex flex-col items-start justify-center">
                        <label htmlFor="passwd" className="flex items-center justify-center gap-2 bg-[#fff] text-[#5b5b5b] pointer-events-none">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className='fill-none stroke-current' strokeWidth="1" width="22" height="22" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z">
                            </path></svg> */}
                        <span>Password</span>
                       </label>
                       <div className='relative w-full h-auto'>
                        <input
                         onChange={e => setPasswd(e.target.value)}
                         onBlur={() => passwd === "" ? setShowPasswd(false) : setShowPasswd(true)}
                         type={changeType}
                         name="passwd" 
                         id="passwd" 
                         className="w-full h-[40px] peer rounded-[10px] focus:outline-[#6f6f6f] border-none outline-1 outline-[#e2e2e2] outline p-[10px] bg-white text-[.9rem]"
                         placeholder='********'
                         {...register("password")}/>
                        {showPasswd 
                        ? <FaEye onClick={handleShowPasswd} className='absolute top-2/4 -translate-y-2/4 right-[30px] cursor-pointer text-[#858585]'/>
                        : <FaEyeSlash onClick={handleShowPasswd} className='absolute top-2/4 -translate-y-2/4 right-[30px] cursor-pointer text-[#858585]'/>
                        }
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-between px-[10px]'>
                        <div className='flex items-center gap-2 text-[#585858] text-[.9rem]'>
                            <input className='w-[15px] h-[15px] outline-none focus:outline-none cursor-pointer' type="checkbox" name="check" id="rememberMe" {...register("check")}/>
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <a href="#" className='hover:text-[#6366f1] text-[#3033e7] hover:underline text-[.9rem]'>Forgot password?</a>
                    </div>
                    <div className='w-full h-auto px-[10px] rounded-[10px]'>
                        <button disabled={isSubmitting} type="submit" className='relative disabled:bg-prim_d active:bg-primary text-lg text-white rounded-[10px] w-full h-[45px] bg-primary hover:bg-prim_f flex items-center justify-center'>
                        {!isSubmitting 
                        ? <span>Login</span> 
                        : <><span className='animate-spin w-[25px] h-[25px] block rounded-full border-b-white border-4 border-transparent border-t-white'/><span className='text-[.9rem] ml-2'>Logging in...</span></>
                         }  
                         </button>
                    </div>
                    <div className='px-[10px] flex items-center justify-center w-full text-[.9rem]'>
                        <p className='text-[#585858]'>Not registered yet? <a href="/Einstein-Investments/auth/signup" className='hover:text-[#6366f1] text-[#3033e7] hover:underline'>Create an Account</a></p>
                    </div>
                </form>
            {/* <div className='hover:ring-2 cursor-pointer hover:scale-105 transition-transform duration-300 bg-[#265ed74f] rounded-xl hover:text-[#265ed7] text-[#4570cc]'>
                <Link to="/" className='w-full p-[10px]  h-full flex items-end justify-center'>Back to Homepage</Link>
            </div> */}
         </div>
        </div>
        </section>
    )
 }

 export default Login;