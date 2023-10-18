import About from './About';
import Education from './Education';
import Project from './Project';
import Skill from './Skill';
import './index.css'



function App() {
    function underLine(){
       const x= document.getElementById("line")
       x.style.textDecoration="underLine";
    }
     function link(){
       const y=document.getElementById("img1")
       y.href="www.google.com";
     }
  return (
    <>
       <div LANDING PAGE className='px-5 max-sm:px-0'>
          <div className=" max-sm:flex max-sm:flex-row max-sm:gap-2 max-sm:text-[14px] max-sm:justify-end max-sm:items-center max-sm:pr-2 

          flex flex-row gap-9 items-center justify-end py-3 font-medium pr-12 text-[26px] bg-slate-700 text-white">  
             <p id="line" onClick={()=>underLine()} className=' underline-offset-4 '>Home</p>
             <p className='hover:underline underline-offset-4'>About me</p>
             <p className='hover:underline underline-offset-4'>Education</p>
             <p className='hover:underline underline-offset-4'>Skills</p>
             <p className='hover:underline underline-offset-4'>Projects</p>       
          </div>
          <div LANDING CONTENT className='flex flex-row gap-[130px]  items-center max-sm:flex-col-reverse max-sm:gap-[10px] max-sm:pl-3 max-sm:py-2'>
             <div className="pl-20 pt-28 max-sm:pl-0 max-sm:pt-0 bg-white">
               <h3 className='font-semibold text-[30px] max-sm:text-[18px] text-teal-400'>Hello, I'm</h3>
               <h1 className='font-semibold text-[45px] max-sm:text-[25px]'>Sathis kumar</h1>
                <div className="flex flex-row  items-center gap-2 text-[20px] font-bold max-sm:text-[16px]">
                  <h3>Frontend Developer </h3>
                  <h3>&</h3>
                  <h3>ReactJs Developer</h3>
                </div>
                <div className='pt-3 max-sm:pt-2'>
                  <p className='font-medium text-[16px] max-sm:text-[15px] max-sm:indent-3'>I'm a passionate developer, looking for a entry level position <br />at Web development.</p>
                  <p className='font-medium text-[16px] max-sm:text-[15px] max-sm:indent-3'>I design beautifully simple things, And I love What I do.</p>
                  <p className='font-medium  text-[16px] max-sm:text-[15px]  max-sm:indent-3'>Creating websites that solve your problems before you even know they exist.</p>
                </div>
                <div className='pt-2.5'>
                  <button className='bg-cyan-600 text-white  px-4 text-[16px] py-1 font-semibold rounded-sm'>Hire Me</button>
                </div>
                <div className="w-8 flex felx-row gap-7 pt-4 max-sm:gap-5 max-sm:w-7 max-sm:pt-4">
                <img id="img1"src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="" srcset="" onClick={()=>link()}/>
                <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" srcset="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3pvYrWO2O76gjS8WQFkaVAsw1rye77p_lEr2n5hBy63cv8rs7ZWs-YkFmEOt8W60zy8&usqp=CAU" alt="" srcset="" />
                <img src="https://static-00.iconduck.com/assets.00/mail-icon-2048x2048-525ey8hu.png" alt="" srcset="" />
                </div>
             </div >
             <div className="">
                 <div className="border2">
                        <div className="border1">
                          <>
                        <img className='w-[390px] rounded-[400px] h-[390px] border max-sm:w-[190px] max-sm:h-[200px]  ' src="./src/images/prof.jpg" alt="" />
                        </>
                        </div>
                  </div>
             </div>


          </div>
          
          {/* ABOUT */}

        <About/>
        <Education/>
         <Project/>
         <Skill/>
       </div>
    </>
  )
}

export default App




{/* <img className='w-[390px] rounded-[400px] h-[390px] border   ' src="./src/prof.jpg" alt="" /> */}