import React from 'react'
import './des.css'

function SpisokCup() {
    const coffeeList = [
      {img: '/img/coffeeCup/Rectangle 7.png', name: 'Cappuccino', cofMil: 'Coffee 50% | Milk 50%', price: '$8.50'  },
      {img: '/img/coffeeCup/Rectangle 9.png', name: 'Chai Latte', cofMil: 'Coffee 50% | Milk 50%', price: '$8.50'  },
      {img: '/img/coffeeCup/Rectangle 11.png', name: 'Macchiato', cofMil: 'Coffee 50% | Milk 50%', price: '$8.50'  },
      {img: '/img/coffeeCup/Rectangle 13.png', name: 'Expresso', cofMil: 'Coffee 50% | Milk 50%', price: '$8.50'  }
    ];
    return (
      <div className='conSpis'>
          <h1 className='spisokName'>Enjoy a new blend of coffee style</h1>
          <p className='spisokDess'>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
          <div className='spisokAll'>
          {coffeeList.map((item, index)=>(
            <div className='spisok' key={index}>
              <img className='spisokImg'src={item.img}/>
              <h4 className='spisokH'>{item.name}</h4>
              <p className='spisokVnutr'>{item.cofMil}</p>
              <p className='spisokPrice'>{item.price}</p>
              <button className='spisokBtn'>Order Now</button>
            </div>
          ))}
          </div>
          <div className='conImg'>
            <img className='imgRight' src='/img/coffee_blast.png'></img>  
          </div>
      </div>
      
    
  )
}

export default SpisokCup



