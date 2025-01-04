import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
      <>
      <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
      <div className='grid grid-cols-3 gap-4 mt-5'>
        <div className='col-span-2 border rounded p-5 shadow'>
          <table className='table-auto w-full'>
            <thead>
              <tr>
                <td className="font-semibold">#</td>
                <td className="font-semibold">Name</td>
                <td className="font-semibold">Image</td>
                <td className="font-semibold">Qty</td>
                <td className="font-semibold">Price</td>
                <td className="font-semibold">...</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Product</td>
                <td><img width={'50px'} src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2pvYjE0MjgtZWxlbWVudC0xMDctcC5wbmc.png" alt="" />
                </td>
                <td>
                  <div className='flex'>
                    <button className='font-bold'>-</button>
                    <input style={{width:'1.5rem'}} type="text" className='border p-1 rounded mx-2' value={2} readOnly/>
                    <button className='font-bold'>+</button>
                  </div>
                  </td>
                <td>$100</td>
                <td><button className='text-red-600'><i className='fa-solid fa-trash'></i></button></td>
              </tr>
            </tbody>
          </table>
          <div className='float-right mt-5 text-white'>
            <button className='bg-red-600 rounded p-2'>Empty Cart</button>
            <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2'> Shop More</Link>
          </div>
        </div>
       <div className='col-span-1 border rounded p-5 shadow'>
        <div>
          <h2 className='text-2xl font-bold my-4'>Total Amount: <span className='text-red-600'>$100</span></h2>
          <hr />
          <button className='bg-green-600 text-white w-full mt-4 text-2xl'>Check OUT
          </button>
        </div>
       </div>
      </div>
      </>
    </div>
    </>
  )
}

export default Cart