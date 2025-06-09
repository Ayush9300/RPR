import React from 'react'
import './Card.css'


const Card = ({image1, image2 ,image3 , title, price}) => {
  return (
    <div className='card '>
        <div className="images">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
        </div>
       
  <span className='cardspan1'>{title} </span>
  <span className='cardspan2'>{price}</span>

           {/* <span className = 'cardspan1'>2BHK villa in Bhopal</span> */}

    </div>
  )
}

export default Card
