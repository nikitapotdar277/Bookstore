import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div className='flex'>
        <Link to='/' className='px-4 py-1 rounded-lg w-fit'>
            <FaArrowLeft/>        
        </Link>
    </div>

    )
}

export default BackButton