import React from 'react'
import logo from '../assets/logo.svg'
import harm from '../assets/icon-burger.svg'
const Nav = () => {
  return (
    <div className='h-[27rem] bg-red-400 p-8 w-[100vw] md:pl-20 md:pr-20 md:p-8 rounded-bl-[3rem]'>
        <nav className='flex justify-between p-3'>
          <div className='  md:flex gap-16'>
            <div><img src={logo} alt="" /> </div>
            <div className='w-64 h-8 hidden md:flex gap-3'>
              <p className='flex'><a href="" className='text-gray-500' >Product</a></p>
              <p><a href="" className='text-gray-500' >Company</a></p>
              <p><a href="" className='text-gray-500'>Connect</a></p>
            </div>
          </div>
            <div className='md:hidden'><img src={harm} alt="" /></div>
            <div className=' hidden md:flex  gap-5'>
              <div className='text-center text-gray-500 w-24 h-8'>Log in</div>
              <div className=' w-24 h-8 text-center rounded-3xl bg-white text-red-500'>Sign up</div>
            </div>
        </nav>
        <div className='m-auto text-center mt-16'>
        <h2 className='text-2xl'>A modern <br className='md:hidden' /> publishing platform</h2>
        <p className='mt-6'>Grow your audience and build your online brand</p>
        </div>
        <div className='flex gap-3 justify-center mt-6'>
          <div className='w-28 text-center h-9 rounded-2xl border-2 text-red-500 font-bold border-white bg-slate-50'>Start for Free</div>
          <div className='w-28 text-center h-9 rounded-2xl border-2 border-white'>Learn More</div>
        </div>
          <div className=' hidden fixed w-72 bg-slate-400 items-center text-center z-10 justify-center flex-col  h-96 border-2 border-black -mt-64'>
           <div className='m-auto'>
            <p><a href="">Product</a></p>
            <p><a href="">Company</a></p>
            <p><a href="">Connect</a></p>
           </div>
            <div className='w-24 h-24 bg-slate-300'>
              <p><a href="">Contact</a></p>
              <p><a href="">Newsletter</a></p>
              <p><a href="">Linkedin</a></p>
            </div>
              <div className='bg-white h-2'></div>
            <div>Log in</div>
            <div className='bg-red-500 text-center w-28 m-auto text-white'>Sign up</div>
          </div>
    </div>
  )
}

export default Nav;
