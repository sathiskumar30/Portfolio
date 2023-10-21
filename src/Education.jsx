import React from 'react'

const Education = () => {
  return (
<div id="education" className='pl-20 py-6 max-sm:pl-3'>
      <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1 max-sm:gap-7">
         <div FIRST className="flex flex-row items-center gap-4">
            <div className="">
                <img className="w-28 h-fit max-sm:w-32" src="./grad.png" alt="" />
            </div>
           <div className="">
            <h2 className='text-[18px] font-medium'>Graduate</h2>
            <div>
                <h2>Graduate in Electronics and Communication Engineering</h2>
                 <h2>Paavai Engineering College || Full time</h2>
                 <h2>Graduated with <b>8.3</b> CGPA or <b>83 %</b></h2>
                 <h2>From 2019 to 2023</h2>
            </div>
        </div>
         </div>
         <div SECOND className="flex flex-row items-center gap-5 ">
               <div className="">
                      <img className="w-24 h-fit max-sm:w-32" src="./schl.png" alt="" />
               </div>
               <div className="max-sm:flex max-sm:flex-col max-sm:gap-1">
                  <h1 className='font-semibold text-[16px]'>Higher Secondary</h1>
                  <p className='text-[15px]'>P.A.Vidhyaa Bhavan Higher Secondary School</p>
                  <p> Percentage : <b> 77 % </b> </p>
                  <h1 className='font-semibold text-[16px]'>Secondary School</h1>
                  <p className='text-[15px]'>G.K.Vidhyaa Mandir Matriculation School</p>
                  <p>Percentage : <b> 89 % </b></p>
               </div>
         </div>
         
      </div>
</div>
  )
}

export default Education