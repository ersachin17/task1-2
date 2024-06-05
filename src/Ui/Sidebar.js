import React from 'react'
import './Sidebar.css'
import home from '../assets/home.svg'
import notification from '../assets/notification.svg'
import shop from '../assets/heart.png'
import conversation from '../assets/message.svg'
import wallet from '../assets/message-1.svg'
import subscription from '../assets/favorite.svg'
import profile from '../assets/profile.svg'
import setting  from '../assets/setting.svg'
import logout  from '../assets/logout.svg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className='home'>
      <img src={home} alt='home.svg'/>
      <span>Home</span>
    </div>
    <div className='notification'>
      <img src={notification} alt='notification.svg'/>
      <span>Notifications</span>
    </div>
    <div className='shop'>
      <img src={shop} alt='shop.svg'/>
      <span>Shop</span>
    </div>
    <div className='conversation'>
      <img src={conversation} alt='shop.svg'/>
      <span>Conversation</span>
    </div>
    <div className='wallet'>
      <img src={wallet} alt='wallet.svg'/>
      <span>Wallet</span>
    </div>
    <div className='subscription'>
      <img src={subscription} alt='subscription.svg'/>
      <span>Subscription</span>
    </div>
    <div className='profile'>
      <img src={profile} alt='profile.svg'/>
      <span>My Profile</span>
    </div>
    <div className='setting'>
      <img src={setting} alt='setting.svg'/>
      <span>Setting</span>
    </div>
      <div className='logout'>
      <img src={logout} alt='logout.svg'/>
      <span className='lg'>Logout</span>
      </div>
    </div>
  )
}

export default Sidebar
