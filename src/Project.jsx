import React from 'react'

const Project = () => {
  return (
    <div TOATAL className="pl-6 py-9 bg-gray-50">Projects page
          <div MAIN className="">
            <h1 className='font-bold text-[24px] hover:translate-x-6 hover:text-blue-300'>1.News Article Page</h1>
            <div FIRST className="grid grid-cols-[3fr,1fr] py-4 gap-3 max-sm:grid-cols-1">    
                 <div className="">
                    <img className='max-sm:pr-4 max-sm:pb-3' src="./news.png" alt="" />
                 </div>
                 <div className="">
                 <img className='h-[450px] w-[277px] max-sm:w-[320px]' src="./res.jpg" alt="" />
                 </div>
            </div>
            <div className="">
              <h1 className='font-semibold text-[24px] text-blue-600'>Overview</h1>
              <div className="pl-5 py-4 flex flex-col gap-2 max-sm:px-3 max-sm:pl-0">
                <p className='font-medium text-[18px] text-slate-700 max-sm:indent-5'>The above project is created using the basic HTML and CSS. This is the one of the popular News article page, which was created on different name.</p>
                <p className="font-medium text-[18px] text-slate-700 max-sm:indent-5">
                  The <b className='text-red-700 text-[22px]'>first</b> image represent the view of Large Screens like Laptop and Monitor.
                </p>
                <p className="font-medium text-[18px] text-slate-700 max-sm:indent-5">The <b className='text-red-700 text-[22px]'>Second</b> image shows the <b className='text-red-700 text-[22px]'>responsive</b> layout of the website.The view on <b className='text-red-700 text-[22px]'>Mobile</b>.</p>
                <p className="font-medium text-[18px] text-slate-700 max-sm:indent-5">
                  Instead of using CSS3, in this project I used the Popular Framework of Tailwind CSS.
                </p>
                <p className="font-medium text-[18px] text-slate-700 max-sm:indent-5">It is created <b className='text-red-700 text-[20px]'>Tailwind CSS</b> low level style framework</p>
              </div>
              <div className="flex flex-row items-center justify-center max-sm:flex-row max-sm:items-start max-sm:justify-between">
                <img className='w-16' src="./git.png" alt="" />
                <p className="text-[22px] text-blue-800 hover:underline-offset-8 hover:underline max-sm:text-[20px] max-sm:">https://sathiskumar30.github.io/tridotsreact/</p>
              </div>
            </div>
            <div SECOND className="">
                <div className="">
                  <h2 className="font-bold text-[24px] hover:translate-x-6 hover:text-blue-300">2. Zlipkart</h2>
                    <div className="grid grid-cols-2 gap-4 py-3 max-sm:grid-cols-1 max-sm:py-0">
                        <img className="p-2 max-sm:pr-3" src="./proj2.png" alt="" />
                        <div className="flex flex-col gap-1 max-sm:px-1">
                          <h1 className='font-semibold text-[24px] text-blue-600'>Short Intro</h1>
                          <p className='font-medium text-[18px] text-slate-700 max-sm:indent-3'>The image on left side represents the overview of my <b className='text-red-700 text-[20px]'>Zlipkart</b> app , it resembles the overview of official flipkart website.</p>
                          <p className="font-medium text-[18px] text-slate-700 max-sm:indent-3"><b className='text-red-700 text-[20px]'>React Js</b> is used to create this web application, which is more interactive and <b className='text-red-700 text-[20px]'>User friendly </b>in nature. </p>

                          <p className='font-medium text-[18px] text-slate-700 max-sm:indent-3'>Using various <b className='text-red-700 text-[20px]'>React Hooks</b>are used to make this as posssible , such as <b className='text-red-700 text-[20px]'>useState</b>, <b className='text-red-700 text-[20px]'>useEffect</b>, <b className='text-red-700 text-[20px]'>React-router</b>, etc., </p>

                          <p className='font-medium text-[18px] text-slate-700 max-sm:indent-3'> <b className='text-red-700 text-[20px]'>Npm packages</b> are used for the specific purposes. <b className='text-red-700 text-[20px]'>React icons</b> takes more priority, when we want to use the icons in the app. </p>

                          
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                          <img className='w-16' src="./git.png" alt="" />
                          <p className="text-[22px] text-blue-800 hover:underline-offset-8 hover:underline">https://sathiskumar30.github.io/flipkart/</p>
                    </div>  


                </div>
            </div>
         <div THIRD className="">
            <h1 className='font-bold text-[24px] hover:translate-x-6 hover:text-blue-300'>3. CRUD operations</h1>
                <div className="flex flex-row  gap-5 py-4 pl-3 max-sm:flex-col max-sm:pl-0 max-sm:px-4">
                  <div className="">
                   <img className="h-[420px] w-[372px]" src="./crud.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1  className="font-semibold text-[24px] text-blue-600">Short note :</h1>
                    <p className="font-medium text-[22px] text-slate-700 max-sm:indent-3">
                      The picture on left shows the view of the <b className='text-red-700 text-[20px]'>CRUD</b> operations on <b className='text-red-700 text-[20px]'>React Js</b>.
                    </p>
                    <p className="font-medium text-[22px] text-slate-700 max-sm:indent-3">CRUD stands for Create Read Update and Delete , These are operations available using the crud in React. </p>
                    <p className="font-medium text-[22px] text-slate-700 max-sm:indent-3">The project demonstrations gives you an basic idea of crud on React</p>
                    <p className='font-medium text-[22px] text-slate-700 max-sm:indent-3'>This project is a simple Grocery list , we can made change the <b className='text-red-700 text-[20px]'>Price</b>, <b className='text-red-700 text-[20px]'>Name</b>, <b className='text-red-700 text-[20px]'>Short info</b>, about the all products , that are present in the list </p>
                       <div className="flex flex-row items-center justify-start">
                          <img className='w-16' src="./git.png" alt="" />
                          <p className="text-[22px] text-blue-800 hover:underline-offset-8 hover:underline">https://sathiskumar30.github.io/Crud/</p>
                    </div>
                  </div>
               
                </div>
                
            </div>
          </div>
    </div>
  )
}

export default Project




