import React from 'react'
import './Button.css'

const Button = ({label,onClick}) => {
    return (
         <button onClick={onClick} className="button">{label}</button>
    )
}

export default Button
