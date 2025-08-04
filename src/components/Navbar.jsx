import React from 'react';
import Logo from '../MovieLogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex border space-x-[25px] items-center pl-3 py-4'>
      <img className='w-[50px]' src={Logo} alt="Logo" />

      <Link to="/" className="font-bold text-[25px] text-blue-500" style={{ fontWeight: 700 }}>Movies</Link>
      <Link to='/watchlist' className='text-blue-500 text-[25px] font-bold' style={{ fontWeight: 700 }}>WatchList</Link>
    </div>
  );
}

export default Navbar