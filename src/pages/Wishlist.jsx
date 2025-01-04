import React from 'react'
import Header from '../components/Header'

const Wishlist = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
      <>
      <h1 className='text-4xl text-red-600'>My Wishlist</h1>
      <div className='grid grid-cols-4 gap-4 mt-2'>
        <div className='rounded border p-2 shadow'>
          <img width={'100%'} height={'150px'} src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2pvYjE0MjgtZWxlbWVudC0xMDctcC5wbmc.png" alt="" />
          <div className='text-center'>
          <h3 className='text-xl font-bold'>Product name</h3>
            <div className='flex justify-evenly mt-3'>
              <button className='text-xl'><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
              <button className='text-xl'><i className="fa-solid fa-cart-plus text-green-700"></i></button>
            </div>
          </div>
        </div>
      </div>
      </>
    </div>
    </>
  )
}

export default Wishlist