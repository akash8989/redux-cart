import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/CartSlice'

const Home = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
         const fetchData = async()=>{
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            setProducts(data)
         }
         fetchData()
    }, [])

    const handleClick=(item)=>{
      dispatch(add(item))
    }
  return (
  <>
  <div className='productsWrapper'>
  {
    products.map((item)=>(
        <div className='card' key={item.id}>
            <img src={item.image} alt='img'/>
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>
            <button className='btn' onClick={()=> handleClick(item)}>Add To Cart</button>
        </div>
    ))
  }
  </div>
  
  </>
  )
}

export default Home
