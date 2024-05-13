import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state)=>state.cart)
  return (
    <div style={{display: "flex", alignItems:"center", justifyContent:"space-between"}}>
        <span>REDUX TUTORIALS</span>
  <div>
    <Link className='navLink' style={{fontWeight:"bold"}} to={'/'}>Home</Link>
    <Link className='navLink' style={{marginRight:"5px", fontWeight:"bold"}} to={'/cart'}>Cart</Link>
    <span  style={{fontWeight:"bold"}}>item : {items.length}</span>
  </div>
    </div>
  )
}

export default Navbar
