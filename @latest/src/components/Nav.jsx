import React from 'react'
import logo from '../assets/logo.svg'
import harm from '../assets/icon-burger.svg'
const Nav = () => {
  return (
    <div className='h-96 bg-red-400 w-[100vw] rounded-bl-[3rem]'>
        <nav className='flex justify-between p-3'>
            <div><img src={logo} alt="" /></div>
            <div><img src={harm} alt="" /></div>
        </nav>
        <div className='m-auto text-center w-64'>
        <h2 className='text-2xl'>A modern <br /> publishing platform</h2>
        <p>Grow your audience and build your online brand</p>
        </div>
        <div className='flex gap-3 justify-center'>
          <div className='w-24 h-9 rounded-2xl border-2 text-red-500 border-white bg-slate-50'>Start for Free</div>
          <div className='w-24 h-9 rounded-2xl border-2 border-white'>Learn More</div>
        </div>
    </div>
  )
}

export default Nav;
