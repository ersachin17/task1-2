import React from 'react'
import './SidebarLeft.css'
import frontimg  from '../assets/pexels-anastasia-shuraeva-4406721.png'
import frontimg1  from '../assets/pexels-andrea-piacquadio-3771118.png'
import frontimg2  from '../assets/pexels-antoni-shkraba-4442102.png'
import frontimg3  from '../assets/pexels-antoni-shkraba-4442005.png'

const SidebarLeft = () => {
  return (
    <div className='leftsidebar'>
      <p className='page'>Artists   Photographers  </p>  
      <div className='firstimg'>
        <img src={frontimg} alt='firstimg'/>
        <div className='letter'>
        <span className='contents' >Thomas Edward</span>
        <span className='content' >@thewildwithyou</span>
        </div>
      </div>
      <div className='firstimg1'>
        <img src={frontimg1} alt='firstimg'/>
        <div className='letter'>
        <span className='contents' >Chris Doe</span>
        <span className='content' >@thewildwithyou</span>
        </div>
      </div>
      <div className='firstimg2'>
        <img src={frontimg2} alt='firstimg'/>
        <div className='letter'>
        <span className='contents' >Emilie Jones</span>
        <span className='content' >@thewildwithyou</span>
        </div>
      </div>
      <div className='firstimg3'>
        <img src={frontimg3} alt='firstimg'/>
        <div className='letter'>
        <span className='contents' >Jessica Williams</span>
        <span className='content' >@thewildwithyou</span>
        </div>
      </div>
      <div className='firstimg4'>
        <div className='letter'>
        <span className='contents' >Thomas Edward</span>
        <span className='content' >@thewildwithyou</span>
        <div className='last'>
            <span className='content'>Privacy</span>
            <span className='content'>Terms od Services</span>
            <span className='content'>Cookie Notice</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarLeft
