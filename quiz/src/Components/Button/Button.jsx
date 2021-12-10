import React from 'react'
import './Button.css'

const Button = ({label,onClick,clicked}) => {
    return (
         <button onClick={onClick} className={clicked?"buttonc":"button"}>{label}</button>
    )
}

export default Button
