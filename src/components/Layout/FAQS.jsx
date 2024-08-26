import React, { useState } from 'react'
import { motion } from 'framer-motion'
import img1 from '../../assets/images/doodle-1.gif'

const FAQS = () => {
  return (
    <div className='relative w-full h-auto mt-[50px] overflow-hidden'>
        <img className='absolute -right-[150px] md:scale-[.5] -top-[50px] -z-1 rotate-[45deg]' src={img1} alt="" />
     <div className='relative w-full h-auto flex flex-col items-center justify-start'>
      <h1 className='text-[3.5rem]'>FAQs</h1>
      <div className='flex flex-col items-center justify-center w-full h-auto p-[20px] divide-y-2 divide-[#f2f2f2]'>
        <Question question="How can i start investing">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Asperiores, consequatur. 
                Fugiat deserunt neque consectetur a, minus distinctio 
                commodi dolorum et aspernatur debitis voluptatum nulla unde non voluptatibus, maiores perspiciatis nemo!
            </p>
        </Question>
        <Question question='What will be my Interests yearly'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Asperiores, consequatur. 
                Fugiat deserunt neque consectetur a, minus distinctio 
                commodi dolorum et aspernatur debitis voluptatum nulla unde non voluptatibus, maiores perspiciatis nemo!
            </p>
        </Question>
        <Question question='What will i be Investing in'>
           <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Asperiores, consequatur. 
                Fugiat deserunt neque consectetur a, minus distinctio 
                commodi dolorum et aspernatur debitis voluptatum nulla unde non voluptatibus, maiores perspiciatis nemo!
            </p>
        </Question>
        <Question question='How can i know you can be trusted'>
           <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Asperiores, consequatur. 
                Fugiat deserunt neque consectetur a, minus distinctio 
                commodi dolorum et aspernatur debitis voluptatum nulla unde non voluptatibus, maiores perspiciatis nemo!
            </p>
        </Question>
      </div>
     </div>
    </div>
  )
}

const Question = ({children, question}) => {
    const [showAnswer, setShowAnswer] = useState(false)

    const handleShowAnswer = () => {
      setShowAnswer(!showAnswer)
    }

    const Variants = {
        open: {
            height: "auto"
        },
        close: {
            height: '0'
        }
    } 
    return (
        <motion.div
        initial={{
            y: 100,
            opacity: 1
        }}
        whileInView={{
            y: 0,
            opacity: 1
        }}
        transition={{
            duration: 1.2,
            type: "spring"
        }}
        onClick={handleShowAnswer} className='w-full active:bg-[#fbfbfb] flex flex-col items-center px-10 justify-start max-w-[1000px] h-auto'>
            <div className='w-full flex items-center justify-between gap-[30px] h-[100px] cursor-pointer'>
            <p className='text-[#797979] text-[1rem] md:text[.9rem]'>
            {question}
            </p>
            <div className='text-[1.5rem] text-[#797979] md:text[1.2rem]'>
                {showAnswer 
                ? <motion.span>-</motion.span>
                : <motion.span>+</motion.span>}
            </div>
            </div>
            <motion.div 
            variants={Variants}
            initial={'close'}
            animate={showAnswer ? "open" : "close"} 
            className='w-full h-auto bg-[#fbfbfb] overflow-hidden'>
               <div className='w-full p-[30px]'>
                {children}
               </div>
            </motion.div>
        </motion.div>
    )
}


export default FAQS
