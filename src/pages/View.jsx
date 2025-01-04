import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
      <img width={'400px'} src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2pvYjE0MjgtZWxlbWVudC0xMDctcC5wbmc.png" alt="" />
      <div>
        <p>PID: id</p>
        <h1 className='text-5xl font-bold'>Product Name</h1>
        <h4 className='font-bold text-red-600 text-xl'>$300</h4>
        <h5>Brand: brand</h5>
        <h5>Category: Category</h5>
        <p>
          <span className='font-semibold'>Decription :</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vitae quisquam nesciunt modi doloribus soluta maxime eveniet quo impedit enim veniam, itaque aliquid pariatur exercitationem officiis quibusdam expedita perspiciatis adipisci.
          <div className="flex justify-between mt-5">
        <button className='bg-blue-700 text-white p-2'>Add to Wishlist</button>
        <button className='bg-green-600 text-white p-2'>Add to Cart</button>
        </div>
        </p>
        
      </div>
      </div>
    </div>
    </>
  )
}

export default View