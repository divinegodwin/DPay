import React from 'react'

const Button = ({className, value, onClick}) => {
  return (
    <div>
        <button
        className={className}
        onClick={onClick}
        >
            {value}
            </button>
    </div>
  )
}

export default Button