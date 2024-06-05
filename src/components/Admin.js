import React from 'react'
import './Admin.css'
import Header from '../Ui/Header';
import Sidebar from '../Ui/Sidebar';
import Maincontent from '../Ui/Maincontent';
import SidebarLeft from '../Ui/SidebarLeft';

const Admin = () => {
  return (
    <div className='admin'>
      <Header/>
       <div className='main'>
      <Sidebar/>
      <Maincontent/>
      <SidebarLeft/>
       </div>
    </div>
  )
}

export default Admin;
