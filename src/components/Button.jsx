import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props
}) => {
  return (
    <button
    className={`py-2 px-4 rounded-lg ${bgColor} ${textColor} ${className}`}
    type={type}
    {...props}
    >{children}</button>
  )
}

export default Button