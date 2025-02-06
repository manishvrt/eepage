import React from 'react'
import MobNav from './MobNav'
import Navbar from './Navbar'
const DynamicNavbar = () => {
  return (
    <div>
      <Navbar />
      <MobNav/>
    </div>
  )
}

export default DynamicNavbar