import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <div className='min-h-screen flex items-center justify-center  flex-col' >
            <p className='text-lg '>This is my first Next.js app and I created the about page.</p>
            <Link href="/" className='mt-6 px-6 py-4 bg-gray-500 text-white rounded cursor-pointer'>Go to Home</Link>
            </div>
  )
}

export default page