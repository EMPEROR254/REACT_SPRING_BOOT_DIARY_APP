import React from 'react'

function Homepage() {
  return (
    <div className='space-x-3 w-full mt-8 md:mt-16 items-center justify-center'>
        <article className='grid relative justify-center justify-content-center w-full md:w-[80%] space-y-4'>
            <p className='text-2xl underline  text-blue-800 font-extrabold '>
                Welcome to My Diary App
            </p>
            <p className='font-italics text-xl font-bold'>
                This app offers several features for its users : 
            </p>
            <div className='pl-4'>
            <ul className='font-semibold text-gray-700 text-lg text-left'>
                <li>1). A login form for authentication of users</li>
                <li>2). Diary entry form</li>
                <li>3). List of all diary entries from latest to oldest</li>
                <li>4). Ability to delete an entry and modify it</li>
                
            </ul>
            </div>
        </article>
    </div>
  )
}

export default Homepage