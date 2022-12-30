import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({bgColor,color,size,text,borderRadius,to}) => {
  return (
    <Link to={to}>
    <button type='button' style={{ backgroundColor:bgColor,color,borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
     {text}

    </button>
    </Link>
  )
}

export default Button