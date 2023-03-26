import React from 'react'

function header() {
  return (
    <div className='  bg-slate-200'>
      <div className=' container flex items-center justify-around py-6 text-slate-800'>
        <div>
          <h1 className=" font-bold text-3xl">
            Social Media Dashboard
          </h1>
          <span className=" text-lg">Total Followers : 12.3456</span>
        </div>
        <div className="">
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
