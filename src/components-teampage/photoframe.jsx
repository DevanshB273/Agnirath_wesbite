import React from 'react'
import './photoframe.css'

function Photoframe({name,title}) {

  return (
    <div className='photoframe'>
        <div className='frame' />
        <p className='nameofpic'>{name}</p>
        <p className='titleofpic'>{title}</p>
    </div>
  )
}

export default Photoframe