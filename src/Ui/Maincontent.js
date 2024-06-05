import React from 'react'
import './Maincontent.css'
import girlpic from '../assets/pexels-ali-pazani-2613260.png'
import wallpic from '../assets/pexels-humphrey-muleba-2045248.png'
import heart from '../assets/heart-1.svg'
import comment from '../assets/comment.svg'
import share from '../assets/share.svg'
import jones from '../assets/pexels-imad-clicks-9810659.png'
import wallart2 from '../assets/pexels-tobias-bjørkli-2236382.png'
import star from '../assets/star-1.svg'
import star1 from '../assets/Image 40.png'
import { BsThreeDotsVertical } from "react-icons/bs";
const Maincontent = () => {
  return (
    <div className='maincontentc'>
     <div className='post1'>
     <div className='Log'>
        <div className='pic'>
        <img src={girlpic} alt='girlpic'/>
         <div>
         <p className='number' >Lara Leaones</p>
        <p className='number' >@thewallart</p>
         </div>
        </div>
      <div className='number'>
         <BsThreeDotsVertical/>
      </div>
      </div>
      <div>
        <p className='number' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <p className='readmore'>Read More</p></p>
        <img src={wallpic} alt="wallpic.png"/>
      </div>
      <hr className='hr'/>
      <div className='comment'>
       <img className='heart' src={heart} alt='heart'/>
       <p className='number' >9.8k</p>
       <img src={comment} alt='comment'/>
       <p className='number' >8.6k</p>
       <img src={share} alt='share'/>
       <p className='number' >7.2k</p>
      </div>
     </div>
     
     <div className='post2'>
      <div className='Log'>
        <div className='pic'>
        <img src={jones} alt='girlpic'/>
         <div>
         <p className='number' >Thomas J.</p>
        <p className='number' >@thecustomecreator</p>
         </div>
        </div>
      <div className='number'>
         <BsThreeDotsVertical/>
      </div>
      </div>
      <div>
        <p className='number' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <p className='readmore'>Read More</p></p>
        <img src={wallart2} alt="wallpic.png"/>
      </div>
      <hr/>
      <div className='comment'>
       <img className='heart' src={heart} alt='heart'/>
       <p className='number' >9.8k</p>
       <img src={comment} alt='comment'/>
       <p className='number' >8.6k</p>
       <img src={share} alt='share'/>
       <p className='number' >7.2k</p>
      </div>
     </div>
     <div className='star'>
      <div className='post4' >
        <img className='post3' src={star1} alt='star1'/>
        <p className='dollor'>Modern Wall Decor Framed Painting</p>
        <div className='dollor'>
           <p className='dollor1'>$199.99</p>
           <img src={star} alt='star'/>
           <img src={star} alt='star'/>
           <img src={star} alt='star'/>
           <img src={star} alt='star'/>
           <img src={star} alt='star'/>
        </div>
      </div>
      <div>
        <img className='post3' src={star1} alt='star1'/>
        <p className='dollor'>Modern Wall Decor Framed Painting</p>
        <div className='dollor'>
           <p className='dollor1'>$199.99</p>
           <img src={star} alt='star'/>
           <img src={star} alt='star'/>
           <img src={star} alt='star'/>
           <img src={star} alt='star'/>
           <img src={star} alt='star'/>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Maincontent
