import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen flex items-center justify-center  flex-col' >
        <h1 className='text-4xl font-bold'>Hello, Next.js!</h1>
        <p className='mt-4 text-lg'>Welcome to your Next.js app.</p>
        <p className='mt-4 text-lg'>This is my first Next.js app.</p>
        <Link href="/contact" className='mt-6 px-6 py-4 bg-gray-500 text-white rounded cursor-pointer '>Get Started</Link>
    </div>
  )
}

export default page