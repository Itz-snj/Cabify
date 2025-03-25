import React from 'react'

import Navbar from '../components/navbar'
import Image from "../ui/404.jpg"
const Notfound = () => {
  return (
    <>
    <Navbar/>
    <div className='nbody' style={{'display':'flex',"alignItems":'center','justifyContent':'center'}}>
  <img src={Image} style={{'height':'600px','width':'600px'}}/>
    </div>
    </>
  )
}

export default Notfound