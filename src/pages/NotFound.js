import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className='content-center mx-auto text-center'  >
      <h2 className="text-7xl text-orange-500 py-5" >Oops!!</h2>
      <h2 className="text-2xl pb-5" >We couldn't find the page you are looking for</h2>

      <Link to='/' >
        <button className="btn gap-2">
          Back to Home  
          <FaHome />
        </button>
      </Link>
    </div>
  )
}

export default NotFound