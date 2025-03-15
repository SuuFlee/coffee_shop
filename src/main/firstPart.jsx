import React, { useState } from 'react'


function FirstPart() {

  const navItems = ['Home', 'Menu', 'About Us', 'Contact Us']
  const signBtn = [
    {id: 1, type : 'text', con : 'SignIn'}, 
    {id: 2, type: 'btn', con: 'SignUp'},
  ];

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <nav className='nav'>
          <p className='nameTitle'>Bean Scene</p>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'navCen'}>
            {navItems.map(l=><li className='nav-item' key={l}>{l}</li>)}
          </ul>
          <ul className='sign'>
            {signBtn.map((item)=> item.type==='text'? (<p className='signIn' key={item.id}>{item.con}</p>) : (<button className='signUp' key={item.id}>{item.con}</button>))}
          </ul>
        </nav>
  )
}

export default FirstPart

