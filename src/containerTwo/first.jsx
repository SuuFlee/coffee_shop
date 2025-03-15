import React from 'react'
import './two.css'

function First() {
  return (
    <div className='conFirst'>
      <div className='mainBlock'>
        <div className='block'>
          <h1 className='blockH'>Get a chance to have an Amazing morning</h1>
          <p className='blockDes'>We are giving you are one time opportunity to experience a better life with coffee.</p>
          <button className='blockBtn'>Order Now</button>
        </div>
      </div>
      <img className='cup' src="/img/cup.png"></img>
      <img className='bobi' src="/img/coffee_bean.png"></img>
    </div>
  )
}

export default First
