import React from 'react'

const page = () => {


    return (
        <div className='min-h-screen flex  justify-center items-center flex-col px-10  border border-gray-500' >
      <form className='max-w-1/2'>

        <label htmlFor="name" className='text-lg'>Name:</label>
        <input type="text"  name="name" className='border border-gray-300 rounded px-4 py-2 mt-2 mb-4 w-full'  />   
        <label htmlFor="email" className='text-lg'>Email:</label>
        //what is the error here?
        <input type="email" id="email" name="email" className='border border-gray-300 rounded px-4 py-2 mt-2 mb-4 w-full' />
        <label htmlFor="message" className='text-lg'>Message:</label>
        <textarea id="message" name="message" className='border border-gray-300 rounded px-4 py-2 mt-2 mb-4 w-full' rows="4"></textarea>
        <button type="submit" className='px-6 py-4 bg-gray-500 text-white rounded cursor-pointer'>Submit</button>
      </form>


        </div>
    )
}

export default page