import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>
          <img width={'100%'} height={'150px'} src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2pvYjE0MjgtZWxlbWVudC0xMDctcC5wbmc.png" alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>Product name</h3>
            <Link to={'/id/view'} className='bg-violet-600 rounded p-1 text-white inline-block'>View More..</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home