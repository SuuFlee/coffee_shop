import React, { useState } from 'react'
import './footer.css'
import emailjs from 'emailjs-com';

function Footer() {
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

    const [res, setRes] = useState()
    
    const handleOnSubmit = (e) => {
        console.log(res)
        e.preventDefault();
        emailjs.send(SERVICE_ID, TEMPLATE_ID, {message: res}, PUBLIC_KEY)
          .then((result) => {
            alert('Message Sent Successfully')
          }, (error) => {
            console.log(error.text);
            alert('Something went wrong!')
          });
      };


    const footerAl = [
        { name: 'About' , two: 'Menu', three: 'Features', four: 'News & Blogs', five: 'Help & Supports'},
        { name: 'Company', two: 'How we work', three: 'Terms of service', four: 'Pricing', five: 'FAQ'},
        { name: 'Contact Us',two: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016', three: '+1 202-918-2132', four: 'beanscene@mail.com', five: 'www.beanscene.com', id: 'maxhei'}
    ]

  return (
    <div className='all'>
      <div className='firstPeace'>
        <div className='firstGroup'>
            <div className='firstText'>
                <h1 className='firstH'>Subscribe to get the Latest News</h1>
                <p className='firstDes'>Don’t miss out on our latest news, updates, tips and special offers</p>
            </div>
            <div className='firstGBtn'>
                <input onChange={(e)=>setRes(e.target.value)} className='Input'  placeholder='Enter your mail'/>
                <button onClick={handleOnSubmit} className='firstBtn'>Suscribe</button>
            </div>
        </div>
      </div>

    <img className='imgL' src='/img/pngwing.png'/>
    <img className='imgR' src='/img/pngwing.png'/>

      <div className='secondPeace'>
            <div className='wfwfwef'>
                <div className='secondText'>
                    <h1 className='textH'>Bean Scene</h1>
                    <p className='textDes'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className='icone'>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-youtube"></i>
                            <i className="bi bi-twitter"></i>
                        </div>
                </div>
                <div className='footerMainSpis'>
                    {footerAl.map((el, l)=>(
                        <div className={`footerSpis ${el.id === 'maxhei' ? 'contactUs' : ''}`} key={l}>
                            <h3 className='elH' >{el.name}</h3>
                            <div className='footerSpisEl'>
                                <p className='elThree'>{el.two}</p>
                                <p className='elThree'>{el.three}</p>
                                <p className='elThree'>{el.four}</p>
                                <p className='elThree'>{el.five}</p>
                            </div>    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
