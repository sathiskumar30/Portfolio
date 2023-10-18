import React from 'react'
import './index.css'

const Skill = () => {

    function Percentage(){
        var x = document.getElementById('per');
        x.style.visibility="visible"
    }


  return (
    <div className='pl-6 bg-green-100 pt-5 max-sm:pl-2 max-sm:px-4 max-sm:pt-0'>
        <div GRID className="py-5 grid grid-cols-2 max-sm:grid-cols-1 max-sm:py-3">
            <div FIRST className="flex flex-col items-start gap-8">
                <div one className="">
                    <div className="flex flex-row gap-4 max-sm:gap-3">
                        <img className='w-14 max-sm:w-10' src="./src/images/html.png" alt="" srcset="" />
                        <div className="flex flex-col gap-2 max-sm:gap-1">
                            <div className="flex flex-row  justify-between items-center pr-4 ">
                                        <h1 className='text-[20px] font-semibold'>HTML5</h1>
                                        <p id="per" className="border border-white rounded-xl w-fit p-1 bg-white text-[16px] font-semibold invisible">85%</p>
                            </div>
                            <div className="text-white border h-3 w-80 rounded-lg bg-white flex flex-row items-center max-sm:w-64  ">
                            <p className="text-white border h-3 w-72 rounded-lg bg-red-600 max-sm:w-56 "></p>
                            <p className='h-3 bg-gray-300 w-4 rounded-3xl absolute ml-[273px] max-sm:ml-[210px]' onClick={()=>Percentage()}></p>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>

                 <div two className="">
                    <div className="flex flex-row gap-4 max-sm:gap-[4px]">
                        <img className='w-14  max-sm:w-12 max-sm:h-12  ' src="./src/images/css.png" alt="" srcset="" />
                        <div className="flex flex-col gap-2 max-sm:gap-2">
                        <div className="flex flex-row  justify-between items-center pr-4">
                                        <h1 className='text-[20px] font-semibold'>CSS3</h1>
                                        <p id="per" className="border border-white rounded-xl w-fit p-1 bg-white text-[16px] font-semibold invisible">85%</p>
                            </div>
                            <div className="text-white border h-3 w-80 rounded-lg bg-white flex flex-row items-center max-sm:w-64  ">
                            <p className="text-white border h-3 w-72 rounded-lg bg-red-600 max-sm:w-56 "></p>
                            <p className='h-3 bg-gray-300 w-4 rounded-3xl absolute ml-[273px] max-sm:ml-[210px]' onClick={()=>Percentage()}></p>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>

                   
                <div three className="">
                <h1 className='text-[24px] font-semibold pl-5 pb-4 hover:underline hover:underline-offset-4 text-zinc-500 max-sm:pl-0'>Language</h1>
                    <div className="flex flex-row gap-4 max-sm:gap-[4px]">
                        <img className='w-14  max-sm:w-12 max-sm:h-12' src="./src/images/javascript.png" alt="" srcset="" />
                        <div className="flex flex-col gap-2 max-sm:gap-2">
                        <div className="flex flex-row  justify-between items-center pr-4">
                                        <h1 className='text-[20px] font-semibold'></h1>
                                        <p id="per" className="border border-white rounded-xl w-fit p-1 bg-white text-[16px] font-semibold invisible">85%</p>
                            </div>
                            <div className="text-white border h-3 w-80 rounded-lg bg-white flex flex-row items-center max-sm:w-64  ">
                            <p className="text-white border h-3 w-72 rounded-lg bg-red-600 max-sm:w-56 "></p>
                            <p className='h-3 bg-gray-300 w-4 rounded-3xl absolute ml-[273px] max-sm:ml-[210px]' onClick={()=>Percentage()}></p>
                            
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-1 pl-4 py-3">
                        <p className="max-sm:text-[17px] max-sm:indent-3">
                            <b>Javascript </b> is progrmming as well as Scripting Language.
                        </p>
                        <p className="max-sm:text-[17px] max-sm:indent-3">
                            I have a better knowledge on Scripting as well as Programing in Javascript. 
                        </p>
                    </div>
                </div>

                <div three className="">
                    <div className="flex flex-row gap-4 max-sm:gap-[4px]">
                        <img className='w-14  max-sm:w-12 max-sm:h-12  h-10' src="./src/images/tail.png" alt="" srcset="" />
                        <div className="flex flex-col gap-2 max-sm:gap-2">
                        <div className="flex flex-row  justify-between items-center pr-4">
                                        <h1 className='text-[20px] font-semibold'>Tailwind CSS</h1>
                                        <p id="per" className="border border-white rounded-xl w-fit p-1 bg-white text-[16px] font-semibold invisible">85%</p>
                            </div>
                            <div className="text-white border h-3 w-80 rounded-lg bg-white flex flex-row items-center max-sm:w-64  ">
                            <p className="text-white border h-3 w-72 rounded-lg bg-red-600 max-sm:w-56 "></p>
                            <p className='h-3 bg-gray-300 w-4 rounded-3xl absolute ml-[273px] max-sm:ml-[210px]' onClick={()=>Percentage()}></p>
                            
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex flex-col items-start pl-4 py-3 gap max-sm:gap-[5px]">
                        <p className="max-sm:text-[16px] max-sm:indent-3">
                            This is a popular Frontend framework used to avoid the semantic classnames.
                        </p>
                        <p className="max-sm:text-[16px] max-sm:indent-3">
                            I had developed <b>Responsive website </b> using the tailwind css , and I have a ability to maintain it.
                        </p>
                        <p className="max-sm:text-[16px] max-sm:indent-3">
                            I have a better knowledge in this frontend framework.
                        </p>
                    </div>
                </div>



            </div>
            <div SECOND className="flex flex-col gap-8">
               <div three className="">
                    <div className="flex flex-row gap-4 max-sm:gap-[4px]">
                        <img className='w-14  max-sm:w-12 max-sm:h-12' src="./src/react.png" alt="" srcset="" />
                        <div className="flex flex-col gap-2 max-sm:gap-2">
                        <div className="flex flex-row  justify-between items-center pr-4">
                                        <h1 className='text-[20px] font-semibold'>React Js</h1>
                                        <p id="per" className="border border-white rounded-xl w-fit p-1 bg-white text-[16px] font-semibold invisible">85%</p>
                            </div>
                            <div className="text-white border h-3 w-80 rounded-lg bg-white flex flex-row items-center max-sm:w-64  ">
                            <p className="text-white border h-3 w-72 rounded-lg bg-red-600 max-sm:w-56 "></p>
                            <p className='h-3 bg-gray-300 w-4 rounded-3xl absolute ml-[273px] max-sm:ml-[210px]' onClick={()=>Percentage()}></p>
                            
                            </div>
                            
                        </div>
                    </div> 
                    <div className="flex flex-col items-start gap-1 pl-6 pt-3">
                    <p className="text-[18px] max-sm:text-[16px] max-sm:indent-3">
                        Having a hands on knowledege of working with various <b>Custom Hooks</b> in react
                    </p>
                    <p className="text-[18px] max-sm:text-[16px] max-sm:indent-3">
                       Hooks such as <b>useState</b> <b>UseEfect</b> <b>useRef</b> and ect..
                    </p>
                    <p className="text-[18px] max-sm:text-[16px] max-sm:indent-3">
                        Good at working with <b>RESTful API's</b>
                    </p>
                </div>
                </div>


                <div three className="">
                    <div className="flex flex-row gap-4 max-sm:gap-[4px]">
                        <img className='w-14  max-sm:w-12 max-sm:h-12' src="./src/node.png" alt="" srcset="" />
                        <div className="flex flex-col gap-2 max-sm:gap-2">
                        <div className="flex flex-row  justify-between items-center pr-4">
                                        <h1 className='text-[20px] font-semibold'>Node js</h1>
                                        <p id="per" className="border border-white rounded-xl w-fit p-1 bg-white text-[16px] font-semibold invisible">85%</p>
                            </div>
                            <div className="text-white border h-3 w-80 rounded-lg bg-white flex flex-row items-center max-sm:w-64  ">
                            <p className="text-white border h-3 w-72 rounded-lg bg-red-600 max-sm:w-56 "></p>
                            <p className='h-3 bg-gray-300 w-4 rounded-3xl absolute ml-[273px] max-sm:ml-[210px]' onClick={()=>Percentage()}></p>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div three className="">
                    <h1 className='text-[24px] font-semibold pl-5 pb-4 hover:underline hover:underline-offset-4 text-zinc-500 max-sm:pl-0'>Database</h1>
                    <div className="flex flex-row gap-4 max-sm:gap-[4px]">
                        <img className='w-14  max-sm:w-12 max-sm:h-12' src="./src/mongodb.svg" alt="" srcset="" />
                        <div className="flex flex-col gap-2 max-sm:gap-2">
                        <div className="flex flex-row  justify-between items-center pr-4">
                                        <h1 className='text-[20px] font-semibold'>MongoDB</h1>
                                        <p id="per" className="border border-white rounded-xl w-fit p-1 bg-white text-[16px] font-semibold invisible">85%</p>
                            </div>
                            <div className="text-white border h-3 w-80 rounded-lg bg-white flex flex-row items-center max-sm:w-64  ">
                            <p className="text-white border h-3 w-72 rounded-lg bg-red-600 max-sm:w-56 "></p>
                            <p className='h-3 bg-gray-300 w-4 rounded-3xl absolute ml-[273px] max-sm:ml-[210px]' onClick={()=>Percentage()}></p>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>


                <div three className="">
                <h1 className='text-[24px] font-semibold pl-5 pb-4 hover:underline hover:underline-offset-4 text-zinc-500 max-sm:pl-0'>Source control</h1>
                    <div className="flex flex-row gap-4 max-sm:gap-[4px]">
                        <img className='w-14  max-sm:w-12 max-sm:h-12' src="./src/images/git.png" alt="" srcset="" />
                        <div className="flex flex-col gap-2 max-sm:gap-2">
                        <div className="flex flex-row  justify-between items-center pr-4">
                                        <h1 className='text-[20px] font-semibold'>Github</h1>
                                        <p id="per" className="border border-white rounded-xl w-fit p-1 bg-white text-[16px] font-semibold invisible">85%</p>
                            </div>
                            <div className="text-white border h-3 w-80 rounded-lg bg-white flex flex-row items-center max-sm:w-64  ">
                            <p className="text-white border h-3 w-72 rounded-lg bg-red-600 max-sm:w-56 "></p>
                            <p className='h-3 bg-gray-300 w-4 rounded-3xl absolute ml-[273px] max-sm:ml-[210px]' onClick={()=>Percentage()}></p>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>



            </div>








        </div>
    </div>
  )
}

export default Skill