import React from 'react'

const Landing = () => {

   function linkedin(){
    window.location.href='https://www.linkedin.com/in/sathis-kumar-3a8368266/';
   }
   function github(){
    window.location.href='https://github.com/sathiskumar30';
   }
   function netlify(){
    window.location.href='https://app.netlify.com/teams/sathiskumar30/overview';
   }
   function mail(){
    
      window.open("mailto:sksathis2002@gmail.com.com?subject=SendMail&body=Description");
   }








  return (
    <div LANDING CONTENT id="landing" className='flex flex-row gap-[130px]  items-center max-sm:flex-col-reverse max-sm:gap-[10px] max-sm:pl-3 max-sm:py-2 bg-[url(./back1.jpg)] bg-cover text-white pb-20 max-sm:pb-8'>
             <div className="pl-20 pt-28 max-sm:pl-0 max-sm:pt-0">
               <h3 className='font-semibold text-[30px] max-sm:text-[18px] text-teal-400'>Hello, I'm</h3>
               <h1 className='font-semibold text-[45px] max-sm:text-[25px]'>Sathis kumar</h1>
                <div className="flex flex-row  items-center gap-2 text-[20px] font-bold max-sm:text-[16px]">
                  <h3>Frontend Developer </h3>
                  <h3>&</h3>
                  <h3>ReactJs Developer</h3>
                </div>
                <div className='pt-3 max-sm:pt-2 flex flex-col gap-1.5'>
                  <p className='font-medium text-[16px] max-sm:text-[15px] max-sm:indent-3'>I'm a passionate developer, looking for a entry level position <br />at Web development.</p>
                  <p className='font-medium text-[16px] max-sm:text-[15px] max-sm:indent-3'>I design beautifully simple things, And I love What I do.</p>
                  <p className='font-medium  text-[16px] max-sm:text-[15px]  max-sm:indent-3'>Creating websites that solve your problems before you even know they exist.</p>
                </div>
                <div className='pt-5 pb-2'>
                  <button className='bg-cyan-600 text-white  px-4 text-[16px] py-1 font-semibold rounded-sm'>Hire Me</button>
                </div>
                <div className="w-10 flex felx-row gap-7 pt-4 max-sm:gap-5 max-sm:w-7 max-sm:pt-4"> 
              
                        <img onClick={()=>linkedin()} className=" " id="img1"src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="" srcset=""/>
               
                      <img onClick={()=>github()} className="bg-white rounded-3xl"src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" srcset="" />
                      
                       <img onClick={()=>netlify()}className="bg-blue-950"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3pvYrWO2O76gjS8WQFkaVAsw1rye77p_lEr2n5hBy63cv8rs7ZWs-YkFmEOt8W60zy8&usqp=CAU" alt="" srcset="" />

                       <img onClick={()=>mail()} src="https://static-00.iconduck.com/assets.00/mail-icon-2048x2048-525ey8hu.png" alt="" srcset="" />
                </div>
             </div >
             <div className="">
                 <div className="border2">
                        <div className="border1">
                          <div className="">
                             <>
                                
                              <img className='w-[340px] rounded-[400px] h-[340px] border max-sm:w-[190px] max-sm:h-[200px]  ' src="./prof.jpg" alt="" />
                             
                           </>
                        </div>
                        </div>
                  </div>
             </div>
   </div>
  )
}

export default Landing