
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='w-full h-16 flex flex-col justify-center items-center font-blue-500 font-extrabold'>
        <div className='flex-col h-fit p-2 pt-2 w-full md:w-[80%] lg:[60%]  bg-blue-200 justify-center rounded-lg'>
            <div className=' flex justify-between pt-2'>
            <Link to={'/'}>
            <h2 className='text-xl md:text-3xl pl-4 md:pl-8 text-gray-900 hover:text-black hover:shadow-2xl '>
                MY DIARY APP
            </h2>
            </Link>
            <div className='pr-4 pt-2 md:pr-8 flex items-center '>
                
            
                <Link to={"/login"}>
                <Button 
                    className='bg-blue-500 text-white text-lg h-10
                    rounded-lg hover:font-bold hover:text-white duration-200'>
                        <p className='text-white'>Sign In</p>
                    </Button>
                </Link>
            
            </div>
            </div>
        <p className='text-xl text-center  font-serif'>The number one Diary app</p>
    </div>

    </header>
  )
}

export default Header