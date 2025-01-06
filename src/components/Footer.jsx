import React from 'react'
import { Link } from 'react-router-dom'
Link
const Footer = () => {
  return (
    <div style={{height:'200px',marginTop:'3rem',position:'absolute',bottom:'0px'}} className='mt-5 bg-violet-600 w-full'>
      <div className='grid grid-rows-1 grid-flow-col gap-4 justify-between p-5'>
        <div>
          <Link className='text-4xl font-bold' to={'/'}>
            <i className="fa-solid fa-truck-fast"></i>eCart
          </Link>
          <div style={{ fontSize: '14px' }}>
            <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col'>
            <h5>Links</h5>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }}>Landing page</Link>
            <Link to={'/home'} style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }}>Home</Link>
            <Link to={'/history'} style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }}>Watch History</Link>

          </div>
        </div>
        {/* guid */}
        <div className='flex flex-col'>
          <h5>Guides</h5>
          <a href='https://react.dev/' target='_blank' style={{textDecoration:'none',color:'white', fontSize:'15px'}}>React</a>
          <a href='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:'none',color:'white', fontSize:'15px'}}>React Bootstrap</a>
          <a href='https://getbootstrap.com/' target='_blank' style={{textDecoration:'none',color:'white', fontSize:'15px'}}>Bootstrap</a>

        </div>
        {/* contact us  */}
        <div className='flex flex-col' >
          <h5>Contact Us</h5>
          <div className="flex ">
          <input style={{width:'250px'}} className='rounded p-2' type="text" placeholder='Enter your email hear...' />
            <button className='bg-green-600 text-white ms-2 px-2 py-1 text-xl rounded'>
              <i className="fa-solid fa-arrow-right"></i>
              </button>
          </div>
          <div className="flex justify-between mt-3 "  >
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white', fontSize:'18px'}}> <i className="fa-brands fa-twitter"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white', fontSize:'18px'}}> <i className="fa-brands fa-instagram"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white', fontSize:'18px'}}> <i className="fa-brands fa-github"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white', fontSize:'18px'}}> <i className="fa-brands fa-facebook"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white', fontSize:'18px'}}><i className="fa-brands fa-linkedin"></i> </a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white', fontSize:'18px'}}> <i className="fa-solid fa-phone"></i></a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer