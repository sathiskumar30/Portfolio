import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='flex-col flex justify-start items-center py-10 gap-4 bg-opacity-20'>
        <h1 className='text-[24px] text-sky-800'>Let's Connect</h1>
        <div className="flex flex-col gap-2 text-[18px]">
            <label className='text-slate-600 text-[20px] font-normal' htmlFor="">Name :</label>
            <input className='border-2 w-[450px] h-[40px] rounded-xl px-2 ' type="text" name="name" id="" />    
        </div>
        <div className="flex flex-col gap-2 text-[18px]">
            <label className='text-slate-600 text-[20px] font-normal' htmlFor="">Email :</label>
            <input className='border-2 w-[450px] h-[40px] rounded-xl px-2' type="email" name="email" id="" />    
        </div>
        <div className="flex flex-col gap-2 text-[18px]">
            <label className='text-slate-600 text-[20px] font-normal' htmlFor="">Share your thought :</label>
            <input className='border-2 w-[450px] h-[140px] rounded-xl px-2' type="text" name="message" id="" />    
        </div>
        <div className="pt-3
        ">
        <button className='bg-gray-600 rounded-xl p-2 font-semibold text-[18px] text-white' type='sumbit'>
            Connect
        </button>
        </div>
    </div>
  )
}

export default Contact