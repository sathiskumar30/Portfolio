import About from './About';
import Contact from './Contact';
import Education from './Education';
import Landing from './Landing';
import Project from './Project';
import Skill from './Skill';
import './index.css'



function App() {
   
  return (
    
       <div className="">
          <div className=" max-sm:flex max-sm:flex-row max-sm:gap-2 max-sm:text-[14px] max-sm:justify-end max-sm:items-center max-sm:pr-5  

          flex flex-row gap-9 items-center justify-end py-3 font-medium pr-[70px] text-[20px] bg-slate-700 text-white">  
             <p id="line" onClick={()=>underLine()} className=' underline-offset-4 '>Home</p>
             <a href="#about">
             <p className='hover:underline underline-offset-4'>About me</p>
             </a>
              <a href="#education"><p className='hover:underline underline-offset-4'>Education</p></a>
              <a href="#skill">
             <p className='hover:underline underline-offset-4'>Skills</p>
             </a>
             <a href="#project">
                  <p className='hover:underline underline-offset-4'>Projects</p>
             </a>       
             <a href="#contact">
                  <p className='hover:underline underline-offset-4'>Contact</p>
             </a>       
          </div>
          
             <Landing/>
              <About/>
              <Education/>
              <Project/>
              <Skill/>
             <Contact/>
     </div>
  )
}

export default App




{/* <img className='w-[390px] rounded-[400px] h-[390px] border   ' src="./src/prof.jpg" alt="" /> */}