import React, { useState } from "react";
import './two.css'

function Sliderr() {
  const [current, setCurrent] = useState(0);

  const slider = [
    { id: 0, name: "Jonny Thomas", dol: "Project Manager", img: "./img/Rectangle.png", des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset....."},
    { id: 1, name: "Jon" , dol: "Prof", img: "./img/Rectangle.png", des: "jklkjhgfhjwifwvjoiwivwoiviwivwiivwiwvio"},
    { id: 2, name: "Kate", dol: "Proj", img: "./img/Rectangle.png", des: "wowvwivmwi"},
    { id: 3, name: "Kate2", dol: "Proj2", img: "./img/Rectangle.png", des: "wowvwivmwi"}
  ]

  const nextPage=()=>{
    if(current<slider.length-1){
      setCurrent(current+1)
    } else{
      setCurrent(0)
    }
  }
  const prevPage=()=>{
    if(current>0){
      setCurrent(current-1)
  } else{
    setCurrent(slider.length-1)
  }
}

  return (
        <div className='SliderCon'>
        <div className='SliderFirst'>
            <h1 className='SliderH'>Our coffee perfection feedback</h1>
            <p className='SliderUnderH'>Our customers has amazing things to say about us</p>
        </div>
        <img className='FirstImg' src='/img/coffee_blast.png'></img>


        <div className='conMainSlider'>
        <div className='mainSlider'>
            <p className='kovichka'>“</p>
            <p className='sliderDes'>{slider[current].des}</p>
            <div className="sliderButtons">
              <button onClick={prevPage} className='leftBtn'>&#8592;</button>
              <button onClick={nextPage} className='rightBtn'>&#8594;</button>
            </div>
            <h2 className='sliderName'>{slider[current].name}</h2>
            <p className='sliderDol'>{slider[current].dol}</p>
            <img className='imgSlider' src={slider[current].img}></img>
        </div>
        </div>


        <img className='SecondImg' src='/img/coffee_blast.png'></img>
        </div>
  )
}

export default Sliderr
