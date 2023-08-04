import React from 'react'
import { Link } from 'react-router-dom'
import {FormOutlined, DatabaseOutlined} from '@ant-design/icons'

function Sidebar() {
  return (
   <aside
    className='absolute left-0 w-fit md:w-48 bg-blue-200 rounded-xl
     min-h-[700px] mt-10 m-2 justify-center p-2 text-xl pt-8 space-y-4'>
      
        <Link to={"/admin/entries/new"}
          className='flex text-2xl bg-gray-100 shadow-2xl hover:shadow-2xl h-10 rounded-xl pl-1
           text-blue-400  hover:translate-x-1 items-center'>
          <FormOutlined className='text-2xl md:text-3xl pr-4'/> 
          <p className=' text-black hidden md:flex'>New </p>
        </Link>

        <Link to={"/admin/dashboard"}
          className='flex text-2xl bg-gray-100 shadow-2xl hover:shadow-2xl h-10 rounded-xl pl-1
           text-blue-400  hover:translate-x-1 items-center'>
          <DatabaseOutlined className='text-2xl md:text-3xl pr-4'/> 
          <p className=' text-black hidden md:flex'>Home</p>
        </Link>
      
   </aside>
  )
}

export default Sidebar