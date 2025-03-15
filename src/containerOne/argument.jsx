import React, { useState } from 'react'
import './des.css'


function Argument() {
    const [activeIndex, setActiveIndex] = useState(0)
    const argumItem =[
        {img: '/img/argum/coffee-beans.png', name: 'Supreme Beans', des: 'Beans that provides great taste'},
        {img: '/img/argum/badge.png', name: 'High Quality', des: 'We provide the highest quality'},
        {img: '/img/argum/coffee-cup.png', name: 'Extraordinary ', des: 'Coffee like you have never tasted'},
        {img: '/img/argum/best-price.png', name: 'Affordable Price', des: 'Our Coffee prices are easy to afford'},

    ]

  return (
    <div className='conSpis'>
        <h1 className='spisokName'>Why are we different?</h1>
        <p className='spisokDes'>We don’t just make your coffee, we make your day!</p>
        <div>
            <div className='spisokAll'>
                {argumItem.map((item, l)=>
                <div onClick={()=>setActiveIndex(l)} className={l==activeIndex ? "active argumSpis": "argumSpis"} key={l}>
                    <div className='argumAll'>
                        <img className='argumImg' src={item.img}></img>
                        <h2 className='argumName'>{item.name}</h2>
                        <p className='argumDes'>{item.des}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
        <div className='Down'>
            <p className='DownP'>Great ideas start with great coffee, Lets help you achieve that </p>
            <p className='DownH'>Get started today.</p>
        </div>
        <button className='DownBtn'>Join Us</button>
    </div>
  )
}

export default Argument