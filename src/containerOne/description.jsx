import React from 'react'
import './des.css'


function Description() {
  return (
    <div className='conDes'>
      <div className='desShopImg'>
        <div className='desShop'>
            <h1 className='desShopH'>Discover the best coffee</h1>
            <p className='desShopDes'>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
            <button className='desShopBtn'>Learn More</button>
        </div>
          <img src='/img/stylized-cup-coffee-out-coffee-beans-flat-lay 1.png'></img>
      </div>
      <img className='coffeeBlast' src='../img/coffee_blast.png'></img>
    </div>
  )
}

export default Description
