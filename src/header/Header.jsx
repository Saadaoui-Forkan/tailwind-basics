import React from 'react'

function header({toggleDarkMode}) {
  return (
    <div className='  bg-slate-200 dark:bg-slate-800'>
      <div 
        className=' container 
        flex items-center justify-around py-6 text-slate-800
       dark:text-slate-50'>
        <div>
          <h1 className=" font-bold text-3xl">
            Social Media Dashboard
          </h1>
          <span className=" text-lg">Total Followers : 12.3456</span>
        </div>
        <div 
          className=" bg-slate-300 p-2 rounded-full flex items-center justify-center
        dark:bg-slate-700" 
          onChange={toggleDarkMode}>
          <label
            htmlFor="darkMode"
            className=" mr-2 text-md"
          >
            Dark Mode
          </label>
          <span>
            <input
              id="darkMode"
              type="checkbox"
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default header
