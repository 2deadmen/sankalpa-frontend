import React from 'react'
import pic from './Hourglass.gif'
import './loader.css'


const Loader = (props) => {
  
  return (
    props.loader &&
    <img className='loader center-image' width={100} height={100} src={pic} alt="" />

   
   
  )
}

export default Loader