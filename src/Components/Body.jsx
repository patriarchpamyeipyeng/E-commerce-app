import React from 'react'

const Body = () => {
  return (
    <div className=''>
        <h3 className='text-orange-500 uppercase '>sneaker company</h3>
      <h1 className='text-xl font-bold tracking-wide text-black-700'>Fall Limited Edition Sneakers</h1>
      <p className='text-gray-500 '>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstabd everything the weather can offer.</p>
      <p className='text-xl font-bold text-black-700'>$125.00</p>
      <p className='items-center w-10 font-bold text-orange-500 bg-orange-100 '>50%</p>
      <p className='text-gray-400 line-through'>$250</p>
      <button className='px-5 py-3 bg-orange-500 rounded-lg hover:bg-orange-400'> Add to Cart</button>
    </div>
  )
}

export default Body
