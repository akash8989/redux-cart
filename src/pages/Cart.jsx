import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { remove } from '../Redux/CartSlice'

const Cart = () => {
  const cartItems = useSelector((state)=>state.cart)
  const dispatch = useDispatch()

  const handleRemove=(id)=>{
    dispatch(remove(id))
  }
  return (
    
    <div className='cartWrapper'>
      
      {
        cartItems.map((el)=> (
          <div className='cartCard'>
          <img src={el.image} alt="img" />
          <h5>{el.title}</h5>
          <h5>{el.price}</h5>
          <button className='btn' onClick={()=> handleRemove(el.id)}>remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart
