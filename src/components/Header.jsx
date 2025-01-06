import React from 'react'
import { Link, Links } from 'react-router-dom'

const Header = ({ insideHome }) => {
    return (
        <nav className='flex bg-violet-600 fixed w-full p-5 text-white' >
            <Link className='text-2xl font-bold' to={'/'}>
                <i className="fa-solid fa-truck-fast"></i>eCart
            </Link>
            <ul className='flex-1 text-right'>
                {insideHome &&
                    <li className='list-none inline-block px-5'>
                    <input style={{ width: '300px' }} className='rounded p-2' type="text" placeholder='Search Products Here...' />
                </li>}
                <li className='list-none inline-block px-5'>
                    <Link to={'/wishlist'}>
                        <i className='fa-solid fa-heart text-red-600'></i>
                        Wishlist <span className='bg-black text-white p-1 rounded'>0</span>
                    </Link>
                </li>
                <li className='list-none inline-block px-5'>
                    <Link to={'/cart'}>
                        <i className='fa-solid fa-cart-plus text-green-600'></i>
                        Cart <span className='bg-black text-white p-1 rounded'>0</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header