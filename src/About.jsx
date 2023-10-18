import React from 'react'

const About = () => {
  return (
     <div className="px-2 pl-6 py-4 max-sm:pl-3 ">
        <h1 className='text-[26px] font-bold ' >About me</h1>
        <div className="pl-4 flex flex-col gap-2 max-sm:pl-1">
           <div className="flex flex-row gap-2 pt-3 max-sm:items-start">
           <img className='w-6  max-sm:w-7 max-sm:h-7 max-sm:mt-1' src="./src/images/next.png" alt="" />
             <p className='text-[20px] font-semibold'>I'm a Fresher, A 21 year boy from TmailNadu, very passionate about doing small things in a greater way.
             </p>
             </div>
             <div className="flex flex-row gap-2">
             <img className='w-6 max-sm:w-7 max-sm:h-7 max-sm:mt-1' src="./src/images/next.png" alt="" />
             <p className="text-[20px] font-semibold">
              Looking for a position in <b className='text-[#000000]'>Web development</b> to start my carrier.
             </p>
             </div>
             <div className="flex flex-row gap-2">
             <img className='w-6 max-sm:w-7 max-sm:h-7 max-sm:mt-1' src="./src/images/next.png" alt="" />
             <p className="text-[20px] font-semibold">
               A self motivated and Passionated person towards making new stuff and learning new Trending technologies..
             </p>
             </div>
             <div className="flex flex-row gap-2">
             <img className='w-6 max-sm:w-7 max-sm:h-7 max-sm:mt-1' src="./src/images/next.png" alt="" />
             <p className="text-[20px] font-semibold">
               Having knowledge of various <b>Frontend Frameworks</b> and <b>Libraries</b>,with hands on working with stuff on my own projects.
             </p>
             </div>
        </div>
        <div className="">
           <div className="">
            <h2 className='text-[20px] py-4 font-semibold'>Family Background</h2>
           </div>
           <div className="">
               <div className="font-sans text-[18px] pl-4 font-medium hover:pl-6">
                  <p>A short information about my family, In my family including myself there are 5 members. "Grandma, Father, Mother,and A Younger Sister".</p>
               </div>
           </div>
        </div>
        <div className="flex flex-col gap-3 pt-4">
          <h1 className='font-bold text-[25px] max-sm:text-[22px]'>Professional Background</h1>
         <div className="flex flex-row gap-3 pl-4">
          <img className='w-6 h-8  max-sm:mt-1' src="./src/images/right.png" alt="" />
          <p className='text-[18px] font-semibold'>I'm a <b className='text-[22px] font-serif'>fresher</b> and <b>2023</b> year Graduate. <br />
          I have completed few projects to showcase my talent on Frontend technologies <br />
          Frontend developer is my 1'st on my career..</p>
          </div>
        </div>
        <div className="max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:py-4 max-sm:pb-6">
          <h2 className='pt-2 pl-3 font-semibold text-[22px] max-sm:pl-0'>Goal : To Achieve</h2>
          <div className="flex flex-row gap-3 items-center pl-7 max-sm:flex-col max-sm:pl-5">
               <h2 className='text-red-600 font-semibold text-[23px] '>I want to become a <b className='max-sm:text-[28px]'>MERN</b> Stack developer</h2>
               <div className='flex flex-row gap-3 justify-center items-center'>
               <img className='w-12 h-12' src="./src/images/mongodb.svg" alt="" />
               <img className='w-12 h-12' src="./src/images/express.png" alt="" />
               <img className='w-12 h-12' src="./src/images/react.png" alt="" />
               <img className='w-12 h-12' src="./src/images/node.png" alt="" />
               </div>
          </div>
        </div>
         <div className="flex flex-col gap-3">
            <h1 className='font-bold  text-[25px]'>Contact :</h1>
            <div className="pl-4 flex flex-col gap-1">
                  <div className="flex flex-row gap-3 items-center max-sm:flex-col max-sm:items-start max-sm:gap-0">
                     <h2 className='font-semibold text-[16px]'>Email :</h2>
                     <h2 className='text-[20px] font-bold max-sm:pl-4'>sksathis2002@gmail.com</h2>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                     <h2 className='font-semibold text-[16px]'>Mobile :</h2>
                     <h2 className='text-[20px] font-semibold '>+91 877816****</h2>
                  </div>
            </div>
            <div className="flex flex-row gap-4 pl-6 max-sm:pt-3 max-sm:items-center">
            <img className='w-10 h-10' src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="" />
            <img className='w-10 h-10' src="https://w7.pngwing.com/pngs/110/230/png-transparent-whatsapp-application-software-message-icon-whatsapp-logo-whats-app-logo-logo-grass-mobile-phones-thumbnail.png" alt="" />
            <img className='w-10 h-10' src="https://w7.pngwing.com/pngs/419/837/png-transparent-telegram-icon-telegram-logo-computer-icons-telegram-blue-angle-triangle-thumbnail.png" alt="" />
            </div>
         </div>
     </div>
  )
}

export default About